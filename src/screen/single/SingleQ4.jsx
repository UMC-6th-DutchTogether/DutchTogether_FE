import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAmount } from '../../store/singlePaySlice';
import { SinglePageContainer, QuestionContainer, DecorationBarRight, DecorationBarRightText, SingleQ1Box, LeftArrowButton, RightArrowButton, SingleQText, Input } from '../../styles/styledComponents';

export default function SingleQ4() {
  const dispatch = useDispatch();
  const { amount } = useSelector((state) => state.singlePay);

  useEffect(() => {
    const storedAmount = localStorage.getItem('amount');
    if (storedAmount) {
      dispatch(setAmount(parseFloat(storedAmount)));
    }
  }, [dispatch]);

  useEffect(() => {
    if (!isNaN(amount)) {
      localStorage.setItem('amount', amount.toString());
    }
  }, [amount]);

  const handleInputChange = (e) => {
    const value = e.target.value;

    // 숫자만 허용
    if (/^\d*$/.test(value)) {
      // 입력값을 숫자로 변환 
      const numericValue = parseFloat(value);

      // NaN 검사를 통해 유효한 숫자인지 확인
      if (!isNaN(numericValue)) {
        dispatch(setAmount(numericValue));
      } else {
        dispatch(setAmount(0)); // NaN인 경우  0으로 설정
      }
    }
  };

  // 유효성 검사
  const isInputValid = () => {
    return amount !== '' && !isNaN(amount) && amount !== 0;
  };

  return (
    <SinglePageContainer>
      <DecorationBarRight>
        <DecorationBarRightText>혼자 계산해요!</DecorationBarRightText>
      </DecorationBarRight>

      <QuestionContainer>
        <Link to="/SingleQ3">
          <LeftArrowButton />
        </Link>

        <SingleQ1Box>
          <SingleQText>Q.정산하고자하는 금액이 얼마인가요?</SingleQText>
          <Input type="text" value={amount} onChange={handleInputChange} inputMode="numeric" />
        </SingleQ1Box>

        <Link to="/SingleQ5">
          <RightArrowButton type="button" disabled={!isInputValid()} />
        </Link>
      </QuestionContainer>
    </SinglePageContainer>
  );
}
