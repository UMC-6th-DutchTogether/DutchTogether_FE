import { useEffect, useState } from 'react';
import { setNumberOfPeople } from '../../store/singlePaySlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { setReceipt } from '../../store/singlePaySlice';
import axios from 'axios';
import { SyncLoader } from "react-spinners";
import {
  SinglePageContainer, QuestionContainer, DecorationBarRight, DecorationBarRightText, LoadingConatiner,
  TitleText, TextInputContainer, TextInput, InputSubmitButton,
} from '../../styles/styledComponents';

export default function SingleQ5() {
  //store 동기화
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  // const [receiptId, setReceiptId] = useState(null);
  // const [receiptPreview, setReceiptPreview] = useState(null);

  // const fileInputRef = useRef(null);
  const { bankName, accountNumber, accountHolder, amount, numberOfPeople, meetingNum, receiptId } = useSelector((state) => state.singlePay);

  // 로컬 스토리지에서 값 불러오기
  useEffect(() => {
    const storedNumberOfPeople = localStorage.getItem('numberOfPeople');
    if (storedNumberOfPeople) {
      dispatch(setNumberOfPeople(parseInt(storedNumberOfPeople)));
    }
  }, [dispatch]);

  // 입력값 변경 시 로컬 스토리지에 저장
  useEffect(() => {
    if (!isNaN(numberOfPeople)) {
      localStorage.setItem('numberOfPeople', numberOfPeople.toString());
    }
  }, [numberOfPeople]);

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


  const submitData = async () => {

    try {
      // 정산 정보 API 호출
      const response = await axios.post('https://umc.dutchtogether.com/api/settlement/single', {
        meetingNum: meetingNum,
        bankName: bankName,
        accountNumber: accountNumber,
        payer: accountHolder,
        totalAmount: amount,
        numPeople: numberOfPeople,
        receiptId: receiptId || 0
      });


      if (response.status === 200) {
        console.log(response);
        navigate('/CheckSingleQ'); // 성공 시 페이지 이동
      } else {
        alert('정산 정보 전송에 실패했습니다.');
      }
    } catch (err) {
      console.error('정산 정보 요청 중 오류가 발생했습니다.', err);
      alert('정산 정보 요청 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };


  return (
    <SinglePageContainer>

      {loading && (
        <LoadingConatiner>
          <SyncLoader />
        </LoadingConatiner>
      )}

      <DecorationBarRight>
        <DecorationBarRightText>혼자 계산해요! </DecorationBarRightText>
      </DecorationBarRight>

      <QuestionContainer>
        <TitleText style={{ marginTop: "208px", marginBottom: "60px" }}>몇 명이 정산하나요?</TitleText>

        <TextInputContainer>
          <TextInput type="text" value={numberOfPeople} onChange={handleInputChange} placeholder="정산 인원을 입력해주세요." />
          {/* <Link to="/SingleQ4"> */}
          <InputSubmitButton type="button" onClick={submitData} disabled={!isInputValid()} >제출하기</InputSubmitButton>
          {/* </Link> */}
        </TextInputContainer>
      </QuestionContainer>

    </SinglePageContainer>
  );
}