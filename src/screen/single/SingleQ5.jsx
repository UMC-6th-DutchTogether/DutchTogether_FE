import React from 'react';
import { Link } from 'react-router-dom';
import { setNumberOfPeople } from '../../store/singlePaySlice';
import { useDispatch, useSelector } from 'react-redux';
import { SinglePageContainer, QuestionContainer, SinglePageTitle, SingleQ1Box, LeftArrowButton, RightArrowButton, SingleText1, Input } from '../../styles/styledComponents';

export default function SingleQ5() {
  //store 동기화
  const dispatch = useDispatch();
  const { numberOfPeople } = useSelector((state) => state.singlePay);

  // 입력시 호출 함수
  const handleInputChange = (e) => {
    const value = e.target.value;

    // 숫자만 허용하도록 처리하고 NaN 예외 처리
    if (/^\d*$/.test(value)) {
      const numericValue = parseInt(value);

      if (!isNaN(numericValue)) {
        dispatch(setNumberOfPeople(numericValue));
      } else {
        dispatch(setNumberOfPeople(0));
      }
    }
  };

  // 공백 확인 함수
  const isInputValid = () => {
    // numberOfPeople이 숫자가 아닌 경우를 대비하여 처리
    return numberOfPeople !== '' && !isNaN(numberOfPeople);
  };

  return (
    <SinglePageContainer>
      <SinglePageTitle>나만 정산하기</SinglePageTitle>
      <QuestionContainer>
        <Link to="/SingleQ4">
          <LeftArrowButton />
        </Link>

        <SingleQ1Box>
          <SingleText1>Q.몇 명이 정산하나요?</SingleText1>
          <Input type="text" value={numberOfPeople} onChange={handleInputChange} />
        </SingleQ1Box>

        <Link to="/CheckSingleQ">
          <RightArrowButton type="button" disabled={!isInputValid()} />
        </Link>
      </QuestionContainer>
    </SinglePageContainer>
  );
}