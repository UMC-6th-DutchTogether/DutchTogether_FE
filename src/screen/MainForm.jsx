import { Link } from 'react-router-dom';
import { Container, MainImage, MainText1, MainText2, ServiceContainer, ServiceTitle, ServiceButton, ButtonText, LargeText, MainFomrButtonContainer } from '../styles/styledComponents'



export default function MainFrom() {
  return (
    <Container>
      <MainImage>
        <MainText1>정산을 빠르고</MainText1>
        <MainText1>쉽게 하고 싶다면?</MainText1>
        <MainText2>더치투게더 지금 시작하세요.</MainText2>
      </MainImage>
      <ServiceContainer>
        <ServiceTitle>더치투게더 서비스</ServiceTitle>
        <MainFomrButtonContainer>
          <Link to="/SingleLogin">
            <ServiceButton>
              <LargeText>나만</LargeText>
              <ButtonText>정산하기</ButtonText>
            </ServiceButton>
          </Link>
          <ServiceButton>
            <LargeText>여러명</LargeText>
            <ButtonText>정산하기</ButtonText>
          </ServiceButton>
          <ServiceButton>
            <LargeText>정산</LargeText>
            <LargeText>현황</LargeText>
          </ServiceButton>
        </MainFomrButtonContainer>
      </ServiceContainer>
    </Container>
  );
}
