import { FaStethoscope, FaHeartbeat, FaMedkit } from 'react-icons/fa'
import { Main, AboutContainer, AboutSection, AboutCard, Icon, AboutInfo, AboutMain } from './styles'

const aboutDetails = [
  {
    id: 1,
    icon: <FaStethoscope />,
    title: 'Nossa História',
    description: 'Fundada em 2010, a Clínica Doctors vem oferecendo serviços de saúde com qualidade e compromisso.',
  },
  {
    id: 2,
    icon: <FaHeartbeat />,
    title: 'Nossa Missão',
    description: 'É proporcionar cuidados médicos de excelência, com foco na saúde e no bem-estar dos pacientes.',
  },
  {
    id: 3,
    icon: <FaMedkit />,
    title: 'Nossos Valores',
    description: 'Atendimento humanizado, o respeito, a ética e o constante aperfeiçoamento dos nossos profissionais.',
  },
]

export function AboutPage() {
  return (
    <Main>
      <AboutMain>
        <AboutSection>
          <h1>Nossa</h1>
          <p>história e compromisso com você!</p>
        </AboutSection>
      </AboutMain>

      <AboutContainer>
        {aboutDetails.map((item) => (
          <AboutCard key={item.id}>
            <Icon>{item.icon}</Icon>
            <AboutInfo>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </AboutInfo>
          </AboutCard>
        ))}
      </AboutContainer>
    </Main>
  )
}
