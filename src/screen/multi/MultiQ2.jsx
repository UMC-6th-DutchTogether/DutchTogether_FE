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
  const [error, setError] = useState(''); // 에러 메시지 상태 


  // 입력시 호출 함수
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // 공백 확인 함수
  const isInputValid = () => {
    const namesArray = inputValue.split(',').map(name => name.trim());
    return namesArray.length > 0 && namesArray.every(name => name !== '');
  };

  //링크 get함수
  const getLink = async () => {
    console.log(meetingNum)
    try {
      const response = await axios.get(`https://umc.dutchtogether.com/api/meetings/${meetingNum}/link`)
      if (response.status == 200) {
        console.log(response.data);
      } else {
        console.log(response);
        setError('링크를 받는데 실패했습니다.')
      }
    } catch (err) {
      console.log(response);
      setError('링크요청 중 오류가 발생했습니다.');
      console.log(err);
    }
  }



  // 유효성 검사를 통과하면 다음 페이지로 이동
  const handleNextClick = async () => {
    //meetingNum에 대한 링크 받기
    getLink();

    if (isInputValid()) {
      const namesArray = inputValue.split(',').map(name => name.trim());
      const newPayers = namesArray.map(name => ({ name, id: " " })); // payer 객체 배열 생성

      try {
        const response = await axios.post('https://umc.dutchtogether.com/api/payers/', {
          payerNames: newPayers.map(payer => ({ name: payer.name })),
          meetingNum: meetingNum,
        });

        if (response.status === 200) {
          console.log(response);
          const receivedPayers = response.data.data.payers;
          if (!receivedPayers || receivedPayers.length !== newPayers.length) {
            setError('API 응답이 payer의 수와 일치하지 않습니다.');
            return;
          }

          // 새로 받은 payerId로 newPayers 업데이트
          const updatedPayers = newPayers.map((payer, index) => {
            if (receivedPayers[index] && receivedPayers[index].payerId) {
              return {
                ...payer,
                id: receivedPayers[index].payerId
              };
            } else {
              // payerId가 누락된 경우 처리
              setError(`payerId가 누락되었습니다.`);
              return payer;
            }
          });
          // Redux에 업데이트된 payers 저장
          dispatch(setPayers(updatedPayers));

          navigate('/MultiQ3'); // 성공 시 다음 페이지로 이동
        } else {
          setError('데이터 전송에 실패했습니다.');
        }
      } catch (err) {
        setError('요청 중 오류가 발생했습니다.');
        console.error(err);
      }
    }
  };



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