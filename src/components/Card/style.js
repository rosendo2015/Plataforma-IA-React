import styled from "styled-components";

export const Container = styled.div`

display: flex;
align-items: center;
justify-content: space-between;

padding: 16px;
align-self: stretch;

border-radius: 16px;
border: 1px solid ${({theme})=> theme.COLORS.GRAY_04};
background: ${({theme})=> theme.COLORS.GRAY_06};
margin-bottom: 16px;
.wrapper-icon{
  display: flex;
  align-items: center;  
  gap: 24px;
}
.wrapper-icon .icon{
  width: 64px;
  height: 64px;
  padding: 16px;
  border: 1px solid ${({theme})=> theme.COLORS.GRAY_05};
  border-radius: 16px;
}

.wrapper-icon p{
  color: var(--gray-02, #E2E8F0);
  font-family: IBM Plex Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.wrapper-icon svg{
  width: 32px;
  height: 32px;
}
.icon-arrow{
  width: 64px;
  height: 64px;
  padding: 16px;
}
.icon-arrow svg{
  width: 32px;
  height: 32px;
}
`