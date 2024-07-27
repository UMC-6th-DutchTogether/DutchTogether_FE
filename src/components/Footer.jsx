import { FooterContainer, FooterTextContainer } from '../styles/styledComponents'


export default function Footer() {
  return (
    <FooterContainer>
      <FooterTextContainer>
        <div>이용약관 | 개인정보보호처리방침</div>
        <div>상호명 : 더치투게더</div>
        <div>copyright @  All rights reserved</div>
      </FooterTextContainer>

      <FooterTextContainer>
        <div>PM : 아크 박승민</div>
        <div>DE : 제시카 이유진</div>
      </FooterTextContainer>
    </FooterContainer>
  )
}