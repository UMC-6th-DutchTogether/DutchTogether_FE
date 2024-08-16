import { Link } from 'react-router-dom';
import { setNumberOfPeople } from '../../store/singlePaySlice';
import { useDispatch, useSelector } from 'react-redux';
import { SinglePageContainer, QuestionContainer, DecorationBarRight, DecorationBarRightText, SingleQ1Box, LeftArrowButton, RightArrowButton, SingleQText, Input } from '../../styles/styledComponents';

export default function SingleQ5() {
  //store 동기화
  const dispatch = useDispatch();
  const { numberOfPeople } = useSelector((state) => state.singlePay);

  // 입력시 호출 함수
  const handleInputChange = (e) => {
    const value = e.target.value;

    // 숫자만 허용하도록 처리하고 NaN 예외 처리
    if (/^\d*$/.test(value)) {
      const numericValue = parseInt(value);

      if (!isNaN(numericValue)) {
        dispatch(setNumberOfPeople(numericValue));
      } else {
        dispatch(setNumberOfPeople(0));
      }
    }
  };

  // 공백 확인 함수
  const isInputValid = () => {
    // numberOfPeople이 숫자가 아닌 경우를 대비하여 처리
    return numberOfPeople !== '' && !isNaN(numberOfPeople);
  };

  return (
    <SinglePageContainer>
      <DecorationBarRight>
        <DecorationBarRightText>혼자 계산해요! </DecorationBarRightText>
      </DecorationBarRight>

      <QuestionContainer>
        <Link to="/SingleQ4">
          <LeftArrowButton />
        </Link>

        <SingleQ1Box>
          <SingleQText>Q.몇 명이 정산하나요?</SingleQText>
          <Input type="text" value={numberOfPeople} onChange={handleInputChange} />
        </SingleQ1Box>

        <Link to="/CheckSingleQ">
          <RightArrowButton type="button" disabled={!isInputValid()} />
        </Link>
      </QuestionContainer>
    </SinglePageContainer>
  );
}