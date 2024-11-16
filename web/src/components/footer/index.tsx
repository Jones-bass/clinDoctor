import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import { FooterBottom, FooterContainer, FooterContent, FooterSection, SocialIcons } from './styles'
import { FiCalendar, FiClock, FiPhone } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'
import { IoLocationOutline } from 'react-icons/io5'

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h2>Contato</h2>
          <p><FiPhone /> +55 (79) 9 9959-1921</p>
          <p><AiOutlineMail /> jonesdev.tb@gmail.com</p>
          <p><IoLocationOutline /> Av 7 de Junho 748, Centro, Tobias Barreto - SE</p>
        </FooterSection>

        <FooterSection>
          <h2>Horários de Atendimento</h2>
          <p><FiCalendar /> Segunda a Sexta: 08:00h - 17:00h</p>
          <p><FiClock /> Sábado / Domingo: Fechado</p>
        </FooterSection>

        <FooterSection>
          <h2>Redes Sociais</h2>
          <SocialIcons>
            <a href="https://instagram.com/jonesbass_" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://github.com/jones-bass" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/jonessouza/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </SocialIcons>
        </FooterSection>
      </FooterContent>
      <FooterBottom>
        <p>&copy; 2024 Clínica Doctors. Todos os direitos reservados Jones Souza.</p>
      </FooterBottom>
    </FooterContainer>
  )
}
