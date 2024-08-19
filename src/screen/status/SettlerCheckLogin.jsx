import { useState } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setMeetingNum } from '../../store/singlePaySlice';
import {
    TextContainer,
    LoginInput,
    SingleText1,
    SingleText2,
    ErrorConatiner,
    IDText,
    SingleLoginInputContainer
} from '../../styles/styledComponents';

// Slide animation
const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

// Animated container
const SlideUpContainer = styled.div`
  animation: ${({ isVisible }) => (isVisible ? slideUp : 'none')} 0.6s ease-out forwards;
  position: fixed;
  bottom: 0;
  width: auto;
  height: 85%;
  background: linear-gradient(90deg, rgba(166, 171, 217, 0.97) 0%, #747FD3 153.61%);
  border-radius: 50px 50px 0 0;
  box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.1);
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  background-color: #A6C1FF;
  z-index: 10;
  left: 0;
  right: 0;
  text-align: center;
`;

const LoginButton = styled.div`
  margin-top: 50px;
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
  font-size:20px;
   &:hover {
    background-color: rgba(0,0,0,0.1);
  }
  background: var(--400, #5562CA);
`;

export default function SettlerCheckLogin() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isVisible] = useState(true);

    const navigate = useNavigate();
    const dispatch = useDispatch(); // useDispatch 훅 사용

    const handleLogin = async () => {
        try {
            const response = await axios.post('https://umc.dutchtogether.com/api/settlementStatus/login', {
                meetingId: id,
                password: password
            });

            if (response.data.isSuccess) {
                // 로그인 성공 시, 토큰과 meetingNum 저장
                localStorage.setItem('token', response.data.data.token);
                dispatch(setMeetingNum(response.data.data.meetingNum)); // Redux 상태 업데이트
                console.log('Meeting Number:', response.data.data.meetingNum);

                // SinglePayerStatus로 리다이렉트
                navigate('/SettlementStatusSelect');
            } else {
                setErrorMessage('로그인 실패: ' + response.data.message);
                window.alert('로그인 실패: ' + response.data.message);
            }
        } catch (err) {
            console.error('로그인 요청 중 오류가 발생했습니다.', err);
            setErrorMessage('로그인 요청 중 오류가 발생했습니다.');
            window.alert('로그인 실패: 아이디나 비밀번호가 틀렸습니다.');
        }
    };

    return (

        <SlideUpContainer isVisible={isVisible}>

            <TextContainer>
                <SingleText1>Log-In</SingleText1>
                <SingleText2>정산 현황 확인을 위해 ID와 PW를 입력해주세요.</SingleText2>
            </TextContainer>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>

                <SingleLoginInputContainer>
                    <IDText>ID</IDText>
                    <LoginInput type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)}></LoginInput>
                </SingleLoginInputContainer>

                <ErrorConatiner>
                </ErrorConatiner>

                <SingleLoginInputContainer>
                    <IDText>PW</IDText>
                    <LoginInput type="password" placeholder="PW" value={password} onChange={(e) => setPassword(e.target.value)}></LoginInput>
                </SingleLoginInputContainer>

                <LoginButton onClick={handleLogin}> 로그인하기</LoginButton>
            </div>

        </SlideUpContainer>

    );
}
