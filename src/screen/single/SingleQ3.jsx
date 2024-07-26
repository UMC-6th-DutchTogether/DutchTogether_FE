import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { setAccountHolder } from '../../store/singlePaySlice';
import { useDispatch, useSelector } from 'react-redux';

const SingleLoginContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

const QuestionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 500px;
  background-color: #a7d0f8;
  padding: 20px;
  position: relative;
`;

const SingleLoginTitle = styled.h2`
  padding-top: 50px;
  margin-bottom: 0px;
  text-align: left;
  width: 70%;
`;

const SingleQ1Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 200px;
  justify-content: center;
  height: 100%;
  margin-top: 100px;
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  font-size: 5rem;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const LeftArrowButton = styled(ArrowButton)`
  left: 10px;

  &::before {
    content: "<";
    font-size: 5rem;
    color: white;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; /* 테두리 효과 */
  }
`;

const RightArrowButton = styled(ArrowButton)`
  right: 10px;

  &::before {
    content: ">";
    font-size: 5rem;
    color: white;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; /* 테두리 효과 */
  }
`;

const QuestionText = styled.p`
  font-size: 1.5rem;
  margin: 0 20px;
`;

const Input = styled.input`
  margin: 20px auto 100px auto;
  padding: 10px;
  width: 80%;
  max-width: 400px;
  border: 1px none;
  border-radius: 5px;
`;

export default function SingleQ3() {
  //store 동기화
  const dispatch = useDispatch();
  const { accountHolder } = useSelector((state) => state.singlePay);

  //입력시 호출 함수
  const handleInputChange = (e) => {
    dispatch(setAccountHolder(e.target.value))
  };
  //공백 확인 함수
  const isInputValid = () => {
    return accountHolder.trim() !== '';
  };
  return (
    <SingleLoginContainer>
      <SingleLoginTitle>나만 정산하기</SingleLoginTitle>
      <QuestionContainer>
        <Link to="/SingleQ2">
          <LeftArrowButton />
        </Link>

        <SingleQ1Box>
          <QuestionText>Q.예금주를 입력해주세요.</QuestionText>
          <Input type="text" value={accountHolder} onChange={handleInputChange} />
        </SingleQ1Box>

        <Link to="/SingleQ4">
          <RightArrowButton type="button" disabled={!isInputValid()} />
        </Link>
      </QuestionContainer>
    </SingleLoginContainer>
  );
}
