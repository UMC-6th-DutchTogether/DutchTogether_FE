import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAmount, setReceipt } from '../../store/singlePaySlice';
import { SinglePageContainer, QuestionContainer, DecorationBarRight, DecorationBarRightText, SingleQ1Box, LeftArrowButton, RightArrowButton, ReceiptButton, SingleQText, Input, StyledImage } from '../../styles/styledComponents';

export default function SingleQ4() {
  const dispatch = useDispatch();
  const { amount, receiptUrl } = useSelector((state) => state.singlePay);
  const fileInputRef = useRef(null);

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

  // 파일->문자열
  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  // 버튼 클릭->파일 인풋 함수
  const handleReceiptButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // 파일 인풋 함수
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const base64 = await convertFileToBase64(file);
      dispatch(setReceipt(base64));
    }
  };

  // 유효성 검사
  const isInputValid = () => {
    return amount !== '' && !isNaN(amount) && amount !== 0;
  };

  return (
    <SinglePageContainer>
      <DecorationBarRight>
        <DecorationBarRightText>혼자 계산해요!</DecorationBarRightText>
      </DecorationBarRight>

      <QuestionContainer>
        <Link to="/SingleQ3">
          <LeftArrowButton />
        </Link>

        <SingleQ1Box>
          <SingleQText>Q.정산하고자하는 금액이 얼마인가요?</SingleQText>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex" }}>
              <ReceiptButton onClick={handleReceiptButtonClick}>영수증 첨부하기</ReceiptButton>
              {receiptUrl && (
                <StyledImage src={receiptUrl} alt="Receipt Preview" style={{ width: '300px', height: '100px' }} />
              )}
            </div>
            <Input type="text" value={amount} onChange={handleInputChange} inputMode="numeric" />

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
