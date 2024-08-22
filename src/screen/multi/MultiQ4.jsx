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
  InputListItem,
  ItemInput,
  Itemselect
} from '../../styles/styledComponents';
import { setSettlements, setMeetingLink } from '../../store/multiPaySlice';

export default function MultiQ4() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { payers, settlements, meetingNum } = useSelector((state) => state.multiPay);


  //초기 빈 settlement 생성
  useEffect(() => {
    if (settlements.length === 0) {
      dispatch(setSettlements([
        { payer: '', item: '', amount: '', settlers: '', settlementId: Date.now() + Math.random() * 1000 }
      ]));
    }
  }, [dispatch, settlements]);


  // settlementID 받아오기 함수
  const getSettlementId = async (payerId) => {
    console.log({
      payerId: payerId,
      meetingNum: meetingNum
    });

    try {
      const response = await axios.post(`https://umc.dutchtogether.com/api/settlement/multi`, {
        payerId: payerId,
        meetingNum: meetingNum
      })

      if (response.status === 200) {
        console.log("SettlementId 받기", response.data.data.settlementId);
        return (response.data.data.settlementId);
      }
    } catch (err) {
      console.log('오류 발생', err);
      return false;
    }
  };


  // 값 입력시 호출 함수(리덕스에 값 저장)
  const handleChange = async (index, field, value) => {
    let updatedSettlements = settlements.map((settlement, idx) =>
      idx === index ? { ...settlement, [field]: value } : settlement
    );

    // 결제자
    if (field === 'payer') {
      const selectedPayer = payers.find(payer => payer.name === value);
      if (selectedPayer) {
        const newSettlementId = await getSettlementId(selectedPayer.payerId);
        if (!newSettlementId) {
          console.error("Failed to fetch Settlement ID");
        } else {
          updatedSettlements = updatedSettlements.map((settlement, idx) =>
            idx === index ? { ...settlement, settlementId: newSettlementId } : settlement
          );
        }
      }
    }

    // 정산자
    if (field === 'settlers') {
      const settlersArray = value.split(',').map(name => name.trim());
      updatedSettlements = updatedSettlements.map((settlement, idx) =>
        idx === index ? { ...settlement, settlers: settlersArray } : settlement
      );
    }


    // 금액 필드에 숫자만 입력되도록 처리
    if (field === 'amount') {
      const numericValue = value.replace(/[^0-9]/g, ''); // 숫자 이외의 문자는 모두 제거
      updatedSettlements = updatedSettlements.map((settlement, idx) =>
        idx === index ? { ...settlement, amount: numericValue } : settlement
      );
    }

    const currentRow = updatedSettlements[index];
    if (
      currentRow.payer.trim() !== '' &&
      currentRow.item.trim() !== '' &&
      currentRow.amount.trim() !== '' &&
      currentRow.settlers.length > 0
    ) {
      if (index === settlements.length - 1) {
        updatedSettlements.push({
          payer: '',
          item: '',
          amount: '',
          settlers: '',
          settlementId: Date.now() + Math.random() * 1000
        });
      }
    }

    console.log(updatedSettlements);
    dispatch(setSettlements(updatedSettlements));
  };



  // put settler API 함수
  const postSettler = async (set) => {
    const settlerArray = set.flatMap((settlement) => {
      return settlement.settlers.map((name) => {
        return {
          name: name,
          settlementId: settlement.settlementId
        };
      });
    });

    console.log("Prepared Settler Array: ", settlerArray);

    try {
      const response = await axios.post(`https://umc.dutchtogether.com/api/settler/`, {
        requests: settlerArray,
        meetingNum: meetingNum
      });

      if (response.status === 200) {
        console.log("settler 전달하기", response);
      }
    } catch (err) {
      console.error('오류 발생', err);
    }
  };


  // 제출하기 함수
  const handleSubmit = async () => {

    const validSettlements = settlements.filter(
      settlement =>
        settlement.payer.trim() !== '' &&
        settlement.item.trim() !== '' &&
        settlement.amount.trim() !== ''
    );

    if (validSettlements.length === 0) {
      console.error('유효한 정산 항목이 없습니다.');
      return;
    } else await postSettler(validSettlements); //put settler api

    const settlementInfoList = validSettlements.map(settlement => ({
      item: settlement.item,
      settlementId: settlement.settlementId,
      totalAmount: parseFloat(settlement.amount),
      receiptId: 0
    }));

    try {
      const response = await axios.put('https://umc.dutchtogether.com/api/settlement/', {
        settlementInfoList
      });

      if (response.status === 200) {
        console.log("결제품목 정보 put", response.data);
        navigate('/MultiCreateLink');
      } else {
        console.error('오류:', response);
      }
    } catch (error) {
      console.error('정산 제출 중 오류 발생:', error);
    } finally {
      navigate('/MultiCreateLink');
    }
  };

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
                  <InputListItem key={settlement.settlementId || index}>
                    <Itemselect
                      value={settlement.payer}
                      onChange={(e) => handleChange(index, 'payer', e.target.value)}
                      style={{ width: '100%', border: "none" }}
                    >
                      <option value="">결제자 선택</option>
                      {payers.map((payer) => (
                        <option key={payer.settlementId || payer.name} value={payer.name}>
                          {payer.name}
                        </option>
                      ))}
                    </Itemselect>
                  </InputListItem>
                ))}
              </InputList>
            </InputListSmallSection>


            <BorderLine />

            <InputListSmallSection>
              <InputListHeader style={{ marginBottom: '32px' }}>결제 품목</InputListHeader>
              <InputList>
                {settlements.map((settlement, index) => (
                  <InputListItem key={index}>
                    <ItemInput
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
                  <InputListItem key={index}>
                    <ItemInput
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
                  <InputListItem key={index}>
                    <ItemInput
                      type="text"
                      placeholder="정산인원 입력( , 로 구분)"
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
}