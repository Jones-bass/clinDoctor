import { Logo, HeaderMain, Section, Main, ServicesConatinerCars, ServicesContainerWrapper, ServicesContainer, ServicesBody, Icon } from "./styles";
import { FaHeart, FaLungs, FaBrain, FaTooth, FaBone, FaFlask, FaUserMd, FaBaby } from 'react-icons/fa';
import logo from "../../assets/logo.png";

export function ServicePage() {
  const articles = [
    {
      id: 1,
      icon: <FaHeart />,
      title: "Cardiologia",
      description: "Especialidade médica dedicada ao diagnóstico e tratamento de doenças do coração e do sistema circulatório. Cardiologistas são responsáveis por tratar condições como hipertensão, insuficiência cardíaca, arritmias e doenças coronarianas."
    },
    {
      id: 2,
      icon: <FaLungs />,
      title: "Pulmonar",
      description: "Especialidade pulmonar, ou pneumologia, foca no diagnóstico e tratamento de doenças respiratórias e pulmonares. Isso inclui asma, doença pulmonar obstrutiva crônica (DPOC), pneumonia, tuberculose e câncer de pulmão."
    },
    {
      id: 3,
      icon: <FaBrain />,
      title: "Neurologia",
      description: "Neurologia é a área médica que trata de distúrbios do sistema nervoso. Neurologistas cuidam de doenças como epilepsia, esclerose múltipla, doença de Parkinson, acidente vascular cerebral (AVC) e enxaqueca."
    },
    {
      id: 4,
      icon: <FaTooth />,
      title: "Cirurgia dentária",
      description: "A cirurgia dentária envolve procedimentos cirúrgicos na cavidade oral, incluindo extrações dentárias, cirurgias periodontais, implantes dentários e tratamentos de lesões orais. Dentistas cirurgiões garantem a saúde bucal e tratam condições que requerem intervenção cirúrgica."
    },
    {
      id: 5,
      icon: <FaBone />,
      title: "Ortopedia",
      description: "A especialidade médica que se ocupa do tratamento de doenças e lesões do sistema músculo-esquelético, incluindo ossos, articulações, ligamentos, tendões e músculos. Ortopedistas tratam fraturas, artrite, lesões esportivas e deformidades esqueléticas."
    },
    { 
      id: 6,
      icon: <FaFlask />,
      title: "Laboratório",
      description: "A especialidade de laboratório clínico envolve a realização de exames e testes diagnósticos em amostras biológicas, como sangue, urina e tecidos. Esses testes ajudam na detecção de doenças, monitoramento de condições crônicas e na orientação do tratamento médico."
    },
    {
      id: 7,
      icon: <FaUserMd />,
      title: "Médico de família",
      description: "Fornecem cuidados de saúde abrangentes e contínuos para indivíduos e famílias de todas as idades. Eles tratam uma ampla gama de condições médicas, promovem a saúde preventiva e coordenam o atendimento com outros especialistas quando necessário."
    },
    {
      id: 8,
      icon: <FaUserMd />,
      title: "Dermatologia",
      description: "Especialidade médica focada no diagnóstico e tratamento de doenças da pele, cabelos e unhas. Dermatologistas tratam condições como acne, eczema, psoríase, câncer de pele e infecções cutâneas."
    },
    {
      id: 9,
      icon: <FaBaby />,
      title: "Pediatria",
      description: "Especialidade médica dedicada ao cuidado da saúde de bebês, crianças e adolescentes. Pediatras monitoram o crescimento e desenvolvimento, administram vacinas, tratam doenças infantis e fornecem orientação aos pais sobre cuidados preventivos e alimentação saudável."
    }
  ];

  return (
    <Main>
      <HeaderMain>
        <Section>
          <h1>Serviços</h1>
          <Logo src={logo} alt="logo clindoctor" />
        </Section>
      </HeaderMain>

      <h1>Soluções para cuidados de saúde</h1>

      <ServicesContainer>
        {articles.map((item) => (
          <ServicesConatinerCars key={item.id}>
            <ServicesContainerWrapper>
              <Icon>
                {item.icon}
              </Icon>
              <ServicesBody>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </ServicesBody>
            </ServicesContainerWrapper>
          </ServicesConatinerCars>
        ))}
      </ServicesContainer>

    </Main>
  );
}
