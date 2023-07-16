import { createGlobalStyle } from 'styled-components'
import bgImage from '../assets/IMG-BG.png'

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
body{
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    background-color: ${({ theme }) => theme.COLORS.GRAY_07};
    font-family: 'IBM Plex Sans', sans-serif;
    color: ${({ theme }) => theme.COLORS.GRAY_01};
   
}
`;
