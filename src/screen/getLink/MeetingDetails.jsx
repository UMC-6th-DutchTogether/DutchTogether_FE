import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MeetingDetails() {
  const { meetingURL } = useParams(); // URL에서 meetingNum을 추출
  const [meetingData, setMeetingData] = useState(null);

  /*
  useEffect(() => {
    const fetchMeetingData = async () => {
      try {
        const response = await axios.get(`https://umc.dutchtogether.com/api/meetings/${meetingNum}`);
        if (response.status === 200) {
          setMeetingData(response.data);
        } else {
          console.error('데이터를 가져오는 중 오류가 발생했습니다.');
        }
      } catch (err) {
        console.error('데이터를 가져오는 중 오류가 발생했습니다.', err);
      }
    };

    fetchMeetingData();
  }, [meetingNum]);

  if (!meetingData) {
    return <div>Loading...</div>;
  }
    */
  useEffect(() => {
    console.log(meetingURL);
  }, [])

  return (
    <div>
      <h1>{meetingURL}</h1>
    </div>
  );
}

export default MeetingDetails;