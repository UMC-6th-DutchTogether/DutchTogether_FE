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
    TimeColumn,
    PayerButtonContainer,  // Add this import
    PayerButton // Add this import
} from '../../styles/styledComponents'

export default function SingleSettlerStatus() {
    const [meetingName, setMeetingName] = useState('');
    const [settlements, setSettlements] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredSettlements, setFilteredSettlements] = useState([]);
    const [error, setError] = useState(null);
    const [numPeople, setNumPeople] = useState(0);
    const [payers, setPayers] = useState([]);
    const [selectedPayer, setSelectedPayer] = useState(null);

    const meetingNum = useSelector((state) => state.singlePay.meetingNum);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchSettlementStatus = async () => {
            try {
                const response = await axios.get(`https://umc.dutchtogether.com/api/settlementStatus/${meetingNum}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (response.data.isSuccess) {
                    setMeetingName(response.data.data.meetingName);
                    const settlementData = response.data.data.settlementListDTO;

                    setPayers(settlementData);
                    setSettlements(settlementData.flatMap(settlement =>
                        settlement.completedSettler.map(settler => ({
                            ...settler,
                            settlementId: settlement.settlementId,
                            payer: settlement.payer
                        }))
                    ));
                    setFilteredSettlements(settlementData.flatMap(settlement =>
                        settlement.completedSettler.map(settler => ({
                            ...settler,
                            settlementId: settlement.settlementId,
                            payer: settlement.payer
                        }))
                    ));
                    setNumPeople(settlementData.reduce((acc, settlement) => acc + settlement.numPeople, 0));
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

    useEffect(() => {
        if (selectedPayer) {
            const filteredByPayer = settlements.filter(settlement => settlement.settlementId === selectedPayer);
            setFilteredSettlements(filteredByPayer);
        } else {
            setFilteredSettlements(settlements);
        }
    }, [selectedPayer, settlements]);

    const handleSearch = () => {
        if (searchTerm.trim() === '') {
            setFilteredSettlements(settlements);
            return;
        }

        const searchResults = filteredSettlements.filter(settlement =>
            settlement.name.includes(searchTerm)
        );

        setFilteredSettlements(searchResults);
    };

    if (error) {
        return <div>{error}</div>;
    }

    const formatTime = (timeString) => {
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
                <PayerButtonContainer> {/* Use new container for payers */}
                    {payers.map((payer) => (
                        <PayerButton
                            key={payer.settlementId}
                            onClick={() => setSelectedPayer(payer.settlementId)}
                        >
                            {payer.payer}
                        </PayerButton>
                    ))}
                </PayerButtonContainer>
                <StatusContainer>
                    <StatsContainer>
                        <StatsTopBox>
                            <StatBox>
                                <StatTitle>정산 인원</StatTitle>
                                <StatNumber>{filteredSettlements.length}</StatNumber>
                            </StatBox>
                            <StatBox>
                                <StatTitle>전체 인원</StatTitle>
                                <StatNumber>{numPeople}</StatNumber>
                            </StatBox>
                        </StatsTopBox>
                        <StatsBottomBox>
                            <StatTitle>미정산 인원</StatTitle>
                            <StatTitle>{numPeople - filteredSettlements.length}명</StatTitle>
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
