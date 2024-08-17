import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setMeetingLink } from '../../store/singlePaySlice';
import { SyncLoader } from "react-spinners";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { SinglePageContainer, SingleNewLinkContainer, LinkButtonContainer, LinkButton, NewSingleLink, SingleLinkText, SingleLinkTextBox, StyledCopyIcon, LoadingConatiner, DecorationBarRight, DecorationBarRightText, SingleLinkTitle } from '../../styles/styledComponents';

import { faCopy } from '@fortawesome/free-solid-svg-icons';

export default function SingleCreateLink() {
    const dispatch = useDispatch();
    const { meetingNum, meetingLink } = useSelector((state) => state.singlePay);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const fetchMeetingLink = async () => {
            try {
                // Link 호출 api
                const response = await axios.get(`https://umc.dutchtogether.com/api/meetings/${meetingNum}/link`);
                if (response.status === 200) {
                    console.log(response);
                    dispatch(setMeetingLink(response.data.data.meetingLink));
                } else {
                    console.error('링크 호출 중 오류가 발생했습니다.');
                }
            } catch (err) {
                console.error('링크 호출 실패했습니다.', err);
            } finally {
                setLoading(false);
            }
        };

        fetchMeetingLink();
    }, []);

    const handleCopy = () => {
        alert('링크가 복사되었습니다!');
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: '정산 링크',
                url: meetingLink,
            })
                .then(() => {
                    console.log('Link shared successfully');
                })
                .catch((error) => {
                    console.error('Error sharing link:', error);
                });
        } else {
            alert('공유 기능이 지원되지 않는 브라우저입니다.');
        }
    };

    return (
        <SinglePageContainer>
            {loading && (
                <LoadingConatiner>
                    <SyncLoader />
                </LoadingConatiner>
            )}
            <DecorationBarRight>
                <DecorationBarRightText>혼자 계산해요!</DecorationBarRightText>
            </DecorationBarRight>

            <SingleNewLinkContainer>
                <SingleLinkTitle >링크 생성</SingleLinkTitle >

                <SingleLinkTextBox>
                    <SingleLinkText>링크가 생성되었습니다.</SingleLinkText>
                    <SingleLinkText>아래 링크를 공유하여 정산을 진행해주세요!</SingleLinkText>
                </SingleLinkTextBox>

                <NewSingleLink>
                    {meetingLink}
                    <CopyToClipboard text={meetingLink} onCopy={handleCopy}>
                        <StyledCopyIcon icon={faCopy} />
                    </CopyToClipboard>
                </NewSingleLink>

                <LinkButtonContainer>
                    <CopyToClipboard text={meetingLink} onCopy={handleCopy}>
                        <LinkButton>링크 복사하기</LinkButton>
                    </CopyToClipboard>
                    <LinkButton onClick={handleShare}>링크 공유하기</LinkButton>
                </LinkButtonContainer>

            </SingleNewLinkContainer>

        </SinglePageContainer >
    );
}