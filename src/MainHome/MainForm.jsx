import styled from 'styled-components';
import { Link } from 'react-router-dom';



const Container = styled.div`
  text-align: center;
  font-family: 'Arial, sans-serif';
`;


const MainImage = styled.div`
  background-size: cover;
  background-position: center;
  background-color: yellow;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;
`;

const MainText1 = styled.div`
  font-size: 25px;
  font-weight: bold;
  text-align: left;
  padding-left: 400px;
`;

const MainText2 = styled.div`
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  padding: 50px 0px 0px 400px ;
`;

const ServiceContainer = styled.section`
  padding: 40px 20px;
  text-align: center;
`;

const ServiceTitle = styled.div`
  font-size: 17px;
  text-align: center;
  padding-bottom: 50px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const ServiceButton = styled.button`
  padding: 0px 100px 100px 10px;
  font-size: 18px;
  white-space: pre-wrap;
  text-align: left;
  background-color: #e3f2fd;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #90caf9;
  }
`;

const ButtonText = styled.span`
  display: block;
  font-weight: bold;
`;

const LargeText = styled.span`
  display: block;
  font-size: 30px;
  font-weight: bold;
`;

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
                <ButtonContainer>
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
                </ButtonContainer>
            </ServiceContainer>
        </Container>
    );
}
