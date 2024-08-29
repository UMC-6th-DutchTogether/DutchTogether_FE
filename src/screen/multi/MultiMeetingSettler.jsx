import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  SingleDetailContainer,
  MeetingNameText,
  MeetingNameText2,
  Overlay,
  Letter,
  MultiMeetingDetailInfo,
  TextInputContainer,
  InputSubmitButton,
  MultiGetLinkHeader,
  MeetingDetailMeetingName,
  SelectInput,
  LogoImg
} from '../../styles/styledComponents';
import logo from '../../assets/LOGO 1.png'


export default function MultiMeetingSettler() {
  const { link } = useParams();
  const navigate = useNavigate();

  const [isOverlayVisible, setIsOverlayVisible] = useState(true); // 오버레이
  const [settlers, setSettler] = useState([]); // 초기값을 빈 배열로 설정
  const [meetingName, setMeetingName] = useState(''); // 정산 모임 이름
  const [selectedSettler, setSelectedSettler] = useState(''); // 선택된 정산자

  // 오버레이 닫기
  const handleOverlayClick = () => {
    setIsOverlayVisible(false);
  };

  // 제출 함수
  const handleSubmit = () => {
    const result = settlers.find(settler => settler.name === selectedSettler);
    if (result) {
      navigate(`/MultiMeetingDetails/${link}/${result.settlerId}/${selectedSettler}`);
    }
  };

  // 선택된 정산자 업데이트
  const handleSelectChange = (e) => {
    setSelectedSettler(e.target.value);
  };

  // 정산자 받는 API
  const getSettler = async (link) => {
    try {
      const response = await axios.get(`https://umc.dutchtogether.com/api/settler/${link}`);
      const responseSettlers = response.data.data.settlers;
      const responseMeetingName = response.data.data.meetingName;
      setSettler(responseSettlers);
      setMeetingName(responseMeetingName);
    } catch (error) {
      console.error(error);
    }
  };

  // 초기 settler 가져오기
  useEffect(() => {
    getSettler(link);
  }, [link]);

  return (
    <SingleDetailContainer>

      <Overlay isVisible={isOverlayVisible} onClick={handleOverlayClick}>
        <div>
          <MeetingNameText>
            <MeetingDetailMeetingName>
              {meetingName}
            </MeetingDetailMeetingName>
            <MeetingNameText2>의 정산 요청이 왔습니다.</MeetingNameText2>
          </MeetingNameText>
          <Letter> </Letter>
        </div>
      </Overlay>


      <div style={{ margin: "76px", width: '90%', minWidth: '1400px' }}>
        <MeetingNameText style={{ paddingLeft: "0px" }}>
          <MeetingDetailMeetingName>
            {meetingName}
          </MeetingDetailMeetingName>
          <MeetingNameText2>의 정산 요청이 왔습니다.</MeetingNameText2>
        </MeetingNameText>


        <MultiMeetingDetailInfo style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
          <MultiGetLinkHeader style={{ marginTop: '115px', marginBottom: "81px" }}>당신은 누구십니까?</MultiGetLinkHeader>
          <TextInputContainer style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', width: "70%", height: "60px", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <SelectInput onChange={handleSelectChange} value={selectedSettler}>
              <option value="">결제자를 선택하세요</option>
              {settlers.map(settler => (
                <option key={settler.settlersId} value={settler.name}>
                  {settler.name}
                </option>
              ))}
            </SelectInput>
            <InputSubmitButton type="button" onClick={handleSubmit}>제출하기</InputSubmitButton>
          </TextInputContainer>
          <LogoImg src={logo} alt="Logo" />
        </MultiMeetingDetailInfo>

      </div>

    </SingleDetailContainer>
  );
}
