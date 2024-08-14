import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import {
  DecorationBarLeft,
  DecorationBarLeftText,
  MultiPayContainerLeft,
  TitleText,
  BigSubmitButton,
  ContentContainer,
  TransparentBox,
  MainBackground,
  InputListContainer,
  BorderLine,
  InputListSmallSection,
  InputListHeader,
  InputList,
  InputListItem
} from '../../styles/styledComponents';
//import {  } from '../../store/multiPaySlice';

//리덕스 자체가 필요없는듯
// 'https://umc.dutchtogether.com/api/payers/{meetingNum}/' GET 결제자 정보& settlement 받기
//'https://umc.dutchtogether.com/api/settlement/' put 정산 아이템 정보입력
//'https://umc.dutchtogether.com/api/settler/' post 정산을 누가하는지(settlement에 대한 정산자) 입력
export default function MultiQ4() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { settlements, meetingNum } = useSelector((state) => state.multiPay);



  /*
    // 초기 상태로 기본 항목 추가
    useEffect(() => {
      getPayers();
  
      if (settlements.length === 0) {
        dispatch(setSettlements([
          { payer: '', item: '', amount: '', settlers: '', id: Date.now() + Math.random() * 1000 }
        ]));
      }
    }, [dispatch, settlements]);
  
  
    // GET 결제자 정보 & settlement 받기
    const getPayers = async () => {
      try {
  
        const response = await axios.get(`https://umc.dutchtogether.com/api/payers/${meetingNum}`)
        if (response.status == 200) {
          console.log(response.data.data.names.map((e) => { }));
  
          response.data.data.names.map((e) => {
            dispatch(setSettlements({
              ...settlements,
            }))
          })
  
        }
      } catch (err) {
        console.log('오류발생', err);
      }
    }
  
    // 입력 변경 함수
    const handleChange = (index, field, value) => {
      const updatedSettlements = settlements.map((settlement, idx) =>
        idx === index ? { ...settlement, [field]: value } : settlement
      );
  
      const currentRow = updatedSettlements[index];
      if (
        currentRow.payer.trim() !== '' &&
        currentRow.item.trim() !== '' &&
        currentRow.amount.trim() !== '' &&
        currentRow.settlers.trim() !== ''
      ) {
        if (index === settlements.length - 1) {
          updatedSettlements.push({
            payer: '',
            item: '',
            amount: '',
            settlers: '',
            id: Date.now() + Math.random() * 1000
          });
        }
      }
  
      // Redux 상태를 업데이트
      dispatch(setSettlements(updatedSettlements));
    };
  
    // 제출 함수
    const handleSubmit = async () => {
      const validSettlements = settlements.filter(
        settlement =>
          settlement.payer.trim() !== '' &&
          settlement.item.trim() !== '' &&
          settlement.amount.trim() !== '' &&
          settlement.settlers.trim() !== ''
      );
  
      if (validSettlements.length === 0) {
        console.log('유효한 정산 항목이 없습니다.');
        return;
      }
  
      const settlementInfoList = validSettlements.map(settlement => ({
        item: settlement.item,
        settlementId: settlement.id,
        totalAmount: parseFloat(settlement.amount),
        receiptId: 0 // 수정
      }));
  
      try {
        console.log(settlementInfoList);
        const response = await axios.put('https://umc.dutchtogether.com/api/settlement/', {
          settlementInfoList
        });
  
        if (response.status === 200) {
          console.log('성공:', response.data);
          navigate('/MultiQ5');
        } else {
          console.error('오류:', response);
        }
      } catch (error) {
        console.error('정산 제출 중 오류 발생:', error);
      } finally {
        navigate('/MultiQ5');
      }
    };
  
    // 뒤로 가기 함수
    const handleGoBack = () => {
      navigate('/MultiQ3');
    };
  
  return (
    <MainBackground>
      <DecorationBarLeft>
        <DecorationBarLeftText>같이 계산해요!</DecorationBarLeftText>
      </DecorationBarLeft>

      <TransparentBox />

      <MultiPayContainerLeft>
        <TitleText style={{ marginBottom: '48px' }}>결제 리스트에 대한 정산을 시작합니다.</TitleText>
        <ContentContainer>
          <InputListContainer>
            <InputListSmallSection>
              <InputListHeader style={{ marginBottom: '32px' }}>결제자</InputListHeader>
              <InputList>
                {settlements.map((settlement, index) => (
                  <InputListItem key={settlement.id || index}>
                    <input
                      type="text"
                      placeholder="결제자 입력"
                      value={settlement.payer}
                      onChange={(e) => handleChange(index, 'payer', e.target.value)}
                      style={{ width: '100%', border: "none" }}
                    />
                  </InputListItem>
                ))}
              </InputList>
            </InputListSmallSection>

            <BorderLine />

            <InputListSmallSection>
              <InputListHeader style={{ marginBottom: '32px' }}>결제 품목</InputListHeader>
              <InputList>
                {settlements.map((settlement, index) => (
                  <InputListItem key={settlement.id || index}>
                    <input
                      type="text"
                      placeholder="결제품목 입력"
                      value={settlement.item}
                      onChange={(e) => handleChange(index, 'item', e.target.value)}
                      style={{ width: '100%', border: "none" }}
                    />
                  </InputListItem>
                ))}
              </InputList>
            </InputListSmallSection>

            <BorderLine />

            <InputListSmallSection>
              <InputListHeader style={{ marginBottom: '32px' }}>금액</InputListHeader>
              <InputList>
                {settlements.map((settlement, index) => (
                  <InputListItem key={settlement.id || index}>
                    <input
                      type="text"
                      placeholder="금액 입력"
                      value={settlement.amount}
                      onChange={(e) => handleChange(index, 'amount', e.target.value)}
                      style={{ width: '100%', border: "none" }}
                    />
                  </InputListItem>
                ))}
              </InputList>
            </InputListSmallSection>

            <BorderLine />

            <InputListSmallSection>
              <InputListHeader style={{ marginBottom: '32px' }}>정산인원</InputListHeader>
              <InputList>
                {settlements.map((settlement, index) => (
                  <InputListItem key={settlement.id || index}>
                    <input
                      type="text"
                      placeholder="정산인원 입력"
                      value={settlement.settlers}
                      onChange={(e) => handleChange(index, 'settlers', e.target.value)}
                      style={{ width: '100%', border: "none" }}
                    />
                  </InputListItem>
                ))}
              </InputList>
            </InputListSmallSection>
          </InputListContainer>

          <div style={{ display: 'flex' }}>
            <BigSubmitButton onClick={handleGoBack} style={{ width: '580px', marginLeft: '41px' }}>뒤로 가기</BigSubmitButton>
            <BigSubmitButton onClick={handleSubmit} style={{ width: '580px' }}>정산 시작하기</BigSubmitButton>
          </div>
        </ContentContainer>
      </MultiPayContainerLeft>
    </MainBackground>
  );
  */
  return
}