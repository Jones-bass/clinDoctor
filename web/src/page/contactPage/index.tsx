import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import {
  Main,
  ContactContainer,
  ContactSection,
  ContactCard,
  Icon,
  ContactInfo,
} from './styles'

const contactDetails = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    title: 'Endereço',
    description: 'Av 7 de junho 748, Centro',
  },
  {
    id: 2,
    icon: <FaPhone />,
    title: 'Telefone',
    description: '(79) 9 99959-1921',
  },
  {
    id: 3,
    icon: <FaEnvelope />,
    title: 'E-mail',
    description: 'jonesde.tb@gmail.com',
  },
  {
    id: 4,
    icon: <FaClock />,
    title: 'Horário de Funcionamento',
    description: 'Segunda a Sexta: 8:00h - 17:00h',
  },
]

export function ContactPage() {
  return (
    <Main>
      <ContactSection>
        <h1>Contato</h1>
        <p>Estamos aqui para ajudar</p>
      </ContactSection>

      <ContactContainer>
        {contactDetails.map((item) => (
          <ContactCard key={item.id}>
            <Icon>{item.icon}</Icon>
            <ContactInfo>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </ContactInfo>
          </ContactCard>
        ))}
      </ContactContainer>
    </Main>
  )
}
