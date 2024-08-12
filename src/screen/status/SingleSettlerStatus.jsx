import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const StatusContainer = styled.div`
  padding: 50px;
`;

export default function SingleSettlerStatus() {
    const [settlements, setSettlements] = useState([]);
    const [error, setError] = useState(null);
    const [numPeople, setNumPeople] = useState(0); // 전체 인원 상태 추가
    const meetingNum = useSelector((state) => state.singlePay.meetingNum);
    const token = localStorage.getItem('token'); // Token 가져오기

    useEffect(() => {
        const fetchSettlementStatus = async () => {
            try {
                const response = await axios.get(`https://umc.dutchtogether.com/api/settlementStatus/${meetingNum}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                console.log('Fetched Settlement Status Response:', response);

                if (response.data.isSuccess) {
                    // Extract numPeople from the first item in settlementListDTO
                    const settlementData = response.data.data.settlementListDTO[0];
                    setNumPeople(settlementData.numPeople);

                    const settlementsData = settlementData.completedSettler.map(settler => ({
                        settlementId: settlementData.settlementId,
                        name: settler.name,
                        settlementTime: settler.settlementTime
                    }));

                    setSettlements(settlementsData);
                    console.log('Settlements:', settlementsData);
                    console.log('Number of People:', settlementData.numPeople);

                } else {
                    console.error('Failed to fetch settlement status:', response.data.message);
                    setError('Failed to fetch settlement status.');
                }
            } catch (error) {
                console.error('Error occurred during GET request:', error);
                setError('An error occurred during GET request.');
            }
        };

        if (meetingNum && token) {
            fetchSettlementStatus();
        } else {
            setError('Required information is missing.');
        }
    }, [meetingNum, token]);

    if (error) {
        return <div>{error}</div>;
    }

    if (!settlements.length) {
        return <div>Loading...</div>;
    }

    return (
        <StatusContainer>
            <div style={{ display: 'flex', minHeight: '100vh', paddingLeft: '200px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', gap: '30px' }}>
                    <h1 style={{ margin: 0 }}>더치투게더 팀</h1>
                    <div style={{ display: 'flex', gap: '15px' }}>
                        <div style={{ textAlign: 'center' }}>
                            <p style={{ fontSize: '30px', margin: 0 }}>정산 인원</p>
                            <p style={{ fontSize: '60px', margin: 0 }}>{settlements.length}</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <p style={{ fontSize: '30px', margin: 0 }}>전체 인원</p>
                            <p style={{ fontSize: '60px', margin: 0 }}>{numPeople}</p>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <p style={{ fontSize: '30px', margin: 0 }}>미정산 인원</p>
                        <p style={{ fontSize: '60px', margin: 0 }}>{numPeople - settlements.length}명 남았습니다.</p>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#f0f0f0', padding: '100px', borderRadius: '15px', marginLeft: '200px' }}>
                    <h2 style={{ marginBottom: '20px' }}>정산 현황</h2>
                    <input type="text" placeholder="정산자를 검색해보세요." style={{ marginBottom: '20px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #ddd' }}>
                        <p style={{ width: '50%', margin: 0 }}>정산자명</p>
                        <p style={{ width: '50%', margin: 0 }}>정산 시각</p>
                    </div>
                    <div style={{ width: '100%', overflowY: 'auto', maxHeight: '200px' }}>
                        {settlements.map(settlement => (
                            <div key={settlement.settlementId} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #ddd' }}>
                                <p style={{ width: '50%', margin: 0 }}>{settlement.name}</p>
                                <p style={{ width: '50%', margin: 0 }}>
                                    {new Date(settlement.settlementTime).toLocaleString('ko-KR', {
                                        year: 'numeric',
                                        month: '2-digit',
                                        day: '2-digit',
                                        hour: '2-digit',
                                        minute: '2-digit',
                                        second: '2-digit',
                                        hour12: false, // 24시간 형식 사용
                                        timeZone: 'Asia/Seoul' // 한국 표준시
                                    })}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </StatusContainer>
    );
}
