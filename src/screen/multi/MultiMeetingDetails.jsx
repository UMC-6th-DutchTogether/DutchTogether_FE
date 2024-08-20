import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import copyIcon from '../../assets/복사아이콘.png';


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
  RowItemHeader,
  MultiMeetingDetailContainer,
  MultiMeetingDetailInfo,
  PayersContainer,
  MultiMeetingDetailHeader,
  MeetingDetailMeetingName,
  Column,
  LongColumn,
  TransferButton,
  LongRowItemHeader
} from '../../styles/styledComponents';
import { svgPathData } from '@fortawesome/free-brands-svg-icons/faAccusoft';
//'https://umc.dutchtogether.com/api/payers/info/{settlerId}' get 정산자 정보 받기
//'https://umc.dutchtogether.com/api/settler/{Link}' settlerId,이름 가져오기



function RowItem({ payerName, ammount, bankInfo, accountNum }) {
  return (
    <div style={{ width: "100%", display: 'flex' }}>
      <Column>payerName</Column>
      <Column>ammount</Column>
      <Column>bankInfo</Column>
      <LongColumn>
        <div style={{ marginLeft: '10px' }}>accountNum</div>
        <div style={{ display: 'flex', gap: '10px', marginLeft: '10px' }}>
          <CopyToClipboard text={"복사성공"} onCopy={() => { }}>
            <img src={copyIcon} alt="Copy Icon" style={{ cursor: 'pointer', width: '25px', height: '25px' }} />
          </CopyToClipboard>
          <TransferButton>송금하기</TransferButton>
        </div>
      </LongColumn>
    </div>
  );
}



//MultiMeetingDeatils
export default function MultiMeetingDeatils() {
  const { link, settlerId } = useParams();
  const navigate = useNavigate();

  const [payerInfos, setPayerInfos] = useState(null);
  const [meetingName, setMeetingName] = useState(null);

  const [meetingData, setMeetingData] = useState(null);
  const [selectedBank, setSelectedBank] = useState('토스');
  const [transferInitiated, setTransferInitiated] = useState(false);


  //정산자 받는 api
  const getSettler = async (link) => {
    try {
      const response = await axios.get(`https://umc.dutchtogether.com/api/settler/${link}`)
      const responseMeetingName = await response.data.data.meetingName;

      console.log('팀 이름: ', responseMeetingName);
      setMeetingName(responseMeetingName);
    } catch (error) {
      console.log(error);
    }
  }

  //정산자정보 받는 api
  const getInfo = async (settlerId) => {
    try {
      const response = await axios.get(`https://umc.dutchtogether.com/api/payers/info/${settlerId}`)
      const responsePayerInfos = await response.data.data.payerInfos;

      console.log('정산자 정보: ', responsePayerInfos);
      setPayerInfos(responsePayerInfos);

    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    console.log(settlerId, link)
    getSettler(link);
    getInfo(settlerId);
  }, [])


  return (
    <SingleDetailContainer>


      <div style={{ margin: "76px", width: '90%', minWidth: '1400px' }}>
        <MeetingNameText style={{ paddingLeft: "0px" }}>
          <MeetingDetailMeetingName>
            {meetingName}
          </MeetingDetailMeetingName>

          <MeetingNameText2>의 정산 요청이 왔습니다.</MeetingNameText2>
        </MeetingNameText>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <MultiMeetingDetailInfo style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '34px' }}>
              <MultiMeetingDetailHeader>
                내가 정산해야할 사람은
              </MultiMeetingDetailHeader>
              <PayersContainer>
                이름,이름이,이름이름,이름이름이
              </PayersContainer>
            </div>

            <MultiMeetingDetailContainer style={{ overflow: 'auto' }}>
              <div style={{ width: '100%', display: 'flex' }}>
                <RowItemHeader>
                  결제자명
                </RowItemHeader>

                <RowItemHeader>
                  금액
                </RowItemHeader>

                <RowItemHeader>
                  은행정보
                </RowItemHeader>

                <LongRowItemHeader>
                  계좌번호 및 송금하기
                </LongRowItemHeader>
              </div>

              <RowItem />

            </MultiMeetingDetailContainer>

          </MultiMeetingDetailInfo>
        </div>

      </div>

    </SingleDetailContainer >
  );
}
