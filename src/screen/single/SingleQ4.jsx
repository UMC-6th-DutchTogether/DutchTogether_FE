import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAmount, setReceipt } from '../../store/singlePaySlice';
import { SinglePageContainer, QuestionContainer, SinglePageTitle, SingleQ1Box, LeftArrowButton, RightArrowButton, ReceiptButton, SingleText1, Input, StyledImage } from '../../styles/styledComponents';



export default function SingleQ4() {
  const dispatch = useDispatch();
  const { amount, receiptUrl } = useSelector((state) => state.singlePay);
  const fileInputRef = useRef(null); // 

  const handleInputChange = (e) => {
    dispatch(setAmount(e.target.value));
  };

  //파일->문자열(리덕스 저장)
  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };


  //버튼 클릭->파일 인풋 함수
  const handleReceiptButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  //파일 인풋 함수
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const base64 = await convertFileToBase64(file);
      dispatch(setReceipt(base64));
    }
  };

  //유효성 검사
  const isInputValid = () => {
    return amount.trim() !== '';
  };

  return (
    <SinglePageContainer>
      <SinglePageTitle>나만 정산하기</SinglePageTitle>
      <QuestionContainer>
        <Link to="/SingleQ3">
          <LeftArrowButton />
        </Link>

        <SingleQ1Box>
          <SingleText1>Q.정산하고자하는 금액이 얼마인가요?</SingleText1>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex" }}>
              <ReceiptButton onClick={handleReceiptButtonClick}>영수증 첨부하기</ReceiptButton>
              {receiptUrl && (
                <StyledImage src={receiptUrl} alt="Receipt Preview" style={{ width: '300px', height: '100px' }} />
              )}
            </div>
            <Input type="text" value={amount} onChange={handleInputChange} />

            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleFileChange}
            />



          </div>
        </SingleQ1Box>

        <Link to="/SingleQ5">
          <RightArrowButton type="button" disabled={!isInputValid()} />
        </Link>
      </QuestionContainer>
    </SinglePageContainer>
  );
}
