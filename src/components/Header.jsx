import { HeaderBar, HeaderContentContainer, HeaderMenu, HeaderTitle, HeaderMenuText, HeaderLogo } from '../styles/styledComponents';
import img from '../assets/LOGO 2.png';
import { Link } from 'react-router-dom';

const handleLogoClick = () => {
  // localStorage 초기화
  localStorage.clear();
};

export default function Header() {
  return (
    <HeaderBar>
      <HeaderContentContainer>
        <HeaderLogo>
          <img src={img} alt="로고" style={{ height: '60px', width: '60px' }} />
          <Link to="/">
            <HeaderTitle style={{ cursor: 'pointer' }} onClick={handleLogoClick}>더치투게더</HeaderTitle>
          </Link>
        </HeaderLogo>
        <HeaderMenu>
          <Link to="/">
            <HeaderMenuText style={{ cursor: 'pointer' }}>Home</HeaderMenuText>
          </Link>
          <HeaderMenuText>Log-in</HeaderMenuText>
        </HeaderMenu>
      </HeaderContentContainer>
    </HeaderBar>
  )
}

