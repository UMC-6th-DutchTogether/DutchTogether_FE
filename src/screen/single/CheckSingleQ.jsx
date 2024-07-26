import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SLoginContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  margin-top: 70px;
`;


const CheckBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 70%;
  height: 530px;
  padding: 20px;
  
`;

const SLoginTitle = styled.h2`
    padding-top: 50px;
    margin-bottom: 0px;
    text-align: left;
    width: 70%;
`;

const SingleQ = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #0d5eaf;
  margin-bottom: 8px;
`;

const SingleA = styled.div`
  margin-left: 20px;
  border-bottom: 2px solid #0d5eaf;
  margin-bottom: 20px;
  width: 30%;
`;

const ButtonContainer = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: space-between;
`;

const BackButton = styled.button`
  background-color: white;
  border: 2px solid #0d5eaf !important;
  border-radius: 10px;
  text-align: center;
  padding: 10px 50px 10px 50px;
  color: #0d5eaf;
`;

const LinkButton = styled.button`
  background-color: white;
  border: 2px solid #0d5eaf !important;
  border-radius: 10px;
  text-align: center;
  padding: 10px 50px 10px 50px;
  color: #0d5eaf;
`;

const SingleCost = styled.div`
    display: flex;
    gap: 30px;
`;

const Receipt = styled.button`
  background-color: white;
  border: 2px solid #0d5eaf !important;
  color: #0d5eaf;
  text-align: center;
  padding: 5px;
`;



export default function CheckSingleQ() {
  const { meetingName, bankName, accountNumber, accountHolder, amount, numberOfPeople } = useSelector((state) => state.singlePay);
  return (
    <SLoginContainer>
      <SLoginTitle>나만 정산하기</SLoginTitle>
      <CheckBox>
        <SingleQ>Q. 정산 모임 이름이 무엇인가요?</SingleQ>
        <SingleA>{meetingName}</SingleA>

        <SingleQ>Q. 정산 금액을 받는 은행과 계좌번호를 입력해주세요.</SingleQ>
        <SingleA>{bankName}</SingleA>

        <SingleQ>Q. 정산 금액을 받는 은행과 계좌번호를 입력해주세요.</SingleQ>
        <SingleA>{accountHolder}</SingleA>

        <SingleCost>
          <SingleQ>Q. 정산하고자 하는 금액이 얼마인가요?</SingleQ>
          <Receipt>영수증 첨부하기</Receipt>
        </SingleCost>
        <SingleA>{amount} </SingleA>



        <SingleQ>Q. 몇 명이 정산하나요?</SingleQ>
        <SingleA>{numberOfPeople}</SingleA>

        <ButtonContainer>
          <Link to="/SingleQ5">
            <BackButton>뒤로가기</BackButton>
          </Link>
          <LinkButton>링크 생성하기</LinkButton>
        </ButtonContainer>
      </CheckBox>
    </SLoginContainer>


  )
}