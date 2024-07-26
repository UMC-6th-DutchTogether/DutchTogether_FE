import styled from 'styled-components';
import { useSelector } from 'react-redux';


const SLoginContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;


const SLoginBox = styled.div`
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

const SQuestion = styled.div`
  font-size: 16px;
  margin-bottom: 8px;
`;

const SInput = styled.p`
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 1px solid skyblue;
`;



export default function CheckSingleQ() {


    const { meetingName, bankName, accountNumber, accountHolder, amount, numberOfPeople } = useSelector((state) => state.singlePay);
    return (
        <SLoginContainer>
            <SLoginTitle>나만 정산하기</SLoginTitle>
            <SLoginBox>
                <div>
                    <SQuestion>Q. 정산 모임 이름이 무엇인가요?</SQuestion>
                    <SInput>{meetingName}</SInput>
                </div>
                <div>
                    <SQuestion>Q. 정산 금액을 받는 은행과 계좌번호를 입력해주세요.</SQuestion>
                    <SInput>{bankName}</SInput>
                </div>
                <div>
                    <SQuestion>Q. 예금주를 입력해주세요.</SQuestion>
                    <SInput>{accountHolder}</SInput>
                </div>
                <div>
                    <SQuestion>Q. 정산하고자 하는 금액이 얼마인가요?</SQuestion>
                    <SInput>{amount}</SInput>
                </div>
                <div>
                    <SQuestion>Q. 몇 명이 정산하나요?</SQuestion>
                    <SInput>{numberOfPeople}</SInput>
                </div>
            </SLoginBox>
        </SLoginContainer>


    )
}