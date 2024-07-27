import { useState } from "react"
import { Link } from 'react-router-dom';
import { SLoginContainer, SLoginBox, SLoginTitle, TextContainer, Input, Button, ErrorMessage } from '../../styles/styledComponents'



export default function SingleLogin() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState("");

  const idChange = (event) => {
    setId(event.target.value);
  };

  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  const validatePassword = (password) => {
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,12}$/;
    return passwordPattern.test(password);
  };

  const isFormValid = () => {
    return (
      id.trim() !== '' &&
      password.trim() !== '' &&
      password.length >= 4 &&
      password.length <= 12 &&
      validatePassword(password)
    );
  };

  return (
    <SLoginContainer>
      <SLoginTitle>나만 정산하기</SLoginTitle>
      <SLoginBox>
        <TextContainer>
          <p>정산 현황을 확인하고 싶다면 ID, PW를 입력해주세요.</p>
          <p>(추후 ID, PW 칮기는 불가능하기때문에 정보를 기억해주세요.)</p>
        </TextContainer>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Input type="text" placeholder="ID" value={id} onChange={idChange}></Input>
          {id === '' && <ErrorMessage>ID를 입력해주세요!</ErrorMessage>}

          <Input type="password" placeholder="PW" value={password} onChange={passwordChange}></Input>
          {password === '' && <ErrorMessage>비밀번호를 입력해주세요!</ErrorMessage>}
          {password !== '' && password.length < 4 && <ErrorMessage>비밀번호는 4자리 이상이어야 합니다!</ErrorMessage>}
          {password !== '' && password.length > 12 && <ErrorMessage>비밀번호는 12자리 이하이어야 합니다!</ErrorMessage>}
          {password !== '' && !validatePassword(password) && password.length >= 4 && password.length <= 12 && <ErrorMessage>비밀번호는 영어, 숫자, 특수문자를 모두 포함해야 합니다!</ErrorMessage>}

          <Link to="/SingleQ1">
            <Button type="summit" disabled={!isFormValid()}> 나만 정산하기 페이지 만들기</Button>
          </Link>
        </div>
      </SLoginBox>
    </SLoginContainer >


  )
}