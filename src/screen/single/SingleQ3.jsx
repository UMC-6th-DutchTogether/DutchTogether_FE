import { Link } from 'react-router-dom';
import { setAccountHolder } from '../../store/singlePaySlice';
import { useDispatch, useSelector } from 'react-redux';
import { SingleLoginContainer, QuestionContainer, SingleLoginTitle, SingleQ1Box, LeftArrowButton, RightArrowButton, QuestionText, Input } from '../../styles/styledComponents'


export default function SingleQ3() {
  //store 동기화
  const dispatch = useDispatch();
  const { accountHolder } = useSelector((state) => state.singlePay);

  //입력시 호출 함수
  const handleInputChange = (e) => {
    dispatch(setAccountHolder(e.target.value))
  };
  //공백 확인 함수
  const isInputValid = () => {
    return accountHolder.trim() !== '';
  };
  return (
    <SingleLoginContainer>
      <SingleLoginTitle>나만 정산하기</SingleLoginTitle>
      <QuestionContainer>
        <Link to="/SingleQ2">
          <LeftArrowButton />
        </Link>

        <SingleQ1Box>
          <QuestionText>Q.예금주를 입력해주세요.</QuestionText>
          <Input type="text" value={accountHolder} onChange={handleInputChange} />
        </SingleQ1Box>

        <Link to="/SingleQ4">
          <RightArrowButton type="button" disabled={!isInputValid()} />
        </Link>
      </QuestionContainer>
    </SingleLoginContainer>
  );
}
