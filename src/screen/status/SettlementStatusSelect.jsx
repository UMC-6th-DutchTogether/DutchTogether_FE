import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const SelectionButtonContainer = styled.div`
 text-align: center;
 color: white;
 padding: 100px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 150px;
  justify-content: center;
`;

import AmountOnly from '../../assets/금액만.png'
import SellterCheck from '../../assets/입금자만.png'

const AmountOnlyButton = styled.button`
  padding: 300px;
   background-image: url(${AmountOnly});
  background-size: cover; /* 버튼 크기에 맞게 이미지 크기를 조정 */
  background-position: center; /* 이미지를 버튼 중앙에 배치 */
  background-repeat: no-repeat; /* 이미지 반복을 방지 */
  cursor: pointer;
  border: none;
  border-radius: 10px;
  font-size: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const SellterCheckButton = styled.button`
  padding: 450px 170px 0px 170px;
  background-image: url(${SellterCheck});
  background-size: cover; /* 버튼 크기에 맞게 이미지 크기를 조정 */
  background-position: center; /* 이미지를 버튼 중앙에 배치 */
  background-repeat: no-repeat; /* 이미지 반복을 방지 */
  cursor: pointer;
  border: none;
  border-radius: 10px;
  text-align: center;
  font-size: 2.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export default function SettlementStatusSelect() {
  const navigate = useNavigate();

  const handleSettlerCheck = () => {
    navigate('/SingleLogin');
  };

  return (
    <SelectionButtonContainer>
      <h2 style={{ fontSize: '50px', paddingBottom: '50px' }}>정산 현황 확인하기</h2>
      <ButtonContainer>
        <AmountOnlyButton>
        </AmountOnlyButton>
        <SellterCheckButton onClick={handleSettlerCheck}>
          입금자 확인
        </SellterCheckButton>
      </ButtonContainer>
    </SelectionButtonContainer>

  );
}
