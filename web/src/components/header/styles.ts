import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  
  nav {
    padding: 1%;
    width: 75%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 10%; 
      height: auto;
    }

    .abas {
      width: 20%;
      display: flex;
      gap: 10%;

      a {
        color: ${(props) => props.theme.textTitle};
        text-decoration: none;
        font-size: clamp(0.5rem, 0.5vw + 0.5rem, 1rem); 
        transition: color 0.3s;

        &:hover {
          color: ${(props) => props.theme.blue_dark};
        }
      }          
    }  
  } 

  @media (max-width: 720px) {
    nav {
      width: 60%;
      
    img {
      width: 20%
      }
    }
  } 

  @media (max-width: 480px) {
    button {
      margin-right: 5px;
      width: 30%;
      height: 50px;
    }

    nav {
      width: 40%;
  
    img {
      width: 50%
      }
    }
  } 
`;
