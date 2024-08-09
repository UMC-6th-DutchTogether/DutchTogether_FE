import { Link } from 'react-router-dom';
import { setMeetingName } from '../../store/multiPaySlice';
import { useDispatch, useSelector } from 'react-redux';
import { SinglePageContainer, QuestionContainer, LeftArrowButton, RightArrowButton, Input, SingleQ1Box, SinglePageTitle, SingleText1 } from '../../styles/styledComponents'




export default function MultiQ1() {
  //store 동기화
  const dispatch = useDispatch();
  const { meetingName } = useSelector((state) => state.multiPay);

  //입력시 호출 함수
  const handleInputChange = (e) => {
    dispatch(setMeetingName(e.target.value))
  };

  //공백 확인 함수
  const isInputValid = () => {
    return meetingName.trim() !== '';
  };


  return (
    <SinglePageContainer>
      <SinglePageTitle>여러명 정산하기</SinglePageTitle>

      <QuestionContainer>
        <Link to="/MultiLogin">
          <LeftArrowButton />
        </Link>

        <SingleQ1Box>
          <SingleText1>Q.정산 모임 이름이 무엇인가요?</SingleText1>
          <Input type="text" value={meetingName} onChange={handleInputChange} placeholder="정산 모임을 입력해주세요!" />
        </SingleQ1Box>

        <Link to="/MultiQ2">
          <RightArrowButton type="summit" disabled={!isInputValid()} />
        </Link>
      </QuestionContainer>
    </SinglePageContainer>
  );
}
