import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { setAccountHolder } from '../../store/singlePaySlice';
import { useDispatch, useSelector } from 'react-redux';
import { SinglePageContainer, QuestionContainer, DecorationBarRight, DecorationBarRightText, SingleQ1Box, LeftArrowButton, RightArrowButton, SingleQText, Input } from '../../styles/styledComponents'

//예금주
export default function SingleQ3() {
  //store 동기화
  const dispatch = useDispatch();
  const { accountHolder } = useSelector((state) => state.singlePay);

  useEffect(() => {
    const storedAccountHolder = localStorage.getItem('accountHolder');
    if (storedAccountHolder) {
      dispatch(setAccountHolder(storedAccountHolder));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('accountHolder', accountHolder);
  }, [accountHolder]);

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
      <DecorationBarRight>
        <DecorationBarRightText>혼자 계산해요!</DecorationBarRightText>
      </DecorationBarRight>

      <QuestionContainer>
        <Link to="/SingleQ2">
          <LeftArrowButton />
        </Link>

        <SingleQ1Box>
          <SingleQText>Q.예금주를 입력해주세요.</SingleQText>
          <Input type="text" value={accountHolder} onChange={handleInputChange} />
        </SingleQ1Box>

        <Link to="/SingleQ4">
          <RightArrowButton type="button" disabled={!isInputValid()} />
        </Link>
      </QuestionContainer>
    </SinglePageContainer>
  );
}
