import styled from 'styled-components'

export const Container = styled.button`
display: flex;
width: 64px;
height: 64px;
padding: 16px;
justify-content: center;
align-items: center;

border-radius: 16px;
border: 1px solid var(--gray-05, #1E293B);
background: var(--gray-06, #0F172A);

>svg{
  width: 32px;
  height: 32px;
  color: ${({theme})=> theme.COLORS.GRAY_02};
}
`