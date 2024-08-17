import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { setNumberOfPeople } from '../../store/singlePaySlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setReceipt } from '../../store/singlePaySlice';
import axios from 'axios';
import { SyncLoader } from "react-spinners";
import { SinglePageContainer, QuestionContainer, DecorationBarRight, DecorationBarRightText, SingleQ1Box, LeftArrowButton, RightArrowButton, SingleQText, Input, LoadingConatiner, ReceiptButton, StyledImage } from '../../styles/styledComponents';

export default function SingleQ5() {
  //store 동기화
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [receiptId, setReceiptId] = useState(null);
  const [receiptPreview, setReceiptPreview] = useState(null);

  const fileInputRef = useRef(null);
  const { bankName, accountNumber, accountHolder, amount, numberOfPeople, meetingNum } = useSelector((state) => state.singlePay);


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

  // 파일->문자열
  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setLoading(true);

      try {
        // Base64로 파일 변환
        const base64 = await convertFileToBase64(file);
        setReceiptPreview(base64); // Base64 문자열로 미리보기 설정
        dispatch(setReceipt(base64)); // Base64 문자열을 상태로 저장

        const formData = new FormData();
        formData.append('file', file);

        // 영수증 인식 API 호출
        const response = await axios.post('https://umc.dutchtogether.com/api/receipt/recognize', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        console.log("Receipt Recognition Response:", response.data);

        if (response.data.isSuccess) {
          setReceiptId(response.data.data.receiptId);
          console.log("Receipt ID:", response.data.data.receiptId);
        } else {
          alert('영수증 인식에 실패했습니다: ' + response.data.message);
        }
      } catch (err) {
        console.error('영수증 인식 요청 중 오류가 발생했습니다.', err);
        alert('영수증 인식 요청 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    }
  };

  // 버튼 클릭->파일 인풋 함수
  const handleReceiptButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
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
        receiptId: receiptId || null
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
        <Link to="/SingleQ4">
          <LeftArrowButton />
        </Link>

        <SingleQ1Box>
          <SingleQText>Q.몇 명이 정산하나요?</SingleQText>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex" }}>
              <ReceiptButton onClick={handleReceiptButtonClick}>영수증 첨부하기</ReceiptButton>
              {receiptPreview && (
                <StyledImage src={receiptPreview} alt="Receipt Preview" style={{ width: '300px', height: '100px' }} />
              )}
            </div>
            <Input type="text" value={numberOfPeople} onChange={handleInputChange} />
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
        </SingleQ1Box>


        <RightArrowButton type="button" onClick={submitData} disabled={!isInputValid()} />

      </QuestionContainer>
    </SinglePageContainer>
  );
}