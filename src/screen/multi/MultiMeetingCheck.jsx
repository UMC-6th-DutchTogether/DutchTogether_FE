import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  SingleDetailContainer, SingleDetailText, CheckMeetingContainer,
  CompleteButton, SingleNameInput, MeetingNameText, MeetingNameText2,
  MeetingDetailInfo, ReceiplBox, CompleteNameButton, SingleNameInputWrapper,
  UnCompletedButton
} from '../../styles/styledComponents';
import unCompletedButtonImg from '../../assets/완료x 1.png';
import completedButtonImg from '../../assets/완료 O 1.png';

export default function MultiMeetingCheck() {
  const { link } = useParams();
  const navigate = useNavigate();
  const [meetingData, setMeetingData] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [name, setName] = useState('');
  const [settlementId, setSettlementId] = useState(null); // Use settlementId instead of settlerId


  const getSettler = async (link) => {
    try {
      const response = await axios.get(`https://umc.dutchtogether.com/api/settler/${link}`);
      const responseMeetingName = response.data.data.meetingName;
      console.log('정산 모임 이름:', responseMeetingName);
      setMeetingName(responseMeetingName);
    } catch (error) {
      console.error('팀 이름 가져오기 오류:', error);
    }
  };

  useEffect(() => {
    const fetchMeetingData = async () => {
      try {
        const response = await axios.get(`https://umc.dutchtogether.com/api/settler/${link}`);
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
    <SingleDetailContainer>
      <MeetingNameText>
        <h1>{`${meetingData.meetingName}`}</h1>
        <MeetingNameText2>의 정산 요청이 왔습니다.</MeetingNameText2>
      </MeetingNameText>
      <div style={{ display: 'flex' }}>
        <MeetingDetailInfo>
          <SingleDetailText>{meetingData.meetingName}의 정산을 완료하셨나요?</SingleDetailText>

          <CheckMeetingContainer>
            <CompleteButton src={completedButtonImg} onClick={handleCompleteClick}></CompleteButton>
            <UnCompletedButton src={unCompletedButtonImg} onClick={handleIncompleteClick} />
          </CheckMeetingContainer>


          <SingleNameInputWrapper>
            <SingleNameInput
              type="text"
              value={name}
              onChange={handleNameChange}
              disabled={!isCompleted}
              placeholder="내 이름을 입력하면 정산 완료"
            />
            <CompleteNameButton onClick={handleCompleteSubmit} disabled={!isCompleted}>
              정산 완료하기
            </CompleteNameButton>
          </SingleNameInputWrapper>

        </MeetingDetailInfo>

        <ReceiplBox>
          영수증
          <div style={{ backgroundColor: 'white', marginTop: '10px' }}>
            {meetingData.receiptUrl ? (
              <img src={meetingData.receiptUrl} alt="영수증 이미지" style={{ width: '100%', height: 'auto' }} />
            ) : (
              <p>영수증을 업로드하지 않았습니다.</p>
            )}
          </div>
        </ReceiplBox>
      </div>
    </SingleDetailContainer>
  );
}


