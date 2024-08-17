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
  DropdownContainer,
  PayerContainer
} from '../../styles/styledComponents';



export default function MultiQ5() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { meetingLink } = useSelector((state) => state.multiPay);


  return (
    <MainBackground>
      <DecorationBarLeft>
        <DecorationBarLeftText>같이 계산해요!</DecorationBarLeftText>
      </DecorationBarLeft>

      <TransparentBox />

      <MultiPayContainerLeft>
        <TitleText style={{ marginBottom: '48px' }}>링크 생성</TitleText>
        <ContentContainer>

        </ContentContainer>
      </MultiPayContainerLeft>
    </MainBackground>
  )
}