import styled from 'styled-components';

//----------------------MainForm--------------------------
export const Container = styled.div`
  text-align: center;
  font-family: 'Arial, sans-serif';
`;


export const MainImage = styled.div`
  background-size: cover;
  background-position: center;
  background-color: yellow;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;
`;

export const MainText1 = styled.div`
  font-size: 25px;
  font-weight: bold;
  text-align: left;
  padding-left: 400px;
`;

export const MainText2 = styled.div`
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  padding: 50px 0px 0px 400px ;
`;

export const ServiceContainer = styled.section`
  padding: 40px 20px;
  text-align: center;
`;

export const ServiceTitle = styled.div`
  font-size: 17px;
  text-align: center;
  padding-bottom: 50px;
`;

export const ServiceButton = styled.button`
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

export const ButtonText = styled.span`
  display: block;
  font-weight: bold;
`;

export const LargeText = styled.span`
  display: block;
  font-size: 30px;
  font-weight: bold;
`;
export const MainFomrButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

//--------------ChekSingleQ------------------
export const SLoginContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  margin-top: 70px;
`;


export const CheckBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 70%;
  height: 530px;
  padding: 20px;
  
`;

export const SLoginTitle = styled.h2`
    padding-top: 50px;
    margin-bottom: 0px;
    text-align: left;
    width: 70%;
`;

export const SingleQ = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #0d5eaf;
  margin-bottom: 8px;
`;

export const SingleA = styled.div`
  margin-left: 20px;
  border-bottom: 2px solid #0d5eaf;
  margin-bottom: 20px;
  width: 30%;
`;

export const ButtonContainer = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: space-between;
`;

export const BackButton = styled.button`
  background-color: white;
  border: 2px solid #0d5eaf !important;
  border-radius: 10px;
  text-align: center;
  padding: 10px 50px 10px 50px;
  color: #0d5eaf;
`;

export const LinkButton = styled.button`
  background-color: white;
  border: 2px solid #0d5eaf !important;
  border-radius: 10px;
  text-align: center;
  padding: 10px 50px 10px 50px;
  color: #0d5eaf;
`;

export const SingleCost = styled.div`
    display: flex;
    gap: 30px;
`;

export const Receipt = styled.button`
  background-color: white;
  border: 2px solid #0d5eaf !important;
  color: #0d5eaf;
  text-align: center;
  padding: 5px;
`;





//----------SingleLogin--------------

export const SLoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  height: 500px;
  background-color: #a7d0f8;
  padding: 20px;
  
`;


export const TextContainer = styled.div`
  margin-top: 10px;
  text-align: center;
`;

export const Input = styled.input`
  margin: 10px;
  padding: 10px 10px;
  width: 100%;
  max-width: 500px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  margin-top: 50px;
  padding: 10px;
  width: 100%;
  max-width: 500px;
  border-radius: 50px;
  background-color: white;
  color: skyblue;
  font-weight: bold;
  cursor: pointer;
  box-sizing: border-box;

`;

export const ErrorMessage = styled.span`
  color: red;
  padding-left: 20px;
  font-size: 13px;
`;






//----------------SingleQ-------------------
export const SingleLoginContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const QuestionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 500px;
  background-color: #a7d0f8;
  padding: 20px;
  position: relative;
`;

export const SingleLoginTitle = styled.h2`
  padding-top: 50px;
  margin-bottom: 0px;
  text-align: left;
  width: 70%;
`;

export const SingleQ1Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 200px;
  justify-content: center;
  height: 100%;
  margin-top: 100px;
`;

export const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

export const LeftArrowButton = styled(ArrowButton)`
  left: 10px;

  &::before {
    content: "<";
    font-size: 5rem;
    color: white;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; /* 테두리 효과 */
  }
`;

export const RightArrowButton = styled(ArrowButton)`
  right: 10px;

  &::before {
    content: ">";
    font-size: 5rem;
    color: white;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; /* 테두리 효과 */
  }
`;

export const QuestionText = styled.p`
  font-size: 1.5rem;
  margin: 0 20px;
`;




//---------------Footer--------------
export const Team = styled.div`
  background-color: #05284b;
  padding: 20px;
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  margin: 0;
`;


//----------------Header--------------
export const Title = styled.p`
  background-color: #05284b;
  padding: 20px;
  color: white;
  position: fixed;
  top: 0;
  width: 100%;
  margin: 0;
`;