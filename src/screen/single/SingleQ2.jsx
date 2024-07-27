import { Link } from 'react-router-dom';

import { setBankName, setAccountNumber } from '../../store/singlePaySlice';
import { useDispatch, useSelector } from 'react-redux';
import { SinglePageContainer, QuestionContainer, SingleLoginTitle, SingleQ1Box, LeftArrowButton, RightArrowButton, QuestionText, Input, SinglePageTitle, SingleText1 } from '../../styles/styledComponents'



export default function SingleQ2() {
  //store 동기화
  const dispatch = useDispatch();
  const { bankName } = useSelector((state) => state.singlePay);

  //입력시 호출 함수
  const handleInputChange = (e) => {
    dispatch(setBankName(e.target.value))
  };
  //공백 확인 함수
  const isInputValid = () => {
    return bankName.trim() !== '';
  };
  return (
    <SinglePageContainer>
      <SinglePageTitle>나만 정산하기</SinglePageTitle>
      <QuestionContainer>
        <Link to="/SingleQ1">
          <LeftArrowButton type="summit" />
        </Link>

        <SingleQ1Box>
          <SingleText1>Q.정산 금액을 받는 은행과 계좌번호를 입력해주세요.</SingleText1>
          <Input type="text" value={bankName} onChange={handleInputChange} />
        </SingleQ1Box>

        <Link to="/SingleQ3">
          <RightArrowButton type="summit" disabled={!isInputValid()} />
        </Link>
      </QuestionContainer>
    </SinglePageContainer>
  );
}
