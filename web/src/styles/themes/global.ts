import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

body {
  font-family: 'Inter', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings:
    "slnt" 0;

  max-width: 1480px;
  margin: 0 auto;
  
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  text-decoration: none;
  
}



h1 {
  font-size: 3.2em;
  line-height: 1.1;
}
`