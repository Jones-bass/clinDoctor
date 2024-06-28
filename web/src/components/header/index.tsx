import logo from '../../assets/logo.png';
import { Button } from '../button';
import { HeaderContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <img src={logo} alt="Logo ClinDoctor" />
        <div className='abas'>
          <a href="#agendamento">Serviços</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </div>
      </nav>
      <Button title='AGENDAMENTO'/>
       
    </HeaderContainer>
  );
}
