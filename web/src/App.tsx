import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/themes/global'
import { Header } from './components/header'
import { Home } from './home'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <>
        <Header />
        <Home />
      </>
      <GlobalStyle />
    </ThemeProvider>
  )
}