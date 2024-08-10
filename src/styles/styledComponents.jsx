import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faCopy } from '@fortawesome/free-solid-svg-icons';
//자주쓰는 색
const INDIGO = '#05284b'

//----------------------MainForm--------------------------

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1920px;
  min-height: 1080px;
  padding-top: 229px;
  box-sizing: border-box;
`;

export const ButtonCon = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1920px;
  background-size: cover;
  background-repeat: no-repeat;
  align-items: center;
  position: relative;
`;

export const LargeButton = styled.button`
  width: 960px;
  height: 435px;
  background: none;
  border: none;
  cursor: pointer;
`;

export const Logo = styled.img`
  width: 662px;
  height: 659px;
  object-fit: contain;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const FooterCon = styled.div`
  display: flex;
  align-items: center;
  margin-top: 200px;
`;

export const FooterImage = styled.img`
  margin-right: 20px;
  width: auto;
  height: auto;
`;

export const FooterButtonImage = styled.img`
  cursor: pointer;
  width: auto;
  height: auto;
`;

//----------SingleCreateLink--------------

export const SingleLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 70px;
  gap: 10px;
  align-items: center;
`;



export const LinkButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  margin-bottom:50px;
  width: 100%
  
`;

export const NewSingleLink = styled.div`
  display:flex;
  font-size: 25px;
  font-weight: bold;

`;

export const StyledCopyIcon = styled(FontAwesomeIcon)`
  margin-left: 10px;
  cursor: pointer;
  transition: color 0.1s ease-in-out, transform 0.1s ease-in-out;
color: rgba(0,0,0,0.6);
  &:hover {
    color: rgba(0,0,0,1);
    transform: scale(1.1);
  }
`;

//----------SingleLogin--------------
export const LoadingConatiner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-Content: center;
  align-Items: center;
  background-color: rgba(0, 0, 0,0.1);
  z-Index: 1000;
`;


export const LoginConatiner = styled.div`
  display: flex;
  flex-direction: column;
   width: 70%;
   min-width:1000px;
  height: 50vh;
  min-height: 650px;
  background-color: #E2F0FF;
  padding-top: 20px; 
    z-index: 10;

`;

export const TextContainer = styled.div`
  margin-top:50px;
  text-align: center;
`;

export const LoginInput = styled.input`
  margin-top: 10px;
  padding: 10px 10px;
  width: 100%;
  height: 60px;
  max-width: 500px;
  box-sizing: border-box;
  font-size:25px;
  border: 2px solid #062C53;
`;

export const ErrorConatiner = styled.div`
  height: 40px;

`;

export const NextButton = styled.button`
  margin-top: 50px;
  padding: 10px;
  width: 300px;
  height:60px;
  max-width: 500px;
  border-radius: 20px;
  background-color: white;
  color: ${INDIGO};
  font-weight: bold;
  cursor: pointer;
  box-sizing: border-box;
border: 2px solid #062C53;
 font-size:20px;
   &:hover {
    background-color: rgba(0,0,0,0.1);
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  padding-left: 20px;
  font-size: 17px;
  font-weight:600;
`;






//----------------SingleQ-------------------
export const SingleLoginContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;
export const Input = styled.input`
  margin-top: 10px;
  padding: 10px 10px;
  width: 500px;
  height:70px;
  max-width: 500px;
  box-sizing: border-box;
  border:none;
  font-size:20px;
  font-weight:bold;
`;
export const QuestionContainer = styled(LoginConatiner)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 50vh;
  padding-top: 20px;
  position: relative;
  z-index:1;
    min-height: 550px;
    min-width: 1000px;
`;


export const SingleQ1Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-top: 180px;

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

export const StyledImage = styled.img`
  max-width: 100%; 
  max-height: 100%; 
  object-fit: contain; 
`;

export const ReciptInputContainer = styled.img`
display: flex;
 flexDirection: column
`;




//--------------ChekSingleQ------------------
export const SinglePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top:100px;
  height: calc(100vh - 230px);
`;


export const CheckContainer = styled.div`
margin-top:50px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 70%;
  min-width:800px;
  height: 530px;
  padding: 20px;
`;

export const SinglePageTitle = styled.h2`
    margin-bottom: 30px;
    height:50px;
    color: ${INDIGO};
    font-size:36px;
    font-weight:700;
    width: 70%;
    min-width:1000px;


`;
export const CheckSinglePageTitle = styled(SinglePageTitle)`
margin-bottom: 0px;

min-width:800px;
`;


export const SingleText1 = styled.h2`
  font-size: 30px;
  font-weight: 600;
  color: ${INDIGO};
  margin-bottom: 70px;

`;
export const SingleText2 = styled.h2`
  font-size: 20px;
  font-weight: 400;
  color:${INDIGO};
  margin-bottom: 8px;
`;


export const SingleQ = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${INDIGO};
  margin-bottom: 8px;

`;

export const SingleA = styled.div`
  margin-left: 28px;
  border-bottom: 1px solid  ${INDIGO};
  margin-bottom: 20px;
  height:25px;
  width: 280px;
  color: ${INDIGO};
  font-size: 18px;
`;
export const LongSingleA = styled(SingleA)`
  width: 470px;
`;

export const ButtonContainer = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: space-between;
`;

export const BackButton = styled(NextButton)`
width:200px;
height:60px;
font-size:20px;



`;

export const LinkButton = styled(NextButton)`
width:200px;
height:60px;
font-size:20px;
`;

export const SingleCost = styled.div`
    display: flex;

`;

export const ReceiptButton = styled(NextButton)`
font-size:15px;
width:140px;
height:30px;
border-radius:5px;
padding:0px;
margin:0 0 0 45px;
`;

//----------------MeetingDetail--------------

export const SingleDetailText = styled.p`
  font-size: 25px;
  font-weight: 600;
  color: ${INDIGO};
  margin-bottom: 30px;

`;

export const Transferbutton = styled.button`
  display: flex;
  justify-content: space-around;
  width: 100%
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  padding: 10px 70px 10px 70px;
  background-color: white;
  
`;

//----------------MeetingCheck--------------

export const CompleteButton = styled.button`
  display: flex;
  justify-content: space-around;
  width: 100%
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  padding: 10px 50px 10px 50px;
  background-color: white;
`;

export const CheckMeetingContainer = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;

export const SingleNameInput = styled.input`
  padding: 10px 100px 10px 100px;
`;





//----------------Header--------------
export const HeaderBar = styled.div`
display: flex;
width: 100vw;
height: 123px;
padding: 25px 30px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;

`;
export const HeaderContentContainer = styled.div`
display: flex;
width:90%;
justify-content: space-between;
align-items: center;

`;

export const HeaderLogo = styled.div`
display: flex;
align-items: center;
gap: 30px;
margin-right:100px;
`;

export const HeaderTitle = styled.p`
color: #000;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: normal;
white-space : nowrap;
  
`;

export const HeaderMenu = styled.p`
display: flex;
align-items: center;
gap: 360px;  
`;

export const HeaderMenuText = styled.p`
color: #000;
font-size: 30px;
font-style: normal;
font-weight: 400;
line-height: normal;
white-space : nowrap;
`;
