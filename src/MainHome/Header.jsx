import styled from 'styled-components';

const Title = styled.p`
  background-color: #05284b;
  padding: 20px;
  color: white;
  position: fixed;
  top: 0;
  width: 100%;
  margin: 0;
`;


export default function TitleBar() {
    return (
        <Title>더치투게더</Title>
    )
}