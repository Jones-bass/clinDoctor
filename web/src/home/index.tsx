import { Main, Section, Logo, MedicImage, HighlightSpan, Description } from "./styles";
import medic from "../assets/medico.jpg";
import logo from "../assets/logo.png";
import { Button } from "../components/button";

export function Home() {
  return (
    <Main>
      <Section>
        <Logo src={logo} alt="logo clindoctor" />
        <HighlightSpan>
          Proporcionando maior acesso a cuidados de saúde inovadores. Mais locais, mais vidas transformadas, tudo aqui.
        </HighlightSpan>
        <Description>
          Tenha acesso a todos os nossos médicos
        </Description>
        <Button size="large" title="Ver Médicos" />
      </Section>
      <MedicImage src={medic} alt="Foto de um médico" />
    </Main>
  );
}
