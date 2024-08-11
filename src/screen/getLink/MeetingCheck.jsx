import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
    SinglePageContainer, SingleDetailText, CheckMeetingContainer,
    CompleteButton, SingleNameInput
} from '../../styles/styledComponents';

function MeetingCheck() {
    const { link } = useParams();
    const navigate = useNavigate();
    const [meetingData, setMeetingData] = useState(null);
    const [isCompleted, setIsCompleted] = useState(false);
    const [name, setName] = useState('');
    const [settlementId, setSettlementId] = useState(null); // Use settlementId instead of settlerId

    useEffect(() => {
        const fetchMeetingData = async () => {
            try {
                const response = await axios.get(`https://umc.dutchtogether.com/api/meetings/${link}`);
                console.log('API 응답 데이터:', response.data);
                if (response.status === 200) {
                    setMeetingData(response.data.data);
                    setSettlementId(response.data.data.settlementId); // Fetch settlementId from the response
                } else {
                    console.error('데이터를 가져오는 중 오류가 발생했습니다.');
                }
            } catch (err) {
                console.error('데이터를 가져오는 중 오류가 발생했습니다.', err);
            }
        };

        fetchMeetingData();
    }, [link]);

    const handleIncompleteClick = () => {
        navigate(`/${link}`);
    };

    const handleCompleteClick = () => {
        setIsCompleted(true);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleCompleteSubmit = async () => {
        console.log('Name:', name.trim());
        console.log('Meeting Data:', meetingData);
        console.log('Settlement ID:', settlementId);

        if (name.trim() && meetingData && settlementId) {
            try {
                // Use settlementId instead of settlerId for the update request
                const updateResponse = await axios.put('https://umc.dutchtogether.com/api/settlementSettler/updateStatus', {
                    settlementId: settlementId, // Use settlementId here
                    settlerName: name.trim(),
                    status: 'COMPLETED'
                });

                console.log('업데이트 응답:', updateResponse.data);
                if (updateResponse.data.isSuccess) {
                    alert('정산이 완료되었습니다!');
                    navigate('/');
                } else {
                    alert('정산 완료 요청에 실패했습니다.');
                }
            } catch (err) {
                console.error('정산 완료 요청 중 오류가 발생했습니다.', err);
                alert('정산 완료 요청 중 오류가 발생했습니다.');
            }
        } else {
            alert('이름을 입력해 주세요.');
        }
    };

    if (!meetingData) {
        return <div>Loading...</div>;
    }

    return (
        <SinglePageContainer>
            <SingleDetailText>{meetingData.meetingName}의 정산을 완료하셨나요?</SingleDetailText>

            <CheckMeetingContainer>
                <CompleteButton onClick={handleIncompleteClick}>아직 정산하지 못했어요</CompleteButton>
                <CompleteButton onClick={handleCompleteClick}>정산을 완료했어요</CompleteButton>
            </CheckMeetingContainer>

            <div style={{ padding: "30px" }}>
                <SingleNameInput
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    disabled={!isCompleted}
                    placeholder="내 이름을 입력하면 정산이 완료됩니다." />
            </div>

            <CompleteButton onClick={handleCompleteSubmit} disabled={!isCompleted}>
                정산 완료하기
            </CompleteButton>
        </SinglePageContainer>
    );
}

export default MeetingCheck;
