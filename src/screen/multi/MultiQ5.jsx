import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {
  DecorationBarLeft,
  DecorationBarLeftText,
  MultiPayContainerLeft,
  TitleText,
  NormalText,
  BigSubmitButton,
  ContentContainer,
  TransparentBox,
  MainBackground,
  InputListContainer,
  BorderLine,
  InputListSmallSection,
  InputListHeader,
  InputList,
  InputListLongHeader,
  LongInputList,
  InputListItem,
  LongInputListItem,
  DropdownListItem,
  DropdownList,
  DropdownIcon,
  DropdownButton,
  DropdownContainer
} from '../../styles/styledComponents';
import { updatePayer } from '../../store/multiPaySlice';

export default function MultiQ5() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { payers } = useSelector((state) => state.multiPay);

  // State to manage dropdown open/close and selected payer
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPayer, setSelectedPayer] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectPayer = (payer) => {
    setSelectedPayer(payer.name); // Store the selected payer's name
    setIsOpen(false); // Close the dropdown after selection
  };

  // Local state for input management
  const [localPayers, setLocalPayers] = useState(payers);

  // Functions to handle input changes
  const handleBankNameChange = (e, id) => {
    const updatedPayers = localPayers.map(payer =>
      payer.id === id ? { ...payer, bankName: e.target.value } : payer
    );
    setLocalPayers(updatedPayers);
  };

  const handleAccountNumberChange = (e, id) => {
    const updatedPayers = localPayers.map(payer =>
      payer.id === id ? { ...payer, accountNumber: e.target.value } : payer
    );
    setLocalPayers(updatedPayers);
  };

  const handleSubmit = () => {
    // Update the Redux state with local changes
    localPayers.forEach(payer => {
      dispatch(updatePayer(payer));
    });
    console.log('Submitted Data:', localPayers);
    navigate('/MultiQ4');
  };

  return (
    <MainBackground>
      <DecorationBarLeft>
        <DecorationBarLeftText>같이 계산해요! </DecorationBarLeftText>
      </DecorationBarLeft>

      <TransparentBox />

      <MultiPayContainerLeft>
        <TitleText>정산을 진행해주세요!</TitleText>
        <DropdownContainer>
          <DropdownButton onClick={toggleDropdown}>
            {selectedPayer || '당신은 누구입니까?'}
            <DropdownIcon>{isOpen ? '▲' : '▼'}</DropdownIcon>
          </DropdownButton>
          {isOpen && (
            <DropdownList>
              {payers.map((payer) => (
                <DropdownListItem
                  key={payer.id}
                  onClick={() => handleSelectPayer(payer)}
                >
                  {payer.name}
                </DropdownListItem>
              ))}
            </DropdownList>
          )}
        </DropdownContainer>

        <ContentContainer>
          <InputListContainer>
            <InputListSmallSection>
              <InputListHeader style={{ marginBottom: '32px' }}>결제자</InputListHeader>
              <InputList>
                {localPayers.map((payer, index) => (
                  <InputListItem key={payer.id}>{payer.name}</InputListItem>
                ))}
              </InputList>
            </InputListSmallSection>

            <BorderLine />

            <InputListSmallSection>
              <InputListHeader style={{ marginBottom: '32px' }}>금액</InputListHeader>
              <InputList>
                {localPayers.map((payer, index) => (
                  <InputListItem key={payer.id}></InputListItem>
                ))}
              </InputList>
            </InputListSmallSection>

            <BorderLine />

            <div>
              <InputListLongHeader style={{ marginBottom: '32px', width: '551px' }}>
                <p style={{ marginLeft: '74px' }}>계좌번호 및 송금하기</p>
              </InputListLongHeader>
              <div style={{ display: "flex" }}>

                <LongInputList style={{ marginLeft: '0px' }}>
                  {localPayers.map((payer, index) => (
                    <LongInputListItem key={payer.id}>
                      <input
                        type="text"
                        value={payer.bankName + " " + payer.accountNumber || ''}
                        onChange={(e) => handleAccountNumberChange(e, payer.id)}
                        placeholder="계좌번호 입력"
                        style={{ width: '100%', border: "none" }}
                      />
                    </LongInputListItem>
                  ))}
                </LongInputList>
              </div>
            </div>

          </InputListContainer>
        </ContentContainer>
      </MultiPayContainerLeft>
    </MainBackground>
  );
}