import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setReceipt } from '../../store/singlePaySlice';
import { SyncLoader } from "react-spinners";
import axios from 'axios';
import { SinglePageContainer, CheckContainer, CheckSinglePageTitle, SingleQ, SingleA, ButtonContainer, BackButton, LinkButton, SingleCost, ReceiptButton, LongSingleA, StyledImage, LoadingConatiner } from '../../styles/styledComponents';

//영수증 파일전환
const convertFileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

export default function CheckSingleQ() {
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { meetingName, bankName, accountNumber, accountHolder, amount, numberOfPeople, receiptUrl, meetingNum } = useSelector((state) => state.singlePay);

  //영수증 버튼 클릭
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const base64 = await convertFileToBase64(file);
      console.log("Generated Base64:", base64);
      dispatch(setReceipt(base64));
    }
  };
  // 영수증 버튼 클릭(전달)
  const handleReceiptButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  // 링크 생성하기 버튼
  const submitData = async () => {
    console.log(meetingNum, bankName, accountNumber, accountHolder, amount, numberOfPeople, receiptUrl);
    setLoading(true);
    try {
      // 정산 정보 api post
      const response = await axios.post('https://umc.dutchtogether.com/api/settlement/single', {
        meetingNum: meetingNum,
        bankName: bankName,
        accountNumber: accountNumber,
        payer: accountHolder,
        totalAmount: amount,
        numPeople: numberOfPeople
      });
      if (response.status === 200) {
        console.log(response);
        navigate('/SingleCreateLink'); // 성공 시 페이지 이동
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

  const handleBack = () => {
    navigate('/SingleQ5'); // 이전 페이지로 이동
  };

  return (
    <SinglePageContainer>
      {loading && (
        <LoadingConatiner>
          <SyncLoader />
        </LoadingConatiner>
      )}
      <CheckSinglePageTitle>나만 정산하기</CheckSinglePageTitle>
      <CheckContainer>
        <SingleQ>Q. 정산 모임 이름이 무엇인가요?</SingleQ>
        <SingleA>{meetingName}</SingleA>

        <SingleQ>Q. 정산 금액을 받는 은행과 계좌번호를 입력해주세요.</SingleQ>
        <LongSingleA>{bankName + " " + accountNumber}</LongSingleA>

        <SingleQ>Q. 예금주를 입력해주세요.</SingleQ>
        <SingleA>{accountHolder}</SingleA>

        <SingleQ>Q. 정산하고자 하는 금액이 얼마인가요?</SingleQ>
        <SingleCost>
          <SingleA>{amount}</SingleA>

          <ReceiptButton onClick={handleReceiptButtonClick}>영수증 첨부하기</ReceiptButton>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleFileChange}
          />
        </SingleCost>
        {receiptUrl && (
          <StyledImage src={receiptUrl} alt="Receipt" style={{ width: '400px', height: '300px' }} />
        )}

        <SingleQ>Q. 몇 명이 정산하나요?</SingleQ>
        <SingleA>{numberOfPeople}</SingleA>

        <ButtonContainer>
          <BackButton onClick={handleBack}>뒤로가기</BackButton>
          <LinkButton onClick={submitData}>링크 생성하기</LinkButton>
        </ButtonContainer>
      </CheckContainer>
    </SinglePageContainer>
  );
}