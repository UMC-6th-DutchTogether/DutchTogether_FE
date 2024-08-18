import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setMeetingNum } from '../../store/singlePaySlice';
import { SyncLoader } from "react-spinners";
import {
  SinglePageContainer,
  LoginConatiner,
  TextContainer,
  LoginInput,
  NextButton,
  ErrorMessage,
  SingleText1,
  SingleText2,
  ErrorConatiner,
  LoadingConatiner,
  DecorationBarRight,
  DecorationBarRightText,
  IDText,
  SingleLoginInputContainer
} from '../../styles/styledComponents';

export default function SingleLogin() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // 로컬 스토리지에서 meetingNum을 가져와 리덕스에 설정
    const storedMeetingNum = localStorage.getItem('meetingNum');
    if (storedMeetingNum) {
      dispatch(setMeetingNum(storedMeetingNum));
    }
  }, [dispatch]);

  const idChange = (event) => {
    setId(event.target.value);
  };

  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  // PW 유효성 검사 함수
  const validatePassword = (password) => {
    if (password.length === 0) return '비밀번호를 입력해주세요!';
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

    if (id.trim() === '' || password.trim() === '') {
      setLoading(false);
      alert('아이디와 비밀번호를 모두 입력해주세요!');
      return;
    }

    try {
      const response = await axios.post('https://umc.dutchtogether.com/api/meetings/', {
        meetingId: id,
        password: password,
      });

      if (response.status === 200) {
        const meetingNum = response.data.data.meetingNum;
        dispatch(setMeetingNum(meetingNum));

        // 로컬 스토리지에 meetingNum 저장
        localStorage.setItem('meetingNum', meetingNum);

        navigate('/SingleQ1');
        console.log('응답:', response);
      } else {
        setError('회원가입에 실패했습니다.');
        console.log('응답 오류:', response);
      }
    } catch (err) {
      // 요청 중 오류가 발생한 경우
      setError('회원가입 요청 중 오류가 발생했습니다.');
      console.error('요청 오류:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SinglePageContainer>
      {loading && (
        <LoadingConatiner>
          <SyncLoader />
        </LoadingConatiner>
      )}

      <DecorationBarRight>
        <DecorationBarRightText>혼자 계산해요!</DecorationBarRightText>
      </DecorationBarRight>


      <LoginConatiner>
        <TextContainer>
          <SingleText1>Log-In</SingleText1>
          <SingleText2>(추후 ID, PW 찾기는 불가능하기때문에 정보를 기억해주세요.)</SingleText2>
        </TextContainer>

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

          <NextButton onClick={handleSubmit} > 나만 정산하기 페이지 만들기</NextButton>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </div>
      </LoginConatiner>
    </SinglePageContainer>
  );
}
