import styled from 'styled-components'

export const Container = styled.div`
  
  margin: 100px auto;
  width: 1216px;
  display: flex;
  align-items: center;  
  justify-content: center;
  padding: 60px;  
  
  border-radius: 32px;
  border: 1px solid ${({theme})=> theme.COLORS.GRAY_04};
  
  background: rgba(2, 6, 23, 0.80);
  
.topo{
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
} 
h1{
  color: ${({theme})=> theme.COLORS.GRAY_01};
  text-align: center;
  font-family: IBM Plex Sans;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 40px;
}
.wrapper-input::after{
  content: '';
  position: absolute;
  width: 1000px;
  border: 1px solid ${({theme})=>theme.COLORS.GRAY_04};
  top: -40px;
  left: -150px;
}
.wrapper-input{
  position: relative;
  margin-top: 80px;
  display: flex;
  gap: 16px;
}
.wrapper-input Button{
  border: 1px solid ${({theme})=>theme.COLORS.GRAY_04};
}
`