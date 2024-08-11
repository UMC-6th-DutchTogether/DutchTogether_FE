import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SinglePageContainer, QuestionContainer, LeftArrowButton, RightArrowButton, Input, SingleQ1Box, SinglePageTitle, SingleText1, ErrorMessage } from '../../styles/styledComponents';
import { useState } from 'react';
import axios from 'axios';
import { setPayers } from '../../store/multiPaySlice';

export default function MultiQ2() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { payers, meetingNum } = useSelector((state) => state.multiPay);
  const [inputValue, setInputValue] = useState(payers.map(payer => payer.name).join(',')); // 기존의 payerNames를 기반으로 초기값 설정
  const [error, setError] = useState(''); // 에러 메시지 상태 
  const [loading, setLoading] = useState(false); // 로딩 상태 

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
      setLoading(true); // 로딩 시작
      const namesArray = inputValue.split(',').map(name => name.trim());
      const newPayers = namesArray.map(name => ({ id: Date.now() + Math.random(), name, bankName: '', accountNumber: '' })); // payer 객체 배열 생성

      try {
        const response = await axios.post('https://umc.dutchtogether.com/api/payers/', {
          payerNames: newPayers.map(payer => ({ name: payer.name })),
          meetingNum: meetingNum,
        });

        if (response.status === 200) {
          console.log(response);
          const receivedPayers = response.data.data.payers;

          // 새로 받은 payerId로 newPayers 업데이트
          const updatedPayers = newPayers.map((payer, index) => ({
            ...payer,
            id: receivedPayers[index].payerId
          }));

          // Redux에 업데이트된 payers 저장
          dispatch(setPayers(updatedPayers));

          navigate('/MultiQ3'); // 성공 시 다음 페이지로 이동
        } else {
          setError('데이터 전송에 실패했습니다.');
        }
      } catch (err) {
        setError('요청 중 오류가 발생했습니다.');
        console.error(err);
      } finally {
        setLoading(false); // 로딩 종료
      }
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
          disabled={!isInputValid() || loading} // 로딩 중일 때 버튼 비활성화
          onClick={handleNextClick}
        />

        {error && <ErrorMessage>{error}</ErrorMessage>} {/* 에러 메시지 표시 */}

      </QuestionContainer>
    </SinglePageContainer>
  );
}