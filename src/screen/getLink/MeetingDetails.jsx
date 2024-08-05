import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { SinglePageContainer, SingleDetailText, Transferbutton } from '../../styles/styledComponents';

// 은행명과 URL 스킴을 매핑한 객체
const bankUrlSchemes = {
  '토스': 'toss://',
  '국민': 'kb-bank://',
  '카카오뱅크': 'kakaobank://',
  '신한': 'shinhan-sbank://',
  '우리': 'wooribank://'
};

function MeetingDetails() {
  const { link } = useParams(); // URL에서 meetingNum을 추출
  const navigate = useNavigate(); // useNavigate 사용
  const [meetingData, setMeetingData] = useState(null);
  const [selectedBank, setSelectedBank] = useState('토스'); // 기본값 토스

  const handleBankChange = (event) => {
    setSelectedBank(event.target.value);
  };

  const handleTransferClick = () => {
    const urlScheme = bankUrlSchemes[selectedBank];
    if (urlScheme) {
      window.location.href = urlScheme;
    } else {
      alert('은행을 선택해주세요.');
    }
  };

  useEffect(() => {
    const fetchMeetingData = async () => {
      try {
        const response = await axios.get(`https://umc.dutchtogether.com/api/meetings/${link}`);
        if (response.status === 200) {
          setMeetingData(response.data.data);
        } else {
          console.error('데이터를 가져오는 중 오류가 발생했습니다.');
        }
      } catch (err) {
        console.error('데이터를 가져오는 중 오류가 발생했습니다.', err);
      }
    };

    fetchMeetingData();
  }, [link]);

  useEffect(() => {
    const handleFocus = () => {
      // 포커스가 다시 생기면 CheckDetail로 리다이렉트합니다.
      navigate(`/check-detail/${link}`);
    };

    window.addEventListener('focus', handleFocus);

    // 클린업 함수: 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
    return () => {
      window.removeEventListener('focus', handleFocus);
    };
  }, [navigate, link]);

  if (!meetingData) {
    return <div>Loading...</div>;
  }

  const finalAmount = (meetingData.total_amount / meetingData.num_people).toFixed(2);

  return (
    <SinglePageContainer>
      <SingleDetailText>{`${meetingData.meetingName}의 정산 요청이 왔습니다.`}</SingleDetailText>
      <SingleDetailText>정산을 진행합니다.</SingleDetailText>
      <SingleDetailText>{`${meetingData.total_amount} / ${meetingData.num_people} = ${finalAmount}원`}</SingleDetailText>
      <SingleDetailText>{`${finalAmount}원을 아래 계좌번호로 송금해주세요.`}</SingleDetailText>
      <SingleDetailText>{`${meetingData.bank} ${meetingData.account_num}`}</SingleDetailText>
      <SingleDetailText>{meetingData.payer}</SingleDetailText>

      <div style={{ display: "flex", gap: "10px" }}>
        <select id="bank-select" value={selectedBank} onChange={handleBankChange}>
          <option value="">--은행 선택--</option>
          {Object.keys(bankUrlSchemes).map((bank) => (
            <option key={bank} value={bank}>{bank}</option>
          ))}
        </select>
        <Transferbutton onClick={handleTransferClick}>송금하기</Transferbutton>
      </div>
    </SinglePageContainer>
  );
}

export default MeetingDetails;
