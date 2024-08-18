import { useNavigate } from 'react-router-dom';
import {
  SinglePageContainer,
  DecorationBarRight,
  DecorationBarRightText,
  LoginConatiner

} from '../../styles/styledComponents';
import styled from 'styled-components';
//import AmountOnly from '../../assets/금액만.png'
import SellterCheck from '../../assets/입금자만.png'

const SelectionButtonContainer = styled.div`
 text-align: center;
 color: white;
 padding: 100px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 150px;
  justify-content: space-around;
`;


/*const AmountOnlyButton = styled.button`
  padding: 300px;
   background-image: url(${AmountOnly});
  background-size: cover;
  background-position: center; 
  background-repeat: no-repeat; 
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
`;*/

const SellterCheckButton = styled.button`
  padding-top: 450px;
  background-image: url(${SellterCheck});
  background-size: cover; /* 버튼 크기에 맞게 이미지 크기를 조정 */
  background-position: center; /* 이미지를 버튼 중앙에 배치 */
  background-repeat: no-repeat; /* 이미지 반복을 방지 */
  cursor: pointer;
  border: none;
  border-radius: 20px;
  text-align: center;
  font-size: 2.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  width: 504px;
  height: 575px;
  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export default function SingleSelect() {
  const navigate = useNavigate();

  //제출함수
  const handleLeftSubmit = async () => {
    navigate('/AmountOnlyQ1')
  };

  const handleRightSubmit = async () => {
    navigate('/SingleLogin')
  };

  return (
    <SinglePageContainer>

      <DecorationBarRight>
        <DecorationBarRightText>혼자 계산해요!</DecorationBarRightText>
      </DecorationBarRight>
      <LoginConatiner>

        <SelectionButtonContainer>
          <ButtonContainer>
            <SellterCheckButton onClick={handleLeftSubmit}>
              금액만 확인하기
            </SellterCheckButton>
            <SellterCheckButton onClick={handleRightSubmit}>
              입금자 확인하기
            </SellterCheckButton>
          </ButtonContainer>
        </SelectionButtonContainer>
      </LoginConatiner>

    </SinglePageContainer>
  );
}
