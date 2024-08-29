import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setBankName, setAccountNumber } from '../../store/singlePaySlice';
import {
  SinglePageContainer, QuestionContainer, DecorationBarRight, DecorationBarRightText,
  TitleText, TextInputContainer, TextInput, InputSubmitButton,
  BankSelect, BankOption
} from '../../styles/styledComponents';

export default function SingleQ2() {
  const dispatch = useDispatch();
  const { bankName, accountNumber } = useSelector((state) => state.singlePay);
  const [selectedBank, setSelectedBank] = useState(bankName || '토스');
  const [accountNumberInput, setAccountNumberInput] = useState(accountNumber || 0);

  const bankUrlSchemes = {
    '토스': 'supertoss://send',
    '국민': 'kbbank://send',
    '카카오뱅크': 'kakaobank://send',
    '신한': 'shinhan-sr-ansimclick://send',
    '농협': 'nhallonepayansimclick://send'
  };

  // 로컬 스토리지에서 값 불러오기
  useEffect(() => {
    const storedBankName = localStorage.getItem('bankName');
    const storedAccountNumber = localStorage.getItem('accountNumber');

    if (storedBankName) {
      setSelectedBank(storedBankName);
      dispatch(setBankName(storedBankName));
    }
    if (storedAccountNumber) {
      setAccountNumberInput(storedAccountNumber);
      dispatch(setAccountNumber(storedAccountNumber));
    }
  }, [dispatch]);

  useEffect(() => {
    // store에 저장
    dispatch(setBankName(selectedBank));
    dispatch(setAccountNumber(accountNumberInput));

    // 로컬 스토리지에 저장
    localStorage.setItem('bankName', selectedBank);
    localStorage.setItem('accountNumber', accountNumberInput);
  }, [selectedBank, accountNumberInput, dispatch]);

  const handleBankChange = (event) => {
    setSelectedBank(event.target.value);
  };

  return (
    <SinglePageContainer>
      <DecorationBarRight>
        <DecorationBarRightText>혼자 계산해요!</DecorationBarRightText>
      </DecorationBarRight>

      <QuestionContainer>
        <TitleText style={{ marginTop: "208px", marginBottom: "60px" }}>정산 금액 받는 은행과 계좌번호를 입력해주세요.</TitleText>

        <TextInputContainer>
          <BankSelect style={{ backgroundColor: '#FFF' }} id="bank-select" value={selectedBank} onChange={handleBankChange}>
            <BankOption value="">--은행 선택--</BankOption>
            {Object.keys(bankUrlSchemes).map((bank) => (
              <BankOption key={bank} value={bank}>{bank}</BankOption>
            ))}
          </BankSelect>
          <TextInput
            type="tel"
            value={accountNumberInput}
            onChange={(e) => {
              const onlyNumbers = e.target.value.replace(/\D/g, '');
              setAccountNumberInput(onlyNumbers);
            }}
            placeholder="계좌번호를 입력해주세요!"
          />
          <Link to="/SingleQ3">
            <InputSubmitButton type="button" >제출하기</InputSubmitButton>
          </Link>

        </TextInputContainer>

      </QuestionContainer>
    </SinglePageContainer>
  );
}