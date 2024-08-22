import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useSelector } from 'react-redux'; // useSelector를 사용하여 Redux 상태를 가져옵니다.
import {
    MeetingNameText1, MeetingNameText2
} from '../../styles/styledComponents';

// 스타일드 컴포넌트
const StatusContainer = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #f0f4ff;
  border-radius: 10px;
  max-width: 800px;
  margin: 20px auto;
`;

const SettlementContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #d3d9ff;
  padding: 10px 20px;
  border-radius: 8px;
  width: 100%;
  font-weight: bold;
  color: #333;
  margin: 10px 0;
`;

const SettlementRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #e3e9ff;
  padding: 10px 20px;
  margin: 10px 0;
  border-radius: 8px;
  width: 100%; // 전체 너비 사용
`;

const PayerName = styled.div`
  flex: 1;
  text-align: left;
`;

const SettlerContainer = styled.div`
  flex: 2;
  text-align: left;
`;

const SettlerName = styled.div`
  font-size: 14px;
  margin-top: 5px;
`;

const SettlementTime = styled.div`
  font-size: 12px;
  color: #777;
  text-align: right;
`;

export default function MultiSettlerStatus() {
    const [settlementData, setSettlementData] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    // Redux 상태에서 meetingNum을 가져옵니다.
    const meetingNum = useSelector((state) => state.singlePay.meetingNum);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchData = async () => {
            if (!meetingNum || !token) {
                setErrorMessage('Token or Meeting Number is missing.');
                return;
            }

            try {
                const response = await axios.get(`https://umc.dutchtogether.com/api/settlementStatus/${meetingNum}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.data.isSuccess) {
                    setSettlementData(response.data.data);
                } else {
                    setErrorMessage('데이터를 불러오는 데 실패했습니다: ' + response.data.message);
                }
            } catch (err) {
                console.error('데이터 요청 중 오류가 발생했습니다.', err);
                setErrorMessage('데이터 요청 중 오류가 발생했습니다.');
            }
        };

        fetchData();
    }, [meetingNum, token]); // meetingNum과 token이 변경될 때마다 useEffect가 실행됩니다.

    const formatTime = (timeString) => {
        // `Z`를 추가하여 UTC로 간주하고, KST로 변환합니다.
        const utcDate = new Date(timeString + 'Z');
        return utcDate.toLocaleString('ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
            timeZone: 'Asia/Seoul'
        });
    };

    return (
        <StatusContainer>


            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

            {settlementData && settlementData.settlementListDTO.map((settlement) => (
                <SettlementContainer key={settlement.settlementId}>
                    <h2>{settlement.payer} 님의 정산 현황</h2>
                    <HeaderRow>
                        <PayerName>결제자</PayerName>
                        <SettlerContainer>정산자</SettlerContainer>
                        <SettlementTime>정산 시각</SettlementTime>
                    </HeaderRow>
                    {settlement.completedSettler.map((settler, index) => (
                        <SettlementRow key={index}>
                            <PayerName>{settlement.payer}</PayerName>
                            <SettlerContainer>
                                <SettlerName>{settler.name}</SettlerName>
                            </SettlerContainer>
                            <SettlementTime>
                                {formatTime(settler.settlementTime)}
                            </SettlementTime>
                        </SettlementRow>
                    ))}
                </SettlementContainer>
            ))}
        </StatusContainer>
    );
}
