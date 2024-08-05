import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setMeetingNum } from '../../store/singlePaySlice';
import { SyncLoader } from "react-spinners";
import {
  SinglePageContainer,
  LoginConatiner,
  SinglePageTitle,
  TextContainer,
  LoginInput,
  NextButton,
  ErrorMessage,
  SingleText1,
  SingleText2,
  ErrorConatiner,
  LoadingConatiner
} from '../../styles/styledComponents';

export default function SingleLogin() {
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
    if (password.length === 0) return '비밀번호를 입력해주세요!';
    if (password.length < 8) return '비밀번호는 8자리 이상이어야 합니다!';
    if (password.length > 16) return '비밀번호는 16자리 이하이어야 합니다!'; // 이 부분은 제거해도 됨
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@#$!%*?&]*$/;
    if (!passwordPattern.test(password)) return '비밀번호는 영어와 숫자를 모두 포함해야 합니다!';
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

    if (idError || passwordError) {
      setError(idError || passwordError);
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
        navigate('/SingleQ1');
        console.log(response);
        dispatch(setMeetingNum(response.data.data.meetingNum));

      } else {
        setError('회원가입에 실패했습니다.');
        //console.log(response);
      }
    } catch (err) {
      setError('회원가입 요청 중 오류가 발생했습니다.');
      console.error(err);
      //console.log(response);
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
      <SinglePageTitle>나만 정산하기</SinglePageTitle>
      <LoginConatiner>
        <TextContainer>
          <SingleText1>정산 현황을 확인하고 싶다면 ID, PW를 입력해주세요.</SingleText1>
          <SingleText2>(추후 ID, PW 찾기는 불가능하기때문에 정보를 기억해주세요.)</SingleText2>
        </TextContainer>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>
          <LoginInput type="text" placeholder="ID" value={id} onChange={idChange}></LoginInput>
          <ErrorConatiner>
            {id && <ErrorMessage>{validateId(id)}</ErrorMessage>}
          </ErrorConatiner>

          <LoginInput type="password" placeholder="PW" value={password} onChange={passwordChange}></LoginInput>
          <ErrorConatiner>
            {password && <ErrorMessage>{validatePassword(password)}</ErrorMessage>}
          </ErrorConatiner>

          <NextButton onClick={handleSubmit} disabled={validateId(id) || validatePassword(password)}> 나만 정산하기 페이지 만들기</NextButton>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </div>
      </LoginConatiner>
    </SinglePageContainer>
  );
}