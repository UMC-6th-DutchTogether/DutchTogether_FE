import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { SinglePageContainer, SingleDetailText, CheckMeetingContainer, CompleteButton, SingleNameInput } from '../../styles/styledComponents';

function MeetingCheck() {
    const { link } = useParams();
    const navigate = useNavigate();
    const [meetingData, setMeetingData] = useState(null);
    const [isCompleted, setIsCompleted] = useState(false);
    const [name, setName] = useState('');


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

    const handleIncompleteClick = () => {
        navigate(`/${link}`); // MeetingDetails 페이지로 이동
    };

    const handleCompleteClick = () => {
        setIsCompleted(true); // 입력란 활성화
    };

    const handleNameChange = (e) => {
        setName(e.target.value); // 이름 상태 업데이트
    };

    const handleCompleteSubmit = () => {
        if (name.trim()) {
            if (name.trim() === meetingData.payer) {
                alert('정산이 완료되었습니다!');
            } else {
                alert('이름이 일치하지 않습니다.');
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

            <CompleteButton onClick={handleCompleteSubmit} disabled={!isCompleted} >
                정산 완료하기
            </CompleteButton>
        </SinglePageContainer>
    );
}

export default MeetingCheck;