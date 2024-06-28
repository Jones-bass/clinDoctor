import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/themes/global'
import { Header } from './components/header'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header/>
      <div>Hello Word#</div>
      <GlobalStyle />
    </ThemeProvider>
  )
}