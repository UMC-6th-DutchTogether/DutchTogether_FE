import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setMeetingLink } from '../../store/singlePaySlice';
import { SyncLoader } from "react-spinners";
import { SinglePageContainer, SinglePageTitle, TextContainer, LinkButtonContainer, LinkButton, NewSingleLink, SingleText1, SingleQ1Box, QuestionContainer, SingleText2, StyledCopyIcon, LoadingConatiner } from '../../styles/styledComponents';

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
        navigator.clipboard.writeText(meetingLink);
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
            <SinglePageTitle>나만 정산하기</SinglePageTitle>
            <QuestionContainer>
                <SingleQ1Box>
                    <SingleText1>링크가 생성되었습니다.</SingleText1>

                </SingleQ1Box>

                <NewSingleLink>
                    {meetingLink}
                    <StyledCopyIcon icon={faCopy} onClick={handleCopy} />
                </NewSingleLink>

                <LinkButtonContainer>
                    <LinkButton onClick={handleCopy}>링크 복사하기</LinkButton>
                    <LinkButton onClick={handleShare}>링크 공유하기</LinkButton>
                </LinkButtonContainer>
            </QuestionContainer>
        </SinglePageContainer>
    );
}