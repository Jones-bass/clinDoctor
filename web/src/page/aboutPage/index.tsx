import logo from "../../assets/logo.png";
import { Logo, Main, Section, } from "./styles";

export function AboutPage() {
  return (
    <Main>
      <Section>
        <h1>Sobre</h1>
        <Logo src={logo} alt="logo clindoctor" />
      </Section>
    </Main>
  );
}


