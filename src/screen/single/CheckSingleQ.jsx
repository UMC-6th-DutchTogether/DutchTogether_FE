import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SLoginContainer, CheckBox, SLoginTitle, SingleQ, SingleA, ButtonContainer, BackButton, LinkButton, SingleCost, Receipt } from '../../styles/styledComponents'








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