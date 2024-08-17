import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//자주쓰는 색
const INDIGO = '#05284b'

//----------------------MainForm--------------------------

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 1080px;
  padding-top: 229px;
  box-sizing: border-box;
`;

export const ButtonCon = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
  align-items: center;
  position: relative;
`;

export const LargeButton = styled.button`
  width: 50vw;
  height: 45vh;
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
  width: 95vw;
  display: flex;
  align-items: center;
  margin-top: 200px;
`;

export const FooterImage = styled.img`
  margin-right: 20px;
  width: 100vw;
  height: auto;
`;

export const FooterButtonImage = styled.img`
  cursor: pointer;
  width: 30vw;
  height: auto;
`;

//----------SingleCreateLink--------------

export const SingleNewLinkContainer = styled.div`
  flex-grow: 1;
  display: flex;
  padding: 50px;
  align-items:center;
  flex-direction: column;
  gap: 50px;
  height: 957px;
  border-radius: 0px 100px 100px 0px;
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.25);
  background: conic-gradient(from -90deg at 0% 56.43%, #747FD3 0deg, #C4C7EC 360deg);
  z-index: 10;
  min-width: 1400px;
`;

export const SinglePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding-top: 70px;
  height: calc(100vh - 300px);
  width: calc(100vw - 500px);
`;


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

export const SingleLinkTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-top: 20px;
  padding: 10px;
  
`;

export const SingleLinkText = styled.p`
  font-size: 30px;
  font-weight: 600;
  color: white;
  margin-bottom: 20px;
`;

export const SingleLinkTitle = styled.h2`
  font-size: 50px;
  font-weight: 600;
  color: white;
  margin-bottom: 30px;
`;

export const NewSingleLink = styled.div`
  display:flex;
  font-size: 40px;
  font-weight: bold;
  background-color: white;
  padding: 50px;
  border-radius: 50px;
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
flex-grow: 1;
display:flex;
align-items:center;
flex-direction:column;
height: 957px;
border-radius: 0px 100px 100px 0px;
box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.25);
background: conic-gradient(from -90deg at 0% 56.43%, #747FD3 0deg, #C4C7EC 360deg);
z-index: 10;
min-width:1400px;
`;

export const SingleLoginInputContainer = styled.div`
display: flex;
width: 700px;
height: 40px;
padding: 28px 36px;
align-items: center;
gap: 45px;
flex-shrink: 0;
border-radius: 15px;
background: #FFF;
`;

export const TextContainer = styled.div`
  margin-top:90px;
  text-align: center;
`;



export const ErrorConatiner = styled.div`
  height: 40px;

`;

export const SingleText1 = styled.h2`
  font-size: 100px;
  font-weight: 600;
  color: white;
  margin-bottom: 70px;
`;
export const SingleText2 = styled.h2`
  font-size: 20px;
  font-weight: 400;
  color:${INDIGO};
  margin-bottom: 8px;
`;

export const NextButton = styled.button`
  margin-top: 50px;
  padding: 20px 50px;
  width: 700px;
  height:60px;
  max-width: 700px;
  border-radius: 20px;
  background-color: #5562CA;
  color: white;
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
  margin-top: 50px;
  padding: 20px 30px;
  width: 1200px;
  height:70px;
  max-width: 1400px;
  box-sizing: border-box;
  border:none;
  border-radius: 50px;
  font-size: 30px;
  font-weight:bold;
`;

export const SingleQText = styled.h2`
  font-size: 60px;
  font-weight: 600;
  color: white;
  margin-bottom: 70px;

`;

export const QuestionContainer = styled(LoginConatiner)`
  flex-grow: 1;
  display: flex;
  padding: 50px;
  align-items:center;
  flex-direction: row;
  gap: 50px;
  height: 957px;
  border-radius: 0px 100px 100px 0px;
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.25);
  background: conic-gradient(from -90deg at 0% 56.43%, #747FD3 0deg, #C4C7EC 360deg);
  z-index: 10;
  min-width: 80%;
`;


export const SingleQ1Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-top: 400px;
  padding: 50px;
`;

export const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  top: 50%;
  transform: translateY(-50%);

`;

export const LeftArrowButton = styled(ArrowButton)`
  left: 20px;

  &::before {
    content: "<";
    font-size: 5rem;
    color: white;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; /* 테두리 효과 */
  }
`;

export const RightArrowButton = styled(ArrowButton)`
  right: 520px;

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

export const ReceiptImage = styled.img`
  max-width: 100%; 
  max-height: 100%; 
  object-fit: contain;
  padding: 20px 0px;
  width: 400px;
  height: 300px;
  marginLeft: 16px;
  background-color: white;
  border-radius: 50px;
  margin-left: 80px;
`;


//--------------ChekSingleQ------------------

export const CheckQuestionContainer = styled(LoginConatiner)`
  flex-grow: 1;
  display:flex;
  align-items:center;
  flex-direction:column;
  height: 957px;
  border-radius: 0px 100px 100px 0px;
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.25);
  background: conic-gradient(from -90deg at 0% 56.43%, #747FD3 0deg, #C4C7EC 360deg);
  z-index: 10;
  min-width:1400px;
`;

export const CheckContainer = styled.div`
  margin-bottom: 80px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  min-width:800px;
  height: 530px;
  padding: 100px;
  border-radius: 50px;
  background-color: #C4C7EC;
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
  margin: 50px 0 0 0px;
  min-width:800px;
  text-align: center;
`;

export const SingleQ = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${INDIGO};
  margin: 8px;

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
width: 250px;
height:60px;
font-size:20px;
`;

export const LinkButton = styled(NextButton)`
width: 250px;
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

export const SingleDetailContainer = styled.div`
  background: linear-gradient(180deg, #C4C7EC 0%, #747FD3 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const MeetingDetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
    background: #FFE1E1 url("../assets/noisy-background.png");
    background-size: cover;
    background-blend-mode: multiply; /* 또는 다른 blend mode */
  padding: 30px 130px 30px 120px;
  border-radius: 15px;
  box-shadow: 0px 4px 30px 0px;
  width: 50%;
  max-width: 800px;
  margin: 0 0 0 100px;
  
`;

export const FinalAmountText = styled.p`
  font-size: 70px;
  font-weight: 600;
  color: ${INDIGO};
  margin-bottom: 20px;
  padding: 30px;
`;


export const BankSelect = styled.select`
  font-size: 15px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${INDIGO};
  margin-right: 10px;
`;

export const BankOption = styled.option`
  font-size: 15px;
`;

export const TransferSection = styled.div`
  display: flex;
  gap: 10px;
  
`;

export const MeetingNameText = styled.div`
  display: flex;
  gap: 10px;
  padding: 40px;
`;

export const MeetingNameText2 = styled.p`
  margin-top:10px
`;

export const SingleDetailText = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: ${INDIGO};
  margin-bottom: 20px;
`;


export const Transferbutton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 70px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  background-color: ${INDIGO};
  color: white;
  &:hover {
    background-color: darken(${INDIGO}, 10%);
  }
`;

export const ReceiplBox = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
    background: #FFE1E1 url("../assets/noisy-background.png");
    background-size: cover;
    background-blend-mode: multiply; /* 또는 다른 blend mode */
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 4px 30px 0px;
  width: 30%;
  
  margin: 0 100px 0 100px;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, #C4C7EC 0%, #747FD3 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
  z-index: 9999;
`;

import LetterImage from '../assets/Letter.png';

export const Letter = styled.div`
  background: url(${LetterImage}) no-repeat center center;
  background-size: contain;
  padding: 150px;
  border-radius: 10px;
  color: black;
  font-size: 18px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 300px;
`;

//----------------MeetingCheck--------------

export const CompleteButton = styled.img`
  cursor: pointer;
  font-size: 15px;
  padding: 30px;
  background-color: #FFE1E1;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

export const UnCompletedButton = styled.img`
  cursor: pointer;
  font-size: 15px;
  padding: 30px;
  background-color: #FFE1E1;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;


export const CompleteNameButton = styled.button`
  padding: 10px 10px;
  margin: 0px 20px;
  border: none;
  border-radius: 20px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  disabled: ${props => props.disabled ? 'true' : 'false'};
`;

export const CheckMeetingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;

export const SingleNameInputWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 0px;
  background-color: #EDEEFF;
  border-radius: 50px;
`;

export const SingleNameInput = styled.input`
  flex: 1;
  border: none;
  border-radius: 20px;
  padding: 20px 180px 20px 10px;
  background-color: #EDEEFF;
  width: calc(100% - 40px);
  
`;



//---------여기서 부터 새로운 디자인---------

//----------------Header--------------
export const HeaderBar = styled.div`
display: flex;
width: 100vw;
height: 123px;

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

export const HeaderTitle = styled.button`
color: #000;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: normal;
white-space : nowrap;
  background-color:inherit;
border:none;
`;

export const HeaderMenu = styled.div`
display: flex;
align-items: center;
gap: 360px;  
`;

export const HeaderMenuText = styled.button`
color: #000;
font-size: 30px;
font-style: normal;
font-weight: 400;
line-height: normal;
white-space : nowrap;
background-color:inherit;
border:none;
`;


//------------------공통-----------------
export const DecorationBarRight = styled.div`
  display: flex;
  width: 100%;
  height: 375px;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0px 100px 100px 0px;
  background: conic-gradient(from -90deg at 0% 56.43%, rgba(116, 127, 211, 0.60) 0deg, rgba(196, 199, 236, 0.60) 360deg);
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
z-index: 5;
`;


export const DecorationBarRightText = styled.div`
color: #FFF;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.50);
font-size: 60px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-right:74px;
`;


export const DecorationBarLeft = styled(DecorationBarRight)`
 border-radius: 100px 0px 0px 100px;
  justify-content: flex-start;
`;
export const DecorationBarLeftText = styled(DecorationBarRightText)`
margin-left:64px;
`;

export const TitleText = styled.div`
color: #FFF;
text-align: center;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.50);
font-size: 55px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-top:35px;
`;

export const NormalText = styled.div`
margin-top:11px;
margin-bottom:28px;
color: #000;
font-size: 25px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

export const BigSubmitButton = styled.button`
display: flex;
width: 1100px;
height: 70px;
justify-content: center;
align-items: center;
gap: 47px;
flex-shrink: 0;
border-radius: 15px;
background: var(--400, #5562CA);
font-size: 35px;
font-style: normal;
font-weight: 700;
line-height: normal;
color:#fff;
margin-left: 51px;
`;

export const ContentContainer = styled.div`
display:flex
width: 1300px;
height: 743px;
flex-shrink: 0;
border-radius: 30px;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
background: var(--light, #EDEEFF);
`;

export const MultiPayContainerRight = styled.div`
 flex-grow: 1;
display:flex;
align-items:center;
flex-direction:column;
height: 957px;
border-radius: 0px 100px 100px 0px;
box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.25);
background: conic-gradient(from -90deg at 0% 56.43%, #747FD3 0deg, #C4C7EC 360deg);
z-index: 10;
min-width: 1400px;
`;


export const MultiPayContainerLeft = styled(MultiPayContainerRight)`
border-radius: 100px 0px 0px 100px;


`;

export const MainBackground = styled.div`
  display: flex;
  width: 100%;
  height:1000px;

  align-items: center;
  justify-content: center;

`;

export const LoginInputContainer = styled.div`
display: flex;
width: 600px;
height: 85px;
padding: 28px 36px;
align-items: center;
gap: 45px;
flex-shrink: 0;
border-radius: 15px;
background: #FFF;
`;
export const IDText = styled.div`
color: #062C53;
text-align: center;
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;

export const LoginInput = styled.input`
color: #062C53;
font-size: 30px;
font-style: normal;
font-weight: 400;
line-height: normal;
border:none;
font-family: sans-serif;
width:100%;
`;


export const LoginButton = styled.button`
display: flex;
width: 600px;
height: 85px;
padding: 28px 36px;
justify-content: center;
align-items: center;
gap: 45px;
flex-shrink: 0;
border-radius: 15px;
background: var(--400, #5562CA);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

color: #FFF;
text-align: center;
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;

export const TextInputContainer = styled.div`
display: flex;
width: 80%px;
padding: 38px 50px;
justify-content: space-between;
align-items: center;
gap: 10px;
border-radius: 30px;
background: var(--light, #EDEEFF);
`;
export const TextInput = styled.input`
background-color:inherit;
border:none;
color: black;
font-size: 30px;
font-style: normal;
font-weight: 400;
line-height: normal;
width:900px;
`;


export const InputSubmitButton = styled.button`
display: flex;
width: 163px;
height: 60px;
padding: 8.348px 26.087px;
justify-content: center;
align-items: center;
gap: 5.217px;
flex-shrink: 0;
border-radius: 15px;
background: var(--400, #5562CA);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
color: var(--Purple-Light, var(--light, #EDEEFF));
font-family: "SEBANG Gothic";
font-size: 25px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;


//------------------MultiPage-----------------

export const TransparentBox = styled.div`
height:10vh;
width:500px;

`;
export const BorderLine = styled.div`
height: 598;
border:2px solid rgba(95, 96, 115, 1);
border-style: dashed;
margin: 0px 22px 0px 22px;
`;


export const InputListContainer = styled.div`
margin-top:19px;
margin-bottom:25px;
margin-left:32px;
margin-right:90px;
height:598px;
display:flex;
`;

export const InputListSmallSection = styled.div`
height:100%;

`;

export const InputListHeader = styled.div`
display: flex;
width: 270px;
padding: 10px 0px;
justify-content: center;
border-radius: 30px;
background: linear-gradient(180deg, rgba(251, 224, 255, 0.60) 0%, rgba(241, 222, 255, 0.60) 30.5%, rgba(212, 217, 255, 0.60) 100%);
`;

export const InputListLongHeader = styled(InputListHeader)`
display: flex;
width: 830px;
justify-content:start;

padding-top:10px;
padding-bottom:10px;
gap: 340px;

`;

export const InputList = styled.ul`
padding-top:65px;
width: 270px;
height: 476px;
flex-shrink: 0;
border-radius: 30px;
background: #FFF;
display:flex;
flex-direction:column;
`;

export const LongInputList = styled(InputList)`
width: 557px;
margin-left: 22px;
`;

export const InputListItem = styled.div`
list-style-type: none;
margin-left:20px;
height:30px;
width:240px;
align-self: stretch;
color:black;
font-size: 25px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

export const ItemInput = styled.input`
font-size: 25px;
font-style: normal;
font-weight: 400;
line-height: normal;

height:99%;
border: 0px;
border-bottom: 1.5px solid black;
widht:240px;
`;

export const LongInputListItem = styled(InputListItem)`

width:505px;

`;


export const PayerContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
width: 509px;
height: 68px;
border-radius: 15px;
background: var(--light, #EDEEFF);
`;



//드롭다운
export const DropdownContainer = styled.div`
  position: relative;
  width: 300px;
      margin: 31px 0px 35px 0px;
`;

export const DropdownButton = styled.div`
  background: #E6E9FD;
  border-radius: 20px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  color: #4D4D4D;
`;

export const DropdownIcon = styled.span`
  margin-left: 10px;
`;

export const DropdownList = styled.ul`
  background: #FFFFFF;
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  margin-top: 5px;
  padding: 10px 0;
  list-style: none;
  max-height: 150px;
  overflow-y: auto;
  position: absolute;
  width: 100%;
  z-index: 1000;
`;

export const DropdownListItem = styled.li`
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background: #F0F0F0;
  }
`;