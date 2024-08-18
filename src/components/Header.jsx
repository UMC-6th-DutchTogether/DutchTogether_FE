import { HeaderBar, HeaderContentContainer, HeaderMenu, HeaderTitle, HeaderMenuText, HeaderLogo } from '../styles/styledComponents';
import img from '../assets/LOGO 2.png';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <HeaderBar>
      <HeaderContentContainer>
        <HeaderLogo>
          <img src={img} alt="로고" style={{ height: '60px', width: '60px' }} />
          <HeaderTitle>더치투게더</HeaderTitle>
        </HeaderLogo>
        <HeaderMenu>
          <Link to="/">
            <HeaderMenuText>Home</HeaderMenuText>
          </Link>
          <HeaderMenuText>Log-in</HeaderMenuText>
        </HeaderMenu>
      </HeaderContentContainer>
    </HeaderBar>
  )
}

