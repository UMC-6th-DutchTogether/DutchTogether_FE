import styled from 'styled-components';

const Team = styled.div`
  background-color: #05284b;
  padding: 20px;
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  margin: 0;
`;


export default function Footer() {
    return (
        <Team>팀원 및 출처</Team>
    )
}