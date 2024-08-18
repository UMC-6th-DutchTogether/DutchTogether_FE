import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { setAccountHolder } from '../../store/singlePaySlice';
import { useDispatch, useSelector } from 'react-redux';
import {
  SinglePageContainer, QuestionContainer, DecorationBarRight, DecorationBarRightText,
  TitleText, TextInputContainer, TextInput, InputSubmitButton
} from '../../styles/styledComponents'

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
        <TitleText style={{ marginTop: "208px", marginBottom: "60px" }}>예금주를 입력해주세요.</TitleText>

        <TextInputContainer>
          <TextInput type="text" value={accountHolder} onChange={handleInputChange} placeholder="예금주를 입력해주세요." />
          <Link to="/SingleQ4">
            <InputSubmitButton type="button" disabled={!isInputValid()} >제출하기</InputSubmitButton>
          </Link>
        </TextInputContainer>
      </QuestionContainer>

    </SinglePageContainer >
  );
}
