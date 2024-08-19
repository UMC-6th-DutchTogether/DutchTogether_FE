import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import {
  DecorationBarLeft,
  DecorationBarLeftText,
  MultiPayContainerLeft,
  TitleText,
  NormalText,
  BigSubmitButton,
  ContentContainer,
  TransparentBox,
  MainBackground,
  InputListContainer,
  BorderLine,
  InputListSmallSection,
  InputListHeader,
  InputList,
  InputListLongHeader,
  LongInputList,
  InputListItem,
  LongInputListItem,
  ItemInput
} from '../../styles/styledComponents';
import { updatePayer } from '../../store/multiPaySlice';

export default function MultiQ3() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { payers } = useSelector((state) => state.multiPay);

  // 로컬 상태로 입력값 관리
  const [localPayers, setLocalPayers] = useState(payers);

  // 예금주 이름 변경 함수
  const handleBankNameChange = (e, id) => {
    const updatedPayers = localPayers.map(payer =>
      payer.payerId === id ? { ...payer, bankName: e.target.value } : payer
    );
    setLocalPayers(updatedPayers);
  };

  // 계좌번호 변경 함수
  const handleAccountNumberChange = (e, id) => {
    const updatedPayers = localPayers.map(payer =>
      payer.payerId === id ? { ...payer, account: e.target.value } : payer
    );
    setLocalPayers(updatedPayers);
  };


  //제출함수
  const handleSubmit = async () => {
    // 로컬 상태를 Redux 상태로 업데이트
    localPayers.forEach(payer => {
      dispatch(updatePayer(payer));
    });

    try {
      const response = await axios.put('https://umc.dutchtogether.com/api/payers/', {
        payers: localPayers.map(payer => ({
          bank: payer.bankName,
          account: payer.account,
          payerId: payer.payerId
        }))
      });

      if (response.status === 200) {
        console.log('결제자 정보 제출', response);
        navigate('/MultiQ4'); // 다음 페이지로 이동
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MainBackground>
      <DecorationBarLeft>
        <DecorationBarLeftText>같이 계산해요! </DecorationBarLeftText>
      </DecorationBarLeft>

      <TransparentBox />

      <MultiPayContainerLeft>
        <TitleText>예금주와 계좌 정보를 입력하여주세요.</TitleText>
        <NormalText style={{ color: "#FFF" }}>모든 구성원의 계좌번호 정보가 입력되어야 다음 단계로 넘어갈 수 있습니다.</NormalText>

        <ContentContainer>
          <InputListContainer>
            <InputListSmallSection>
              <InputListHeader style={{ marginBottom: '32px' }}>정산자명</InputListHeader>
              <InputList>
                {localPayers.map((payer, _) => (
                  <InputListItem key={payer.payerId}>{payer.name}</InputListItem>
                ))}
              </InputList>
            </InputListSmallSection>

            <BorderLine />

            <div>
              <InputListLongHeader style={{ marginBottom: '32px' }}>
                <p style={{ marginLeft: '74px' }}>은행명</p>
                <p>계좌번호</p>
              </InputListLongHeader>
              <div style={{ display: "flex" }}>
                <InputList style={{ width: '251px' }}>
                  {localPayers.map((payer, _) => (
                    <InputListItem key={payer.payerId} style={{ width: '218px' }}>
                      <ItemInput
                        type="text"
                        value={payer.bankName || ''}
                        onChange={(e) => handleBankNameChange(e, payer.payerId)}
                        placeholder="은행명 입력"
                        style={{ width: '100%', border: "none" }}
                      />
                    </InputListItem>
                  ))}
                </InputList>
                <LongInputList>
                  {localPayers.map((payer, _) => (
                    <LongInputListItem key={payer.payerId}>
                      <ItemInput
                        type="text"
                        value={payer.account || ''}
                        onChange={(e) => handleAccountNumberChange(e, payer.payerId)}
                        placeholder="계좌번호 입력"
                        style={{ width: '100%', border: "none" }}
                      />
                    </LongInputListItem>
                  ))}
                </LongInputList>
              </div>
            </div>

          </InputListContainer>
          <BigSubmitButton onClick={handleSubmit}>제출하기</BigSubmitButton>
        </ContentContainer>
      </MultiPayContainerLeft>
    </MainBackground>
  );
}