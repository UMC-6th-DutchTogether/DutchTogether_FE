import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setMeetingNum } from '../../store/singlePaySlice';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;

const Input = styled.input`
  margin: 20px;
  padding: 20px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default function SettlerCheckLogin() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
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
                navigate('/SingleSettlerStatus');
            } else {
                setErrorMessage('로그인 실패: ' + response.data.message);
            }
        } catch (err) {
            console.error('로그인 요청 중 오류가 발생했습니다.', err);
            setErrorMessage('로그인 요청 중 오류가 발생했습니다.');
        }
    };

    return (
        <FormContainer>
            <h1>LOG-IN</h1>
            <h3 style={{ paddingBottom: "50px" }}>정산 현황 확인을 위해 ID와 PW를 입력해주세요.</h3>
            <Input
                type="text"
                placeholder="ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleLogin}>로그인</Button>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </FormContainer>
    );
}
