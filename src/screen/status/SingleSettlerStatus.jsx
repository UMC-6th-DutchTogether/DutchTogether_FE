import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import {
    SlideUpContainer,
    ContentCon,
    StatusContainer,
    MeetingName,
    StatsContainer,
    StatsTopBox,
    StatsBottomBox,
    StatBox,
    StatTitle,
    StatNumber,
    SettlerContainer,
    SearchContainer,
    SearchInput,
    SearchButtonCon,
    SearchButton,
    TableContainer,
    TableHeader,
    TableRow,
    NameColumn,
    TimeColumn
} from '../../styles/styledComponents'

export default function SingleSettlerStatus() {
    const [meetingName, setmeetingName] = useState('');
    const [settlements, setSettlements] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredSettlements, setFilteredSettlements] = useState([]);
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

                if (response.data.isSuccess) {
                    setmeetingName(response.data.data.meetingName);
                    const settlementData = response.data.data.settlementListDTO[0];
                    setNumPeople(settlementData.numPeople);

                    const settlementsData = settlementData.completedSettler.map(settler => ({
                        settlementId: settlementData.settlementId,
                        name: settler.name,
                        settlementTime: settler.settlementTime
                    }));

                    setSettlements(settlementsData);
                    setFilteredSettlements(settlementsData);
                } else {
                    setError('Failed to fetch settlement status.');
                }
            } catch (error) {
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

    const handleSearch = async () => {
        if (searchTerm.trim() === '') {
            setFilteredSettlements(settlements);
            return;
        }

        // 클라이언트 측 필터링: 부분 문자열 검색
        const filteredData = settlements.filter(settlement =>
            settlement.name.includes(searchTerm)
        );

        if (filteredData.length > 0) {
            // 클라이언트에서 부분 일치 검색 결과가 있으면 표시
            setFilteredSettlements(filteredData);
        } else {
            // 클라이언트에서 부분 일치 결과가 없을 때 서버로 검색 요청
            if (settlements.length === 0 || !settlements[0].settlementId) {
                setError('No settlement data available.');
                setFilteredSettlements([]);
                return;
            }

            // try {
            //     console.log('Starting search with term:', searchTerm);
            //     const response = await axios.get(`https://umc.dutchtogether.com/api/settlementStatus/settlers`, {
            //         params: {
            //             settlementId: settlements[0].settlementId, // 첫 번째 정산 아이디 사용
            //             settlerName: searchTerm
            //         },
            //         headers: {
            //             'Authorization': `Bearer ${token}`
            //         }
            //     });

            //     console.log('Search response:', response);
            //     console.log('response.data.data:', response.data.data);

            //     if (response.data.isSuccess) {
            //         const settler = response.data.data;

            //         const filteredData = [{
            //             settlementId: settlements[0].settlementId,
            //             name: settler.name,
            //             settlementTime: settler.settlementTime
            //         }];

            //         setFilteredSettlements(filteredData);
            //     } else {
            //         setFilteredSettlements([]);
            //         setError('정산자를 찾을 수 없습니다.');
            //     }
            // } catch (error) {
            //     console.error('Search error:', error);
            //     setError('검색 중 예외가 발생했습니다.');
            //     setFilteredSettlements([]);
            // }
        }
    };


    // if (!settlements.length) {
    //     return <div>Loading...</div>;
    // }

    const formatTime = (timeString) => {
        // `Z`를 추가하여 UTC로 간주하고, KST로 변환합니다.
        const utcDate = new Date(timeString + 'Z');
        return utcDate.toLocaleString('ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
            timeZone: 'Asia/Seoul'
        });
    };

    return (
        <SlideUpContainer>
            <ContentCon>
                <MeetingName>{meetingName}의 정산현황</MeetingName>
                <StatusContainer>
                    <StatsContainer>
                        <StatsTopBox>
                            <StatBox>
                                <StatTitle>정산 인원</StatTitle>
                                <StatNumber>{settlements.length}</StatNumber>
                            </StatBox>
                            <StatBox>
                                <StatTitle>전체 인원</StatTitle>
                                <StatNumber>{numPeople}</StatNumber>
                            </StatBox>
                        </StatsTopBox>
                        <StatsBottomBox>
                            <StatTitle>미정산 인원</StatTitle>
                            <StatTitle>{numPeople - settlements.length}명</StatTitle>
                            <StatTitle>남았습니다.</StatTitle>
                        </StatsBottomBox>
                    </StatsContainer>
                    <SettlerContainer>
                        <SearchContainer>
                            <SearchInput
                                type="text"
                                placeholder="정산자를 검색해주세요."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <SearchButtonCon>
                                <SearchButton onClick={handleSearch}>검색하기</SearchButton>
                            </SearchButtonCon>
                        </SearchContainer>
                        <TableContainer>
                            <TableHeader>
                                <NameColumn>정산자명</NameColumn>
                                <TimeColumn>정산 시각</TimeColumn>
                            </TableHeader>
                            {filteredSettlements.length > 0 ? (
                                filteredSettlements.map((settlement, index) => (
                                    <TableRow key={`${settlement.settlementId}-${index}`}>
                                        <NameColumn>{settlement.name}</NameColumn>
                                        <TimeColumn>
                                            {formatTime(settlement.settlementTime)}
                                        </TimeColumn>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <NameColumn colSpan="2">정산자를 찾을 수 없습니다.</NameColumn>
                                </TableRow>
                            )}
                        </TableContainer>
                    </SettlerContainer>
                </StatusContainer>
            </ContentCon>
        </SlideUpContainer>
    );

}
