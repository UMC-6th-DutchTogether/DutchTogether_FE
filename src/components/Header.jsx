import { HeaderBar, HeaderContentContainer, HeaderMenu, HeaderTitle, HeaderMenuText, HeaderLogo } from '../styles/styledComponents';
import img from '../assets/LOGO 2.png';

export default function Header() {
  return (
    <HeaderBar>
      <HeaderContentContainer>
        <HeaderLogo>
          <img src={img} alt="로고" style={{ height: '60px', width: '60px' }} />
          <HeaderTitle>더치투게더</HeaderTitle>
        </HeaderLogo>
        <HeaderMenu>
          <HeaderMenuText>Home</HeaderMenuText>
          <HeaderMenuText>About</HeaderMenuText>
          <HeaderMenuText>Log-in</HeaderMenuText>
        </HeaderMenu>
      </HeaderContentContainer>
    </HeaderBar>
  )
}

