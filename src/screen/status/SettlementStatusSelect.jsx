import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const ButtonContainer = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
`;

const StyledButton = styled.button`
  padding: 170px;
  background-color: white;
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

export default function SettlementStatusSelect() {
    const navigate = useNavigate();

    const handleSettlerCheck = () => {
        navigate('/SettlerCheckLogin');
    };

    return (
        <>
            <h2 style={{ padding: '50px' }}>정산 현황 확인하기</h2>
            <ButtonContainer>
                <StyledButton>
                    금액만 확인
                </StyledButton>
                <StyledButton onClick={handleSettlerCheck}>
                    입금자만 확인
                </StyledButton>
            </ButtonContainer>
        </>

    );
}
