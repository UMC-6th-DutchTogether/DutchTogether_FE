import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Container, Logo, ButtonCon, DecorationBarLeftText, TransparentBox, DecorationBarRightText, LargeButtonLeft, LargeButtonRight, FooterImage, FooterButtonImage, FooterCon } from '../styles/styledComponents';
import logo1 from '../assets/LOGO 1.png';
import footerTextImage from '../assets/정산을 편리하게 (1).png';
import footerButtonImage from '../assets/정산 확인하기.png';

export default function MainForm() {
  const navigate = useNavigate();
  const [isLeftClicked, setIsLeftClicked] = useState(false);
  const [isRightClicked, setIsRightClicked] = useState(false);

  const handleLeftClick = () => {
    setIsLeftClicked(true);

    setTimeout(() => {
      navigate('/SingleLogin');
    }, 600);
  };

  const handleRightClick = () => {
    setIsRightClicked(true);

    setTimeout(() => {
      navigate('/MultiLogin');
    }, 600);
  };

  const handleStatus = () => {
    navigate('/SettlerCheckLogin');
  };

  return (
    <Container>
      <ButtonCon>
        <LargeButtonLeft isClicked={isLeftClicked} onClick={handleLeftClick} isVisible={!isRightClicked}><DecorationBarRightText>혼자 계산해요!</DecorationBarRightText></LargeButtonLeft>
        <Logo src={logo1} isVisible={!isLeftClicked && !isRightClicked} alt="Logo" />
        <LargeButtonRight isClicked={isRightClicked} onClick={handleRightClick} isVisible={!isLeftClicked}><DecorationBarLeftText>같이 계산해요! </DecorationBarLeftText></LargeButtonRight>
      </ButtonCon>
      <TransparentBox />

      <FooterCon>
        <FooterImage src={footerTextImage} alt="정산을 편리하게" />
        <FooterButtonImage src={footerButtonImage} alt="정산 확인하기" onClick={handleStatus} />
      </FooterCon>

    </Container>
  );
}