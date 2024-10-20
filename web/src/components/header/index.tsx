import { NavLink } from 'react-router-dom';
import { Button } from '../button';
import { HeaderContainer } from './styles';

import logo from '../../assets/logo.png';
import { BiUser } from 'react-icons/bi';

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/" title="inicio">
          <img src={logo} alt="Logo ClinDoctor" />
        </NavLink>
        <div className='abas'>
          <NavLink to="/serviços" title="serviços">Serviços</NavLink>
          <NavLink to="/sobre" title="serviços">Sobre</NavLink>
          <NavLink to="/contato" title="serviços">Contato</NavLink>
        </div>
      </nav>
      <Button 
        icon={BiUser}
        title='Login' 
        size='medium' 
        />
    </HeaderContainer>
  );
}
