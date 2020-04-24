import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/github-background.svg';
import githubBackground2 from '../assets/github-background-2.svg';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: ${props => props.theme.colors.background} url(${props =>
  props.theme.title === 'light'
    ? githubBackground
    : githubBackground2}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
  }

  button{
    cursor: pointer;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }
`;
