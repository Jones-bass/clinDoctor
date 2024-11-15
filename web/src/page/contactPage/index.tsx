import logo from '../../assets/logo.png'
import { Logo, Main, Section } from './styles'

export function ContactPage() {
  return (
    <Main>
      <Section>
        <h1>Contato</h1>
        <Logo src={logo} alt="logo clindoctor" />
      </Section>
    </Main>
  )
}
