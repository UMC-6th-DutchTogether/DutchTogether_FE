import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { setMeetingName } from '../../store/singlePaySlice';
import { useDispatch, useSelector } from 'react-redux';
import {
  SinglePageContainer, QuestionContainer,
  DecorationBarRight, DecorationBarRightText,
  TitleText, TextInputContainer, TextInput, InputSubmitButton

} from '../../styles/styledComponents'
import axios from 'axios';


export default function SingleQ1() {
  //store 동기화
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { meetingName, meetingNum } = useSelector((state) => state.singlePay);
  const [setError] = useState('');

  useEffect(() => {
    // 로컬 스토리지에서 meetingName 가져오기
    const storedMeetingName = localStorage.getItem('meetingName');
    if (storedMeetingName) {
      dispatch(setMeetingName(storedMeetingName));
    }
  }, [dispatch]);

  //입력시 호출 함수
  const handleInputChange = (e) => {
    const name = e.target.value;
    dispatch(setMeetingName(name));
    localStorage.setItem('meetingName', name);
  };

  //공백 확인 함수
  const isInputValid = () => {
    return meetingName.trim() !== '';
  };

  const handleSubmit = async () => {
    if (!isInputValid()) return;

    try {
      const response = await axios.put('https://umc.dutchtogether.com/api/meetings/meetingName', {
        meetingNum: meetingNum || 0,
        meetingName: meetingName,
      });
      if (response.status === 200) {
        navigate('/SingleQ2');
      } else {
        setError('모임 이름 변경 실패');
      }
    } catch (err) {
      setError('모임 이름 변경 요청 실패');
      console.error(err);
    }
  };


  return (
    <SinglePageContainer>

      <DecorationBarRight>
        <DecorationBarRightText>혼자 계산해요!</DecorationBarRightText>
      </DecorationBarRight>

      <QuestionContainer>
        <TitleText style={{ marginTop: "208px", marginBottom: "60px" }}>정산 모임 이름이 무엇인가요?</TitleText>

        <TextInputContainer>
          <TextInput type="text" value={meetingName || ''} onChange={handleInputChange} placeholder="정산 모임을 입력해주세요!" />
          <InputSubmitButton type="button" disabled={!isInputValid()} onClick={handleSubmit} >제출하기</InputSubmitButton>
        </TextInputContainer>
      </QuestionContainer>

    </SinglePageContainer>
  );
}
