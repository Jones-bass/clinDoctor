import { Link } from "react-router-dom";
import { FiPower } from "react-icons/fi";

import "react-day-picker/dist/style.css";
import { useAuth } from "../../hook/auth";
import { Container, Header, HeaderContent, Profile } from "./styles";


export function Dashboard() {
  const { user, signOut } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>

            <Profile>
              <img src={user.avatar_url || 'default-avatar.jpg'} alt={user.name} />
              <div>
                <span>Bem-vindo,</span>
                <Link to="/profile">
                  <strong>{user.name}</strong>
                </Link>
              </div>
            </Profile>
     

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

    </Container>
  );
}
