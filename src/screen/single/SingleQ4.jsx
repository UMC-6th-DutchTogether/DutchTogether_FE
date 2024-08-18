import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAmount, setReceiptId } from '../../store/singlePaySlice';
import {
  SinglePageContainer, QuestionContainer, DecorationBarRight, DecorationBarRightText,
  TitleText, TextInputContainer, TextInput, InputSubmitButton,
  ReceiptButton, StyledImage
} from '../../styles/styledComponents';
import axios from 'axios';
import { SyncLoader } from "react-spinners";

export default function SingleQ4() {
  const dispatch = useDispatch();
  const { amount } = useSelector((state) => state.singlePay);
  const [loading, setLoading] = useState(false);
  const [receiptPreview, setReceiptPreview] = useState(null);
  const fileInputRef = useRef(null);

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
        // dispatch(setReceipt(base64)); // Base64 문자열을 상태로 저장

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
          const recognizedAmount = parseFloat(response.data.data.totalAmount);
          const recognizedReceiptId = response.data.data.receiptId;

          dispatch(setReceiptId(recognizedReceiptId));
          dispatch(setAmount(recognizedAmount));

          localStorage.setItem('amount', recognizedAmount.toString());
          localStorage.setItem('receiptId', recognizedReceiptId);

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

  return (
    <SinglePageContainer>
      <DecorationBarRight>
        <DecorationBarRightText>혼자 계산해요!</DecorationBarRightText>
      </DecorationBarRight>

      <QuestionContainer>
        <TitleText style={{ marginTop: "208px", marginBottom: "60px" }}>정산하고자하는 금액이 얼마인가요?</TitleText>
        <div style={{ display: "flex", flexDirection: "column", margin: "20px" }}>

          <div style={{ display: "flex", alignItems: "center" }}>
            <ReceiptButton onClick={handleReceiptButtonClick} disabled={loading}>
              {loading ? "인식 중..." : "영수증 첨부하기"}
            </ReceiptButton>
            {loading && <SyncLoader size={8} color={"#123abc"} />}
            {receiptPreview && !loading && (
              <StyledImage src={receiptPreview} alt="Receipt Preview" style={{ width: '300px', height: '100px', marginLeft: '20px' }} />
            )}
          </div>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <TextInputContainer>

          <TextInput type="text" value={amount} onChange={handleInputChange} placeholder="정산하고자하는 금액을 입력해주세요." />
          <Link to="/SingleQ5">
            <InputSubmitButton type="button" disabled={!isInputValid()} >제출하기</InputSubmitButton>
          </Link>
        </TextInputContainer>
      </QuestionContainer>
    </SinglePageContainer>
  );
}
