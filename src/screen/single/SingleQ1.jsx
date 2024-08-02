import { Link } from 'react-router-dom';
import { setMeetingName } from '../../store/singlePaySlice';
import { useDispatch, useSelector } from 'react-redux';
import { SinglePageContainer, QuestionContainer, LeftArrowButton, RightArrowButton, Input, SingleQ1Box, SinglePageTitle, SingleText1 } from '../../styles/styledComponents'




export default function SingleQ1() {
  //store 동기화
  const dispatch = useDispatch();
  const { meetingName } = useSelector((state) => state.singlePay);

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
      <SinglePageTitle>나만 정산하기</SinglePageTitle>

      <QuestionContainer>
        <Link to="/SingleLogin">
          <LeftArrowButton />
        </Link>

        <SingleQ1Box>
          <SingleText1>Q.정산 모임 이름이 무엇인가요?</SingleText1>
          <Input type="text" value={meetingName} onChange={handleInputChange} />
        </SingleQ1Box>

        <Link to="/SingleQ2">
          <RightArrowButton type="summit" disabled={!isInputValid()} />
        </Link>
      </QuestionContainer>
    </SinglePageContainer>
  );
}
