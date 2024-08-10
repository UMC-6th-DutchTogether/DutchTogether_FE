import { useNavigate } from 'react-router-dom';
import { Container, Logo, ButtonCon, LargeButton, FooterImage, FooterButtonImage, FooterCon } from '../styles/styledComponents';
import logo1 from '../assets/LOGO 1.png';
import buttonsImage from '../assets/혼자+같이.png';
import footerTextImage from '../assets/정산을 편리하게 (1).png';
import footerButtonImage from '../assets/정산 확인하기.png';

export default function MainForm() {
  const navigate = useNavigate();

  const handleSingleLogin = () => {
    navigate('/SingleLogin');
  };

  const handleMultipleLogin = () => {
    navigate('/MultiLogin');
  };

  const handleStatus = () => {
    navigate('/');
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

    </Container>
  );
}