import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
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
import { getPayers, updatePayer } from '../../store/multiLinkSlice';  // getPayers와 updatePayer 액션 가져오기

export default function MultiQ3() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { meetingNum } = useSelector((state) => state.multiPay);
  const { payers, loading, error } = useSelector((state) => state.multiLink);

  // 컴포넌트가 마운트될 때 getPayers를 통해 payers 데이터 로드
  useEffect(() => {
    dispatch(getPayers(meetingNum));
  }, [dispatch, meetingNum]);

  // 예금주 이름 변경 함수
  const handleBankNameChange = (e, id) => {
    const updatedPayer = { id, bankName: e.target.value };
    dispatch(updatePayer(updatedPayer));  // 변경 사항을 리덕스 상태에 바로 반영
  };

  // 계좌번호 변경 함수
  const handleAccountNumberChange = (e, id) => {
    const updatedPayer = { id, accountNumber: e.target.value };
    dispatch(updatePayer(updatedPayer));  // 변경 사항을 리덕스 상태에 바로 반영
  };

  // 제출 함수
  const handleSubmit = async () => {

    try {
      const response = await axios.put('https://umc.dutchtogether.com/api/payers/', {
        payers: payers.map(payer => ({
          bank: payer.bankName,
          account: payer.accountNumber,
          payerId: payer.seettlementId
        }))
      });

      if (response.status === 200) {
        console.log('PUT 요청 성공:', response);
        navigate('/MultiQ4'); // 다음 페이지로 이동
      } else {
        console.error('PUT 요청 실패:', response.status, response.data);
      }
    } catch (error) {
      console.error('PUT 요청 중 오류 발생:', error);
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
          {loading && <p>로딩 중...</p>}
          {error && <p>오류 발생: {error}</p>}
          <InputListContainer>
            <InputListSmallSection>
              <InputListHeader style={{ marginBottom: '32px' }}>정산자명</InputListHeader>
              <InputList>
                {payers.map((payer) => (
                  <InputListItem key={payer.id}>{payer.name}</InputListItem>
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
                  {payers.map((payer) => (
                    <InputListItem key={payer.seettlementId} style={{ width: '218px' }}>
                      <ItemInput
                        type="text"
                        value={payer.bankName || ''}
                        onChange={(e) => handleBankNameChange(e, payer.id)}
                        placeholder="은행명 입력"
                        style={{ width: '100%' }}
                      />
                    </InputListItem>
                  ))}
                </InputList>
                <LongInputList>
                  {payers.map((payer) => (
                    <LongInputListItem key={payer.seettlementId}>
                      <ItemInput
                        type="text"
                        value={payer.accountNumber || ''}
                        onChange={(e) => handleAccountNumberChange(e, payer.id)}
                        placeholder="계좌번호 입력"
                        style={{ width: '100%' }}
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