import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { setMeetingName } from '../../store/multiPaySlice';
import { useDispatch, useSelector } from 'react-redux';
import { SinglePageContainer, QuestionContainer, LeftArrowButton, RightArrowButton, Input, SingleQ1Box, SinglePageTitle, SingleText1, ErrorMessage } from '../../styles/styledComponents';
import axios from 'axios';


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

  // api 호출
  const handleSubmit = async () => {
    console.log(meetingNum, meetingName)
    try {
      const response = await axios.put('https://umc.dutchtogether.com/api/meetings/meetingName', {
        meetingNum: meetingNum,
        meetingName: meetingName, //
      });
      if (response.status === 200) {
        navigate('/MultiQ2');
        console.log(response);
      } else {
        console.error('업데이트에 실패했습니다.'); // 실패 시 에러 메시지 설정
      }
    } catch (err) {
      console.error('요청 중 오류가 발생했습니다.'); // 요청 중 오류 시 에러 메시지 설정
      console.error(err);
    }
  };

  // 공백 확인 함수
  const isInputValid = () => {
    return (meetingName && meetingName.trim() !== '');
  };

  return (
    <SinglePageContainer>
      <SinglePageTitle>여러명 전산하기</SinglePageTitle>

      <QuestionContainer>
        <LeftArrowButton onClick={handleBackClick} />

        <SingleQ1Box>
          <SingleText1>Q.정산에 참여하는 인원의 이름을 모두 작성해주세요</SingleText1>
          <Input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="','으로 구분하니 유의해주시길 바랍니다."
          />
        </SingleQ1Box>

        <RightArrowButton
          type="button"
          disabled={!isInputValid()} // 로딩 중일 때 버튼 비활성화
          onClick={handleNextClick}
        />


      </QuestionContainer>
    </SinglePageContainer>
  );
}
