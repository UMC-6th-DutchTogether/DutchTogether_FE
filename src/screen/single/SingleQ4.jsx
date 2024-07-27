import { Link } from 'react-router-dom';
import { setAmount } from '../../store/singlePaySlice';
import { useDispatch, useSelector } from 'react-redux';
import { SinglePageContainer, QuestionContainer, SingleLoginTitle, SinglePageTitle, SingleQ1Box, LeftArrowButton, RightArrowButton, QuestionText, SingleText1, Input } from '../../styles/styledComponents'


export default function SingleQ3() {
  //store 동기화
  const dispatch = useDispatch();
  const { amount } = useSelector((state) => state.singlePay);

  //입력시 호출 함수
  const handleInputChange = (e) => {
    dispatch(setAmount(e.target.value))
  };
  //공백 확인 함수
  const isInputValid = () => {
    return amount.trim() !== '';
  };
  return (
    <SinglePageContainer>
      <SinglePageTitle>나만 정산하기</SinglePageTitle>
      <QuestionContainer>
        <Link to="/SingleQ3">
          <LeftArrowButton />
        </Link>

        <SingleQ1Box>
          <SingleText1>Q.정산하고자하는 금액이 얼마인가요?</SingleText1>
          <Input type="text" value={amount} onChange={handleInputChange} />
        </SingleQ1Box>

        <Link to="/SingleQ5">
          <RightArrowButton type="button" disabled={!isInputValid()} />
        </Link>
      </QuestionContainer>
    </SinglePageContainer>
  );
}
