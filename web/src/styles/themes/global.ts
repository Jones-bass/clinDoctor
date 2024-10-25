import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

body {
  font-family: 'Roboto', sans-serif;
  font-optical-sizing: auto;
 
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

h1, h3, h3 {
  padding: 0;
  margin: 0;
}
`