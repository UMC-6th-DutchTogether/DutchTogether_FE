import { Link } from 'react-router-dom';
import { setNumberOfPeople } from '../../store/singlePaySlice';
import { useDispatch, useSelector } from 'react-redux';
import { SingleLoginContainer, QuestionContainer, SingleLoginTitle, SingleQ1Box, LeftArrowButton, RightArrowButton, QuestionText, Input } from '../../styles/styledComponents'


export default function SingleQ3() {
  //store 동기화
  const dispatch = useDispatch();
  const { numberOfPeople } = useSelector((state) => state.singlePay);

  //입력시 호출 함수
  const handleInputChange = (e) => {
    dispatch(setNumberOfPeople(e.target.value))
  };
  //공백 확인 함수
  const isInputValid = () => {
    return numberOfPeople.trim() !== '';
  };
  return (
    <SingleLoginContainer>
      <SingleLoginTitle>나만 정산하기</SingleLoginTitle>
      <QuestionContainer>
        <Link to="/SingleQ4">
          <LeftArrowButton />
        </Link>

        <SingleQ1Box>
          <QuestionText>Q.몇 명이 정산하나요?</QuestionText>
          <Input type="text" value={numberOfPeople} onChange={handleInputChange} />
        </SingleQ1Box>

        <Link to="/CheckSingleQ">
          <RightArrowButton type="button" disabled={!isInputValid()} />
        </Link>
      </QuestionContainer>
    </SingleLoginContainer>
  );
}
