import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import {
  SingleDetailContainer,
  SingleDetailText,
  Transferbutton,
  StyledCopyIcon,
  MeetingDetailInfo,
  BankSelect,
  BankOption,
  TransferSection,
  MeetingNameText,
  ReceiptBox,
  FinalAmountText,
  MeetingNameText2,
  Overlay,
  Letter,
  MultiMeetingDetailInfo,
  TextInputContainer,
  TextInput,
  InputSubmitButton,
  MultiGetLinkHeader,
  MeetingDetailMeetingName
} from '../../styles/styledComponents';
import { svgPathData } from '@fortawesome/free-brands-svg-icons/faAccusoft';
//'https://umc.dutchtogether.com/api/payers/info/{settlerId}' get 정산자 정보 받기
//'https://umc.dutchtogether.com/api/settler/{Link}' settlerId,이름 가져오기



//MultiMeetingSettler
export default function MultiMeetingSettler() {
  const { link } = useParams();
  const navigate = useNavigate();

  const [isOverlayVisible, setIsOverlayVisible] = useState(true); //오버레이
  const [settlers, setSettler] = useState(''); //정산자 리스트
  const [meetingName, setMeetingName] = useState(''); //정산 모임 이름

  const [input, setInput] = useState(''); // 입력

  // 오버레이 닫기
  const handleOverlayClick = () => {
    setIsOverlayVisible(false);
  };

  // 제출 함수
  const handleSubmit = () => {
    console.log(input);
    console.log(settlers);
    const result = settlers.find(e => {
      console.log(e.name)
      return e.name === input;
    })
    console.log(result);

    //다음 페이지로 이동
    navigate(`/MultiMeetingDetails/${link}/${result.settlerId}`);
  }


  // 입력 함수
  const handleInput = (e) => {
    setInput(e.target.value.trim());

  }


  //정산자 받는 api
  const getSettler = async (link) => {
    try {
      const response = await axios.get(`https://umc.dutchtogether.com/api/settler/${link}`)
      const responseSettlers = await response.data.data.settlers;
      const responseMeetingName = await response.data.data.meetingName;
      console.log('정산자', responseSettlers, responseMeetingName);
      setSettler(responseSettlers);
      setMeetingName(responseMeetingName);
    } catch (error) {
      console.log(error);
    }
  }


  //초기 settler가져오기
  useEffect(() => {
    getSettler(link);
  }, [])



  return (
    <SingleDetailContainer>

      {isOverlayVisible && (
        <Overlay onClick={handleOverlayClick}>
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
      )}


      <div style={{ margin: "76px", width: '90%', minWidth: '1400px' }}>
        <MeetingNameText style={{ paddingLeft: "0px" }}>
          <MeetingDetailMeetingName>
            {meetingName}
          </MeetingDetailMeetingName>

          <MeetingNameText2>의 정산 요청이 왔습니다.</MeetingNameText2>
        </MeetingNameText>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <MultiMeetingDetailInfo style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
            <MultiGetLinkHeader style={{ marginTop: '115px', marginBottom: "81px" }}>당신은 누구십니까?</MultiGetLinkHeader>

            <TextInputContainer style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', width: "70%", height: "60px" }}>
              <TextInput type="text" placeholder="당신은 누구십니까?" onChange={handleInput} />
              <InputSubmitButton type="button" onClick={handleSubmit}>제출하기</InputSubmitButton>
            </TextInputContainer>

          </MultiMeetingDetailInfo>
        </div>
      </div>

    </SingleDetailContainer>
  );
}
