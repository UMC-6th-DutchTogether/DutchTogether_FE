import { Link } from 'react-router-dom';
import { setAccountHolder } from '../../store/singlePaySlice';
import { useDispatch, useSelector } from 'react-redux';
import { SinglePageContainer, QuestionContainer, SinglePageTitle, SingleQ1Box, LeftArrowButton, RightArrowButton, SingleText1, Input } from '../../styles/styledComponents'

//예금주
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
    <SinglePageContainer>
      <SinglePageTitle>나만 정산하기</SinglePageTitle>
      <QuestionContainer>
        <Link to="/SingleQ2">
          <LeftArrowButton />
        </Link>

        <SingleQ1Box>
          <SingleText1>Q.예금주를 입력해주세요.</SingleText1>
          <Input type="text" value={accountHolder} onChange={handleInputChange} />
        </SingleQ1Box>

        <Link to="/SingleQ4">
          <RightArrowButton type="button" disabled={!isInputValid()} />
        </Link>
      </QuestionContainer>
    </SinglePageContainer>
  );
}
