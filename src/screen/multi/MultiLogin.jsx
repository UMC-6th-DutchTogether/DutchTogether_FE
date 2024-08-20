import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setMeetingNum } from '../../store/multiPaySlice';
import {
  DecorationBarLeft,
  DecorationBarLeftText,
  MultiPayContainerLeft,
  TitleText,
  NormalText,
  TransparentBox,
  MainBackground,
  LoginInput,
  LoginInputContainer,
  IDText,
  ErrorConatiner,
  ErrorMessage,
  NextButton,
  SingleLoginInputContainer
} from '../../styles/styledComponents';

export default function MultiLogin() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const idChange = (event) => {
    setId(event.target.value);
  };

  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  // PW 유효성 검사 함수
  const validatePassword = (password) => {
    // if (password.length === 0) return '비밀번호를 입력해주세요!';
    // if (password.length < 8) return '비밀번호는 8자리 이상이어야 합니다!';
    // if (password.length > 16) return '비밀번호는 16자리 이하이어야 합니다!'; // 이 부분은 제거해도 됨
    // const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@#$!%*?&]*$/;
    // if (!passwordPattern.test(password)) return '비밀번호는 영어와 숫자를 모두 포함해야 합니다!';
    return '';
  };

  // ID 유효성 검사
  const validateId = (id) => {
    if (id.trim() === '') return 'ID를 입력해주세요!';
    return '';
  };


  //제출함수
  const handleSubmit = async () => {
    setLoading(true);
    // 유효성 검사
    const idError = validateId(id);
    const passwordError = validatePassword(password);

    if (id.trim() === '' || password.trim() === '') {
      setLoading(false);
      alert('아이디와 비밀번호를 모두 입력해주세요!');
      return;
    }

    try {
      // 회원가입 API 요청
      const response = await axios.post('https://umc.dutchtogether.com/api/meetings/', {
        meetingId: id,
        password: password,
        name: 'UserName'
      });
      if (response.status === 200) {
        navigate('/MultiQ1');
        console.log(response);
        dispatch(setMeetingNum(response.data.data.meetingNum));

      } else {
        setError('중복된 아이디 입니다.');
        //console.log(response);
      }
    } catch (err) {
      setError('중복된 아이디 입니다.');
      console.error(err);
      //console.log(response);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainBackground>
      <DecorationBarLeft>
        <DecorationBarLeftText>같이 계산해요! </DecorationBarLeftText>
      </DecorationBarLeft>

      <TransparentBox />

      <MultiPayContainerLeft style={{ alignItems: "center", gap: '35px' }}>
        <TitleText style={{ marginTop: "98px" }}>Sign-up</TitleText>

        <NormalText style={{ color: "#FFF" }}>(추후 ID, PW 찾기는 불가능하기때문에 정보를 기억해주세요.)</NormalText>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>

          <SingleLoginInputContainer>
            <IDText>ID</IDText>
            <LoginInput type="text" placeholder="ID" value={id} onChange={idChange}></LoginInput>
          </SingleLoginInputContainer>

          <ErrorConatiner>
            {id && <ErrorMessage>{validateId(id)}</ErrorMessage>}
          </ErrorConatiner>

          <SingleLoginInputContainer>
            <IDText>PW</IDText>
            <LoginInput type="password" placeholder="PW" value={password} onChange={passwordChange}></LoginInput>
          </SingleLoginInputContainer>

          <ErrorConatiner>
            {password && <ErrorMessage>{validatePassword(password)}</ErrorMessage>}
          </ErrorConatiner>

          <NextButton onClick={handleSubmit} > 정산 페이지 만들기</NextButton>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </div>
      </MultiPayContainerLeft>

    </MainBackground >
  )
}