import { Link } from 'react-router-dom';
import { setAmount } from '../../store/singlePaySlice';
import { useDispatch, useSelector } from 'react-redux';
import { SingleLoginContainer, QuestionContainer, SingleLoginTitle, SingleQ1Box, LeftArrowButton, RightArrowButton, QuestionText, Input } from '../../styles/styledComponents'


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
    <SingleLoginContainer>
      <SingleLoginTitle>나만 정산하기</SingleLoginTitle>
      <QuestionContainer>
        <Link to="/SingleQ3">
          <LeftArrowButton />
        </Link>

        <SingleQ1Box>
          <QuestionText>Q.정산하고자하는 금액이 얼마인가요?</QuestionText>
          <Input type="text" value={amount} onChange={handleInputChange} />
        </SingleQ1Box>

        <Link to="/SingleQ5">
          <RightArrowButton type="button" disabled={!isInputValid()} />
        </Link>
      </QuestionContainer>
    </SingleLoginContainer>
  );
}
