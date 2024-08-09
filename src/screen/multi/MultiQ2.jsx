import { useNavigate } from 'react-router-dom';
import { setPayerNames } from '../../store/multiPaySlice';
import { useDispatch, useSelector } from 'react-redux';
import { SinglePageContainer, QuestionContainer, LeftArrowButton, RightArrowButton, Input, SingleQ1Box, SinglePageTitle, SingleText1 } from '../../styles/styledComponents';
import { useState } from 'react';

export default function MultiQ2() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { payerNames } = useSelector((state) => state.multiPay);
  const [inputValue, setInputValue] = useState(payerNames.join(','));


  // 입력시 호출 함수 
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // 공백 확인 함수
  const isInputValid = () => {
    const namesArray = inputValue.split(',').map(name => name.trim());
    return namesArray.length > 0 && namesArray.every(name => name !== '');
  };

  // 유효성 검사를 통과하면 다음 페이지로 이동
  const handleNextClick = () => {

    if (isInputValid()) {
      console.log(1234);
      const namesArray = inputValue.split(',').map(name => name.trim());
      dispatch(setPayerNames(namesArray));
      //navigate('/MultiQ3');
    }
  };

  // 이전 페이지로 이동
  const handleBackClick = () => {
    navigate('/MultiQ1');
  };

  return (
    <SinglePageContainer>
      <SinglePageTitle>여러명 전산하기</SinglePageTitle>

      <QuestionContainer>
        <LeftArrowButton onClick={handleBackClick} />

        <SingleQ1Box>
          <SingleText1>Q.정산에 참여하는 인원의 이름을 모두 작성해주세요</SingleText1>
          <Input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="','으로 구분하니 유의해주시길 바랍니다."
          />
        </SingleQ1Box>

        <RightArrowButton
          type="button"
          disabled={!isInputValid()}
          onClick={handleNextClick}
        />
      </QuestionContainer>
    </SinglePageContainer>
  );
}