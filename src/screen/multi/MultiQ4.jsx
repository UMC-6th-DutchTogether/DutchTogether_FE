import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
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
  InputListItem
} from '../../styles/styledComponents';
import { updateSettlement } from '../../store/multiPaySlice';

export default function MultiQ4() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { settlements } = useSelector((state) => state.multiPay);

  // 첫 번째 settlement 값을 로컬 상태로 관리
  const [localSettlement, setLocalSettlement] = useState({
    payer: '',
    item: '',
    amount: '',
    settlers: ''
  });

  useEffect(() => {
    if (settlements.length > 0) {
      setLocalSettlement(settlements[0]); // 첫 번째 settlement 값을 로컬 상태로 설정
    }
  }, [settlements]);

  // 입력 변경 함수
  const handleChange = (field, value) => {
    setLocalSettlement(prevSettlement => ({
      ...prevSettlement,
      [field]: value
    }));
  };

  // 제출 함수
  const handleSubmit = () => {
    // 로컬 상태를 Redux 상태로 업데이트
    dispatch(updateSettlement({
      ...localSettlement,
      id: localSettlement.id || Date.now() + Math.random() // ID가 없는 경우 임시 ID 생성
    }));
    console.log('제출 데이터:', localSettlement);
    navigate('/MultiQ5'); // 다음 페이지로 이동
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
                <InputListItem>
                  <input
                    type="text"
                    placeholder="결제자 입력"
                    value={localSettlement.payer}
                    onChange={(e) => handleChange('payer', e.target.value)}
                    style={{ width: '100%', border: "none" }}
                  />
                </InputListItem>
              </InputList>
            </InputListSmallSection>

            <BorderLine />

            <InputListSmallSection>
              <InputListHeader style={{ marginBottom: '32px' }}>결제 품목</InputListHeader>
              <InputList>
                <InputListItem>
                  <input
                    type="text"
                    placeholder="결제품목 입력"
                    value={localSettlement.item}
                    onChange={(e) => handleChange('item', e.target.value)}
                    style={{ width: '100%', border: "none" }}
                  />
                </InputListItem>
              </InputList>
            </InputListSmallSection>

            <BorderLine />

            <InputListSmallSection>
              <InputListHeader style={{ marginBottom: '32px' }}>금액</InputListHeader>
              <InputList>
                <InputListItem>
                  <input
                    type="text"
                    placeholder="금액 입력"
                    value={localSettlement.amount}
                    onChange={(e) => handleChange('amount', e.target.value)}
                    style={{ width: '100%', border: "none" }}
                  />
                </InputListItem>
              </InputList>
            </InputListSmallSection>

            <BorderLine />

            <InputListSmallSection>
              <InputListHeader style={{ marginBottom: '32px' }}>정산인원</InputListHeader>
              <InputList>
                <InputListItem>
                  <input
                    type="text"
                    placeholder="정산인원 입력"
                    value={localSettlement.settlers}
                    onChange={(e) => handleChange('settlers', e.target.value)}
                    style={{ width: '100%', border: "none" }}
                  />
                </InputListItem>
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