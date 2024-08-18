import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import shareIcon from '../../assets/공유아이콘.png';
import copyIcon from '../../assets/복사아이콘.png';
import {
  DecorationBarLeft,
  DecorationBarLeftText,
  MultiPayContainerLeft,
  TitleText,
  ContentContainer,
  TransparentBox,
  MainBackground,
  LinkTextContainer,
  LinkContainer,
  LinkText
} from '../../styles/styledComponents';

export default function MultiCreateLink() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { meetingLink } = useSelector((state) => state.multiPay);
  const [loading, setLoading] = useState(false);

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
          console.log('링크 공유');
        })
        .catch((error) => {
          console.error('링크 공유 에러', error);
        });
    } else {
      alert('공유 기능이 지원되지 않는 브라우저입니다.');
    }
  };

  return (
    <MainBackground>
      <DecorationBarLeft>
        <DecorationBarLeftText>같이 계산해요!</DecorationBarLeftText>
      </DecorationBarLeft>

      <TransparentBox />

      <MultiPayContainerLeft>
        <TitleText style={{ marginBottom: '48px' }}>링크 생성</TitleText>
        <ContentContainer>
          <LinkTextContainer>
            <p>링크가 생성되었습니다.</p>
            <p>아래 링크를 공유하여 정산을 진행해주세요!</p>
          </LinkTextContainer>
          <LinkContainer>
            <LinkText>{meetingLink || "링크를 받지 못했습니다ㅠ"}</LinkText>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>

              <CopyToClipboard text={meetingLink || "링크를 받지 못했습니다ㅠ"} onCopy={handleCopy}>
                <img src={copyIcon} alt="Copy Icon" style={{ cursor: 'pointer' }} />
              </CopyToClipboard>

              <img
                src={shareIcon}
                alt="Share Icon"
                style={{ cursor: 'pointer' }}
                onClick={handleShare}
              />
            </div>
          </LinkContainer>
        </ContentContainer>
      </MultiPayContainerLeft>
    </MainBackground>
  );
}