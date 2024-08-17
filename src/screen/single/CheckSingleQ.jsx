import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import {
  SinglePageContainer, CheckContainer, CheckSinglePageTitle,
  SingleQ, SingleA, ButtonContainer, BackButton, LinkButton, SingleCost,
  LongSingleA, CheckQuestionContainer,
  DecorationBarRight, DecorationBarRightText, ReceiptImage
} from '../../styles/styledComponents';

export default function CheckSingleQ() {
  const navigate = useNavigate();
  const [meetingDetails, setMeetingDetails] = useState(null); // 초기값을 null로 설정
  const { meetingNum, receiptUrl } = useSelector((state) => state.singlePay);

  useEffect(() => {
    const fetchMeetingDetails = async () => {
      try {
        console.log("Requesting details for meetingNum:", meetingNum); // 요청 전 meetingNum 확인
        const response = await axios.get(`https://umc.dutchtogether.com/api/meetings/info/${meetingNum}`);
        console.log("Server Response:", response); // 서버 응답 전체를 출력

        if (response.data.isSuccess) {
          setMeetingDetails(response.data.data);
        } else {
          console.error("모임 정보를 가져오는 데 실패했습니다:", response.data.message);
        }
      } catch (error) {
        console.error("모임 정보를 가져오는 중 오류 발생:", error.message); // 오류 메시지 출력
        if (error.response) {
          console.error("Response data:", error.response.data); // 서버가 응답한 오류 데이터 출력
        } else {
          console.error("No response received or other error:", error);
        }
      }
    };

    if (meetingNum) {
      fetchMeetingDetails();
    } else {
      console.error("meetingNum is not defined");
    }
  }, [meetingNum]);

  const handleBack = () => {
    navigate('/SingleQ5'); // 이전 페이지로 이동
  };

  const handleCreateLink = () => {
    navigate('/SingleCreateLink'); // 이전 페이지로 이동
  };

  // meetingDetails가 null일 경우 로딩 상태를 표시
  if (!meetingDetails) {
    return <div>로딩 중...</div>;
  }

  return (
    <SinglePageContainer>
      <DecorationBarRight>
        <DecorationBarRightText>혼자 계산해요!</DecorationBarRightText>
      </DecorationBarRight>

      <CheckQuestionContainer>
        <CheckSinglePageTitle>정산 내용</CheckSinglePageTitle>
        <CheckContainer>
          <div style={{ display: 'flex' }}>
            <div>
              <SingleQ>Q. 정산 모임 이름이 무엇인가요?</SingleQ>
              <SingleA>{meetingDetails.meetingName}</SingleA>

              <SingleQ>Q. 정산 금액을 받는 은행과 계좌번호를 입력해주세요.</SingleQ>
              <LongSingleA>{meetingDetails.bank + " " + meetingDetails.account_num}</LongSingleA>

              <SingleQ>Q. 예금주를 입력해주세요.</SingleQ>
              <SingleA>{meetingDetails.payerName}</SingleA>

              <SingleQ>Q. 정산하고자 하는 금액이 얼마인가요?</SingleQ>
              <SingleCost>
                <SingleA>{meetingDetails.total_amount}</SingleA>
              </SingleCost>

              <SingleQ>Q. 몇 명이 정산하나요?</SingleQ>
              <SingleA>{meetingDetails.num_people}</SingleA>
            </div>

            {receiptUrl && (
              <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '20px' }}>
                <h2>영수증</h2>
                <ReceiptImage src={receiptUrl} alt="Receipt" />
              </div>
            )}
          </div>

          <ButtonContainer>
            <BackButton onClick={handleBack}>뒤로가기</BackButton>
            <LinkButton onClick={handleCreateLink}>링크 생성하기</LinkButton>
          </ButtonContainer>
        </CheckContainer>
      </CheckQuestionContainer>
    </SinglePageContainer>
  );
}
