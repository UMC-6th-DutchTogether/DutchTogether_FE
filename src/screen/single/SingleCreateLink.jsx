import { useState, useEffect } from 'react';
import { SingleLinkContainer, SingleLoginTitle, SingleLinkBox, TextContainer, LinkButtonContainer, LinkButton, NewSingleLink } from '../../styles/styledComponents'




export default function SingleCreateLink() {
    const [link, setLink] = useState('');


    useEffect(() => {
        // 여기에 링크 생성 API 호출 (현재는 Mock Data 사용)
        const newLink = 'https://dutchtogether.com/OOOO_nnnn';
        setLink(newLink);
    }, []);

    const handleCopy = () => {
        navigator.clipboard.writeText(link);
        alert('링크가 복사되었습니다!');
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: '정산 링크',
                url: link,
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
        <SingleLinkContainer>
            <SingleLoginTitle>나만 정산하기</SingleLoginTitle>
            <SingleLinkBox>
                <TextContainer>
                    <p>링크가 생성되었습니다.</p>
                    <p>아래 링크를 공유하여 정산을 진행해주세요!</p>
                </TextContainer>

                <NewSingleLink>
                    {link}
                </NewSingleLink>

                <LinkButtonContainer>
                    <LinkButton onClick={handleCopy}>링크 복사하기</LinkButton>
                    <LinkButton onClick={handleShare}>링크 공유하기</LinkButton>
                </LinkButtonContainer>
            </SingleLinkBox>
        </SingleLinkContainer>
    );
}



