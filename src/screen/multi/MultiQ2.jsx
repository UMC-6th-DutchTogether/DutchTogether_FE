import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  DecorationBarLeft,
  DecorationBarLeftText,
  MultiPayContainerLeft,
  TitleText,
  TransparentBox,
  MainBackground,
  TextInputContainer,
  InputSubmitButton,
  TextInput
} from '../../styles/styledComponents';
import { useState } from 'react';
import axios from 'axios';
import { setPayers, setMeetingLink } from '../../store/multiPaySlice';

export default function MultiQ2() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { payers, meetingNum } = useSelector((state) => state.multiPay);
  const [inputValue, setInputValue] = useState(payers.map(payer => payer.name).join(',')); // 기존의 payerNames를 기반으로 초기값 설정
  //const [error, setError] = useState(''); // 에러 메시지 상태 


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


  const handleNextClick = async () => {
    if (isInputValid()) {
      const inputArray = inputValue.split(',').map(name => name.trim());
      const namesArray = inputArray.map(e => ({ name: e }));//[{name:"이름1"},{name:"이름2"},{name:"이름3"}]

      console.log({
        payerNames: namesArray,
        meetingNum: meetingNum
      });
      try {
        const response = await axios.post('https://umc.dutchtogether.com/api/payers/', {
          payerNames: namesArray,
          meetingNum: meetingNum,
        });
        if (response.status == 200) {
          const payersArray = response.data.data.payers// [{payerId:10},{payerId:11},{payerId:12}]
          const combinedArray = namesArray.map((item, index) =>
            ({ ...item, ...payersArray[index] })
          );
          console.log("결제자 이름 제출", response);
          dispatch(setPayers(combinedArray));
          navigate('/MultiQ3');
        }
      } catch (error) {
        console.log(error);
      }

    };
  }



  return (
    <MainBackground>
      <DecorationBarLeft>
        <DecorationBarLeftText>같이 계산해요! </DecorationBarLeftText>
      </DecorationBarLeft>

      <TransparentBox />

      <MultiPayContainerLeft style={{ alignItems: "center", gap: '35px' }}>
        <TitleText style={{ marginTop: "208px", marginBottom: "60px" }}>정산에 참여하는 인원의 이름을 모두 작성해주세요.</TitleText>

        <TextInputContainer>
          <TextInput
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="','으로 구분하니 유의해주시길 바랍니다." />
          <InputSubmitButton
            type="button"
            disabled={!isInputValid()}
            onClick={handleNextClick}>제출하기
          </InputSubmitButton>
        </TextInputContainer>
      </MultiPayContainerLeft>

    </MainBackground >
  );
}
