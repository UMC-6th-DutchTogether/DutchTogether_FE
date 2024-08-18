import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { setMeetingName } from '../../store/multiPaySlice';
import { useDispatch, useSelector } from 'react-redux';
import {
  DecorationBarLeft,
  DecorationBarLeftText,
  MultiPayContainerLeft,
  TitleText,
  TransparentBox,
  MainBackground,
  TextInputContainer,
  InputSubmitButton,
  TextInput
} from '../../styles/styledComponents';
import axios from 'axios';
import { setMeetingLink } from '../../store/multiPaySlice';

export default function MultiQ1() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState(''); // 에러 상태 추가

  // store 동기화
  const { meetingName, meetingNum } = useSelector((state) => state.multiPay);

  // 입력시 호출 함수
  const handleInputChange = (e) => {
    dispatch(setMeetingName(e.target.value));
  };

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


  // api 호출
  const handleSubmit = async () => {
    console.log(meetingNum, meetingName);
    getLink();
    try {
      const response = await axios.put('https://umc.dutchtogether.com/api/meetings/meetingName', {
        meetingNum: meetingNum,
        meetingName: meetingName, //
      });
      if (response.status === 200) {
        navigate('/MultiQ2');
        console.log("로그인", response);
      } else {
        setError('업데이트에 실패했습니다.'); // 실패 시 에러 메시지 설정
      }
    } catch (err) {
      setError('요청 중 오류가 발생했습니다.'); // 요청 중 오류 시 에러 메시지 설정
      console.error(err);
    }
  };

  // 공백 확인 함수
  const isInputValid = () => {
    return (meetingName && meetingName.trim() !== '');
  };

  return (
    <MainBackground>
      <DecorationBarLeft>
        <DecorationBarLeftText>같이 계산해요! </DecorationBarLeftText>
      </DecorationBarLeft>

      <TransparentBox />

      <MultiPayContainerLeft style={{ alignItems: "center", gap: '35px' }}>
        <TitleText style={{ marginTop: "208px", marginBottom: "60px" }}>정산 모임 이름이 무엇인가요?</TitleText>

        <TextInputContainer>
          <TextInput type="text" value={meetingName || ''} onChange={handleInputChange} placeholder="정산 모임을 입력해주세요!" />
          <InputSubmitButton type="button" disabled={!isInputValid()} onClick={handleSubmit} >제출하기</InputSubmitButton>
        </TextInputContainer>
      </MultiPayContainerLeft>

    </MainBackground >
  );
}
