import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Container, Logo, ButtonCon, LargeButton, FooterImage, FooterButtonImage, FooterCon } from '../styles/styledComponents';
import logo1 from '../assets/LOGO 1.png';
import buttonsImage from '../assets/혼자+같이.png';
import footerTextImage from '../assets/정산을 편리하게 (1).png';
import footerButtonImage from '../assets/정산 확인하기.png';
import styled, { keyframes } from 'styled-components';
import SettlementStatusSelect from './status/SettlementStatusSelect';


// Slide animation
const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

// Animated container
const SlideUpContainer = styled.div`
  animation: ${({ isVisible }) => (isVisible ? slideUp : 'none')} 0.5s ease-out forwards;
  position: fixed;
  bottom: 0;
  width: auto;
  height: 92%;
  background: conic-gradient(from -90deg at 0% 56.43%, #747FD3 0deg, #C4C7EC 360deg);
  border-radius: 50px 50px 0 0;
  box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.1);
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  background-color: #A6C1FF;
  z-index: 10;
  left: 0;
  right: 0;
`;

export default function MainForm() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const handleSingleLogin = () => {
    setIsVisible(true);
  };

  const handleMultipleLogin = () => {
    navigate('/MultiLogin');
  };

  const handleStatus = () => {
    navigate('/SettlerCheckLogin');
  };

  return (
    <Container>
      <ButtonCon style={{ backgroundImage: `url(${buttonsImage})` }}>
        <LargeButton onClick={handleSingleLogin} />
        <Logo src={logo1} alt="Logo" />
        <LargeButton onClick={handleMultipleLogin} />
      </ButtonCon>
      <FooterCon>
        <FooterImage src={footerTextImage} alt="정산을 편리하게" />
        <FooterButtonImage src={footerButtonImage} alt="정산 확인하기" onClick={handleStatus} />
      </FooterCon>

      {/* Slide-up container */}
      <SlideUpContainer isVisible={isVisible}>

        <SettlementStatusSelect />

      </SlideUpContainer>


    </Container>
  );
}