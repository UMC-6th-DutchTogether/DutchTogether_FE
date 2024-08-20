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
  ReceiplBox,
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

  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const [meetingData, setMeetingData] = useState(null);


  // 오버레이 닫기
  const handleOverlayClick = () => {
    setIsOverlayVisible(false);
  };

  //정산자 받는 api
  const getSettler = async (link) => {
    try {
      const response = await axios.get(`https://umc.dutchtogether.com/api/settler/${link}`)
      const settlers = await response.data.data.settlers;
      console.log('정산자', settlers);

    } catch (error) {
      console.log(error);
    }
  }
  //정산자정보 받는 api
  const getInfo = async () => {
    try {
      const response = await axios.get(`https://umc.dutchtogether.com/api/payers/info/101`)
      const payerInfos = await response.data.data.payerInfos;
      console.log('정산자 정보', payerInfos);

    } catch (error) {
      console.log(error);
    }
  }

  //초기 settler가져오기
  useEffect(() => {
    getSettler(link);
  })
  return (
    <SingleDetailContainer>

      {isOverlayVisible && (
        <Overlay onClick={handleOverlayClick}>
          <div>
            <MeetingNameText>
              <MeetingDetailMeetingName>
                더치투게더팀
                {/*<h1>{`${meetingData.meetingName}`}</h1>*/}
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
            더치투게더팀
            {/*<h1>{`${meetingData.meetingName}`}</h1>*/}
          </MeetingDetailMeetingName>

          <MeetingNameText2>의 정산 요청이 왔습니다.</MeetingNameText2>
        </MeetingNameText>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <MultiMeetingDetailInfo style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
            <MultiGetLinkHeader style={{ marginTop: '115px', marginBottom: "81px" }}>당신은 누구십니까?</MultiGetLinkHeader>

            <TextInputContainer style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', width: "70%", height: "60px" }}>
              <TextInput type="text" placeholder="당신은 누구십니까?" />
              <InputSubmitButton type="button" >제출하기</InputSubmitButton>
            </TextInputContainer>

          </MultiMeetingDetailInfo>
        </div>
      </div>

    </SingleDetailContainer>
  );
}
