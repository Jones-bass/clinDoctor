import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '../button';
import { HeaderContainer } from './styles';
import logo from '../../assets/logo.png';
import { BiUser } from 'react-icons/bi';
import { Loading } from '../loading';
import { useCallback, useState } from 'react';

export function Header() {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleOnSubmit = useCallback(() => {
    setLoading(true);

    setTimeout(() => {
      navigate('/login');
    }, 1000)
  },
    [navigate],
  );

  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/" title="inicio">
          <img src={logo} alt="Logo ClinDoctor" />
        </NavLink>
        <div className="abas">
          <NavLink to="/servicos" title="Serviços">Serviços</NavLink>
          <NavLink to="/sobre" title="Sobre">Sobre</NavLink>
          <NavLink to="/contato" title="Contato">Contato</NavLink>
        </div>
      </nav>
      <Button
        icon={loading ? undefined : BiUser}  
        title="Login"
        size="medium"
        type="button" 
        onClick={handleOnSubmit}
      >
        {loading ? <Loading /> : 'Login'}
      </Button>

    </HeaderContainer>
  );
}
