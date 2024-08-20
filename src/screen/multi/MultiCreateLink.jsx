import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import shareIcon from '../../assets/공유아이콘.png';
import copyIcon from '../../assets/복사아이콘.png';
import axios from 'axios';
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
import { setMeetingLink } from '../../store/multiPaySlice';


export default function MultiCreateLink() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { meetingLink, meetingNum } = useSelector((state) => state.multiPay);


  const getSettler = async () => {
    try {
      const response = await axios.get(`https://umc.dutchtogether.com/api/settler/d84a1176`)
      const settlers = await response.data.data.settlers;
      console.log('정산자', settlers);

    } catch (error) {
      console.log(error);
    }
  }

  const getInfo = async () => {
    try {
      const response = await axios.get(`https://umc.dutchtogether.com/api/payers/info/128`)
      const payerInfos = await response.data.data.payerInfos;
      console.log('정산자 정보', payerInfos);

    } catch (error) {
      console.log(error);
    }
  }

  //링크 받기 함수
  const getLink = async () => {
    try {
      const response = await axios.get(`https://umc.dutchtogether.com/api/meetings/${meetingNum}/link`)
      if (response.status == 200) {
        const Link = response.data.data.meetingLink;
        console.log('링크', response);
        dispatch(setMeetingLink(Link));
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  }

  // 페이지 생성시 링크 받기
  useEffect(() => {
    getLink();
  }, [])



  //복사 함수
  const handleCopy = () => {
    alert('링크가 복사되었습니다!');
    getSettler();
    getInfo();
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