import styled from 'styled-components'
export const Container = styled.div`
width: 100%;
border-radius: 16px;
border: 1px solid var(--gray-04, #334155);
background: var(--gray-06, #0F172A);
display: flex;
padding: 16px;
align-items: center;
gap: 16px;
flex: 1 0 0;

input{
  width: 100%;
  height: 32px;
  background: transparent;
  border: 0;
  color: ${({theme})=>theme.COLORS.GRAY_01};
}
svg{
  width: 32px;
  height: 32px;
}
input:focus{
  outline: none;
}
input::placeholder{
  color: ${({theme})=>theme.COLORS.GRAY_04}
}
`