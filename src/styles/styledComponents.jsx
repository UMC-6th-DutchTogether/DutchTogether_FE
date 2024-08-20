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
  max-width: 100vw;
  min-height: 1080px;
  padding-top: 352px;
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

export const LargeButtonLeft = styled.button`
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  width: ${({ isClicked }) => (isClicked ? '100vw' : '26vw')};
  height: 375px;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0px 100px 100px 0px;
  background: conic-gradient(from -90deg at 0% 56.43%, rgba(116, 127, 211, 0.60) 0deg, rgba(196, 199, 236, 0.60) 360deg);
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 50%;
  transform: translate(0%, -50%);
  transition: width 0.6s ease-in-out;  /* 너비 변화에 애니메이션 추가 */
  z-index: 5;
  border: none; 
  cursor: pointer;
`;

export const LargeButtonRight = styled(LargeButtonLeft)`
  border-radius: 100px 0px 0px 100px;
  justify-content: flex-start;
  right: 0; 
`;


export const Logo = styled.img`
  min-width: 662px;
  object-fit: contain;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`;

export const FooterCon = styled.div`
  width: 95vw;
  display: flex;
  align-items: center;
  margin-top: 370px;
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
align-items:center;
flex-direction: column;
border-radius: 0px 100px 100px 0px;
box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.25);
background: conic-gradient(from -90deg at 0% 56.43%, #747FD3 0deg, #C4C7EC 360deg);
z-index: 10;
min-width: 1400px;
min-height: 775px;
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
  margin-bottom:20px;
  width: 100%
  
`;

export const CreateLinkContainer = styled.div`
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 75%;
  min-width:800px;
  height: 400px;
  padding: 100px;
  border-radius: 50px;
  background-color: var(--light, #EDEEFF);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  `;

export const SingleLinkTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 10px;
  margin-bottom: 20px;
`;

export const SingleLinkText = styled.p`
color: var(--light-text, #5F6073);
text-align: center;
font-size: 30px;
font-style: normal;
font-weight: 400;
line-height: 180%;
`;

export const SingleLinkTitle = styled.h2`
  font-size: 50px;
  font-weight: 600;
  color: white;
  margin-bottom: 30px;
`;

export const NewSingleLink = styled.div`
border-radius: 15px;
background: #FFF;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
display: flex;
width: 970px;
padding: 32.5px 39.5px 31.5px 41px;
justify-content: center;
align-items: center;
font-size: 36px;
gap: 10px;
margin-bottom: 40px;
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
border-radius: 0px 100px 100px 0px;
box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.25);
background: conic-gradient(from -90deg at 0% 56.43%, #747FD3 0deg, #C4C7EC 360deg);
z-index: 10;
min-width:1400px;
min-height: 775px;
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
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.50);
`;
export const SingleText2 = styled.h2`
  font-size: 20px;
  font-weight: 400;
  color:${INDIGO};
  margin-bottom: 8px;
`;

export const NextButton = styled.button`
  margin: 40px 0;
  padding: 30px 60px;
  width: 775px;
  height: 80px;
  max-width: 900px;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: none;
  font-size:25px;
   &:hover {
    background-color: rgba(0,0,0,0.1);
  }
  background: var(--400, #5562CA);
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
  min-height: 775px;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 75%;
  min-width:800px;
  height: 530px;
  padding: 100px;
  border-radius: 50px;
  background-color: var(--light, #EDEEFF);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
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
  margin: 50px;
  min-width:800px;
  color: #FFF;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.50);
  font-size: 55px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const SingleQA = styled.div`
  width: 1150px;
  justify-content: flex-start;
  padding-top: 30px;
`;

export const SingleQ = styled.div`
color: var(--text, #323232);
font-size: 25px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-bottom: 10px;
`;

export const SingleA = styled.div`
  display: flex;
  height: 30px;
  padding: 12px 22px;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  font-size: 21px;
  border-radius: 15px;
  background: #FFF;
  margin-bottom: 25px;
`;
export const LongSingleA = styled(SingleA)`
  width: 470px;
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
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
height:70px;
font-size:28px;
padding: 0;
margin: 0;
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
  border-radius: 30px 30px 0px 0px;
box-shadow: 5px -15px 30px 0px rgba(0, 0, 0, 0.15);
`;



export const MeetingDetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: linear-gradient(0deg, rgba(250, 241, 249, 0.90) 0%, rgba(250, 241, 249, 0.90) 100%);
  background-size: cover;
  background-blend-mode: multiply; /* 또는 다른 blend mode */
  padding: 70px 200px 80px 200px;
  border-radius: 15px;
  box-shadow: 0px 4px 45px 0px rgba(0, 0, 0, 0.40);
  width: 1186px;
  height: 564px;
  margin: 0 0 0 100px;
  
  color: var(--light-text, #5F6073);
  text-align: center;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
`;

export const FinalAmountText = styled.p`
  font-size: 100px;
  font-weight: 600;
  color: var(--text, #323232);
  margin-bottom: 50px;
  padding: 30px;
`;


export const BankSelect = styled.select`
  font-size: 20px;
  padding: 10px 20px;
  border-radius: 15px;
  background: var(--light, #EDEEFF);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: none;
  color: var(--light-text, #5F6073);
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
  padding: 50px 0px 50px 100px;
  color: var(--text, #323232);
  font-size: 35px;
  font-weight: 700;
`;

export const MeetingNameText1 = styled.div`
display: flex;
padding: 12px 60px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 15px;
background: var(--light, #EDEEFF);
color: var(--text, #323232);
font-size: 45px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;

export const MeetingNameText2 = styled.p`
color: #FFF;

text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.50);
font-size: 45px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-top: 20px;
`;

export const SingleDetailText = styled.p`
  font-size: 34px;
  font-weight: 600;
  color: var(--text, #323232);
  margin-bottom: 40px;
`;

export const SingleDetailText1 = styled.p`
  color: var(--text, #323232);
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 30px;
`;


export const Transferbutton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 100px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-size: 20px;
  background: var(--light, #EDEEFF);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: var(--light-text, #5F6073);
  &:hover {
    background-color: darken(${INDIGO}, 10%);
  }
`;

export const ReceiptBox = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: linear-gradient(0deg, rgba(250, 241, 249, 0.90) 0%, rgba(250, 241, 249, 0.90) 100%);
  background-size: cover;
  background-blend-mode: multiply; /* 또는 다른 blend mode */
  border-radius: 15px;
  border: none;
  box-shadow: 0px 4px 45px 0px rgba(0, 0, 0, 0.40);
  width: 30%;
  padding: 50px;
  margin: 0 100px 0 100px;
`;

import MeetingDetailImage from '../assets/MeetingDetail.png';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: url(${MeetingDetailImage}) no-repeat center center;
  background-size: cover;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  transition: opacity 0.7s ease, visibility 0.7s ease;
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
  height: 300px;
  width: 1000px;
  cursor: pointer;
  transition: scale 0.2s ease-in-out;

  &:hover {
    scale: 1.05;
  }
`;

//----------------MeetingCheck--------------

export const CompleteButton = styled.img`
  cursor: pointer;
  font-size: 15px;
  margin: 40px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  border: ${({ isCompleted }) => (isCompleted ? '3px solid #000' : 'none')};
  border-radius: 13px;
  transition: transform 0.2s ease; 

  &:hover {
    transform: scale(1.05);
  }
`;

export const UnCompletedButton = styled.img`
  cursor: pointer;
  font-size: 15px;
  margin: 40px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  border-radius: 13px;
  transition: transform 0.2s ease; 

  &:hover {
    transform: scale(1.05);
  }
`;


export const CompleteNameButton = styled.button`
  padding: 15px 30px;
  margin: 0px 20px;
  border: none;
  border-radius: 15px;
  background: var(--400, #5562CA);
  color: white;
  cursor: pointer;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
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
  padding: 10px 30px;
  margin: 35px;
  background: var(--light, #EDEEFF);
  border-radius: 15px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const SingleNameInput = styled.input`
  flex: 1;
  border: none;
  border-radius: 20px;
  padding: 20px 180px 20px 10px;
  background-color: #EDEEFF;
  width: calc(100% - 40px);
  font-size: 20px;
`;

//----------------MultiGetLink-------------------
export const MultiMeetingDetailInfo = styled.div`
width: 100%;
min-width: 1400px;
height: 704px;
flex-shrink: 0;
border-radius: 15px;
background: linear-gradient(0deg, rgba(250, 241, 249, 0.90) 0%, rgba(250, 241, 249, 0.90) 100%);

box-shadow: 0px 4px 45px 0px rgba(0, 0, 0, 0.40);
`;

export const MultiMeetingDetailHeader = styled.div`
color: #FFF;
text-align: center;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.50);
font-size: 55px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;
export const PayersContainer = styled.div`
display: flex;
padding: 19px 50px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 15px;
background: var(--light, #EDEEFF);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

color: var(--text, #323232);
font-size: 25px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

export const MeetingDetailMeetingName = styled.div`
display: flex;
padding: 12px 60px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 15px;
background: var(--light, #EDEEFF);
color: var(--text, #323232);
font-size: 55px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;


export const MultiGetLinkHeader = styled.div`
color: #323232;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
font-size: 70px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;

export const MultiMeetingDetailContainer = styled.div`
width: 1200px;
height: 579px;
border-radius: 15px;
background: linear-gradient(0deg, #FFFDFF 0%, #FFFDFF 100%);
box-shadow: 0px 4px 45px 0px rgba(0, 0, 0, 0.40);
padding:27px 20px 20px 20px;
`;


export const RowItemHeader = styled.div`
display: inline-flex;
flex:1;
height:50px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 30px;
background: linear-gradient(180deg, rgba(251, 224, 255, 0.60) 0%, rgba(241, 222, 255, 0.60) 30.5%, rgba(212, 217, 255, 0.60) 100%);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
color: var(--text, #323232);
text-align: center;
font-size: 25px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin:10px;
`;

export const LongRowItemHeader = styled(RowItemHeader)`
flex:2;
`;


export const SettlementRow = styled.div`
color: var(--text, #323232);
text-align: center;
font-size: 25px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

export const Column = styled.div`
flex:1;
color: var(--text, #323232);
text-align: center;
justify-content:center;
font-size: 25px;
font-style: normal;
font-weight: 400;
line-height: normal;
display:flex;
border: 1px solid black;
margin:10px;
`;

export const LongColumn = styled.div`
margin:10px;
flex:2;
color: var(--text, #323232);
text-align: center;
justify-content:space-between;
font-size: 25px;
font-style: normal;
font-weight: 400;
line-height: normal;
display:flex;
border: 1px solid black;
`;

export const TransferButton = styled.div`
display: flex;
height: 17px;
width:58px;
padding: 5px 20px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 15px;
background: var(--400, #5562CA);
color: var(--Purple-Light, var(--light, #EDEEFF));
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;

export const BigNextButton = styled.button`
display: flex;
width: 1223px;
height: 65px;
padding: 15px 50px;
justify-content: center;
align-items: center;
gap: 47px;
flex-shrink: 0;
border-radius: 15px;
background: var(--400, #5562CA);
color: var(--Purple-Light, var(--light, #EDEEFF));
font-size: 35px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;



//----------------SingleSettlementStatus--------------

export const PayerButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap; /* Allows wrapping if there are too many buttons */
    gap: 10px; /* Spacing between buttons */
    margin-right: 20px;
`;

export const PayerButton = styled.div`
    cursor: pointer;
    padding: 10px 20px;
    background: var(---light, #EDEEFF);
    border: 1px solid #ddd;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #e0e0e0;
    }
`;



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
  z-index: 5;
  top: 39%;

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

export const ReceiptContainer = styled.div`
color: #FFF;
text-align: center;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.50);
font-size: 55px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin:20px;
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

border-radius: 30px;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
background: var(--light, #EDEEFF);
`;

export const MultiPayContainerRight = styled.div`
 flex-grow: 1;
display:flex;
align-items:center;
flex-direction:column;
min-height: 910px;
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
background: #EDEEFF;
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
height:50px;
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
border: none;
background: var(--400, #5562CA);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
color: var(--Purple-Light, var(--light, #EDEEFF));
font-size: 25px;
font-style: normal;
font-weight: 700;
line-height: normal;
cursor: pointer;
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

export const Itemselect = styled.select`
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

//CreateLink
export const LinkTextContainer = styled.div`
color: var(--light-text, #5F6073);
text-align: center;
font-size: 30px;
font-style: normal;
font-weight: 400;
line-height: 180%; 
margin-top:130px;
`;

export const LinkContainer = styled.div`
display: flex;

width:970px;
padding: 32.5px 39.5px 31.5px 41px;
justify-content: space-between;
align-items: center;
border-radius: 15px;
background: #FFF;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
margin:70px 164px 0px 164px;
`;
export const LinkText = styled.div`
color: #000;
text-align: center;
font-size: 30px;
font-style: normal;
font-weight: 400;
line-height: normal;
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


//------------------StatusPage-----------------

export const SlideUpContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: auto;
  height: 85%;
  background: linear-gradient(90deg, rgba(166, 171, 217, 0.97) 0%, #747FD3 153.61%);
  border-radius: 50px 50px 0 0;
  box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.1);
  display: block;
  background-color: #A6C1FF;
  z-index: 10;
  left: 0;
  right: 0;
`;

export const ContentCon = styled.div`
  padding: 60px;
`;

export const StatusContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const MeetingName = styled.h1`
  font-size: 58px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 20px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.50);
`;

export const StatsContainer = styled.div`
  width: 18vw;
  height: 54vh;
  flex-shrink: 0;
  border-radius: 30px;
  background: var(--light, #EDEEFF);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-top: 10px;
  padding: 30px;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
`;

export const StatsTopBox = styled.div`
  display: flex;
  text-align: center;
`;

export const StatsBottomBox = styled.div`
  text-align: center;
  margin: 80px;
`;

export const StatBox = styled.div`
  display: flex;
  width: 10vw;
  padding: 10px 0 0 0;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  border-radius: 15px;
  background: #FFF;
  margin: 10px;
`;

export const StatTitle = styled.p`
  font-size: 34px;
  margin: 0;
  margin-bottom: 10px;
`;

export const StatNumber = styled.p`
  color: #5F6073; 
  text-align: center;
  text-shadow: 
    0px 4px 4px rgba(0, 0, 0, 0.25), 
    0px 0px 15px rgba(255, 255, 255, 0.5);
  
  -webkit-text-stroke-width: 4px; /* Stroke width for the outline */
  -webkit-text-stroke-color: #e1c6f1; /* Closest solid color approximation */
  background: linear-gradient(180deg, rgba(251, 224, 255, 0.60) 0%, rgba(241, 222, 255, 0.60) 30.5%, rgba(212, 217, 255, 0.60) 100%);
  -webkit-background-clip: text;

  font-family: "SEBANG Gothic";
  font-size: 130px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  display: inline-block;
  margin: 0;
`;

export const SettlerContainer = styled.div`
  width: 67vw;
  height: 54vh;
  flex-shrink: 0;
  border-radius: 30px;
  background: var(--light, #EDEEFF);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-top: 10px;
  padding: 30px;
  justify-content: flex-end;
  align-items: center;
  text-align: center;b
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const SearchInput = styled.input`
  width: 65vw;
  border-radius: 10px 0 0 10px ;
  border: none;
  font-size: 27px;
  padding: 15px;
`;

export const SearchButtonCon = styled.div`
  padding: 8px 30px;
  border: none;
  background-color: #fff; 
  border-radius: 0 10px 10px 0;
`;

export const SearchButton = styled.button`
  padding: 8px 15px;
  width: 8vw;
  font-size: 21px;
  background-color: #5a67d8; 
  color: white; 
  border: none;
  border-radius: 10px; 
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const TableContainer = styled.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 20px;
  text-align: left;
  width: 65vw;
  height: 40vh;
  margin: 0 auto;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  font-weight: bold;
  font-size: 25px;
`;

export const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  font-size: 20px;
`;

export const NameColumn = styled.p`
  width: 50%;
  margin: 0;
`;

export const TimeColumn = styled.p`
  width: 50%;
  margin: 0;
  text-align: right;
`;
