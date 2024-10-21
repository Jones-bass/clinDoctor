import { Main, Section, MedicImage, HighlightSpan, Description, AboutColumn, AboutContainer, ImageContainer, CheckTextAbout, IconAbout } from "./styles";
import { FaCheckCircle } from 'react-icons/fa';
import { Button } from "../../components/button";
import { Link } from "react-router-dom";

import medic from "../../assets/medico.jpg";

import aboutImage1 from '../../assets/img/about-1.jpg';
import aboutImage2 from '../../assets/img/about-2.jpg';

export function Home() {
  const dados = [
    {
      id: 1,
      title: "Cuidados de Saúde de Qualidade: Oferecemos tratamentos e serviços de saúde de alta qualidade, garantindo que você receba o melhor cuidado possível.",
    },
    {
      id: 2,
      title: "Apenas Médicos Qualificados: Nossa equipe é composta por médicos altamente qualificados e especializados em diversas áreas da medicina.",
    },
    {
      id: 3,
      title: "Foco no Paciente: Nosso principal objetivo é o bem-estar e a satisfação de nossos pacientes.",
    },
    {
      id: 4,
      title: "Profissionais de Pesquisa Médica: Estamos na vanguarda da pesquisa médica, constantemente buscando inovações e melhorias para a saúde dos nossos pacientes.",
    },
    {
      id: 5,
      title: "Atendimento Personalizado: Cada paciente é tratado de forma única, com planos de tratamento personalizados para suas necessidades específicas.",
    },
    {
      id: 6,
      title: "Ambiente Acolhedor: Criamos um ambiente acolhedor e seguro para que você se sinta confortável durante todo o seu tratamento.",
    },
  ];

  return (
    <Main>
      <Section>
        <HighlightSpan>
        <span>CLin</span>Doctor
        nos proporciona maior acesso a cuidados de saúde. Mais locais, mais vidas transformadas, tudo de forma mais acessível, tudo por aqui.
        </HighlightSpan>
        <Description>
          Tenha acesso a todos os nossos médicos
        </Description>
        <Button size="medium" title="Ver Médicos" />
      </Section>
      <MedicImage src={medic} alt="Foto de um médico" />

      <AboutContainer>
        <AboutColumn>
          <ImageContainer>
            <img src={aboutImage1} alt="Doutores" className="primary-image" />
            <img src={aboutImage2} alt="Doutor" className="secondary-image" />
          </ImageContainer>
        </AboutColumn>
        <AboutColumn>
          <h1>Por que você deve confiar em nós? Conheça-nos!</h1>
          {dados.map(item => (
            <CheckTextAbout key={item.id}>
              <IconAbout>
                <FaCheckCircle />
              </IconAbout>
              {item.title}
            </CheckTextAbout>
          ))}
          <Link to="/">
            Leia Mais <span style={{ marginLeft: 3 }}>-&gt;</span>
          </Link>
        </AboutColumn>
      </AboutContainer>
    </Main>
  );
}
