import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setReceipt } from '../../store/singlePaySlice';
import { SinglePageContainer, CheckBox, CheckSinglePageTitle, SingleQ, SingleA, ButtonContainer, BackButton, LinkButton, SingleCost, ReceiptButton, LongSingleA, StyledImage } from '../../styles/styledComponents';
import styled from 'styled-components';


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
  const { meetingName, bankName, accountNumber, accountHolder, amount, numberOfPeople, receiptUrl } = useSelector((state) => state.singlePay);


  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const base64 = await convertFileToBase64(file);
      console.log("Generated Base64:", base64);
      dispatch(setReceipt(base64));
    }
  };

  const handleReceiptButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <SinglePageContainer>
      <CheckSinglePageTitle>나만 정산하기</CheckSinglePageTitle>
      <CheckBox>
        <SingleQ>Q. 정산 모임 이름이 무엇인가요?</SingleQ>
        <SingleA>{meetingName}</SingleA>

        <SingleQ>Q. 정산 금액을 받는 은행과 계좌번호를 입력해주세요.</SingleQ>
        <LongSingleA>{bankName}</LongSingleA>

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
          <Link to="/SingleQ5">
            <BackButton>뒤로가기</BackButton>
          </Link>
          <LinkButton>링크 생성하기</LinkButton>
        </ButtonContainer>
      </CheckBox>
    </SinglePageContainer>
  );
}