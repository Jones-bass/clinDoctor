import styled from 'styled-components';
import backgroundImage from '../../assets/img/header-page.jpg';

export const Main = styled.main`
  > h1 {
    align-items: center;
    text-align: center;
    justify-content: center;
    font-family: 'Roboto';
 
    font-size: clamp(1.5rem, 1.5vw + 1.5rem, 3rem);
    padding: 2%;
    color: ${(props) => props.theme.blue};
  }
`;

export const HeaderMain = styled.div`
  flex: 1;
  width: 100%;
  height: 40vh;
  background: url(${backgroundImage}) no-repeat center center;
  background-size: cover;

  @media (max-width: 768px) {
    height: 20vh;
    padding: 1rem;
  }
`;

export const Icon = styled.div`
  width: 80px;
  height: 80px;

  margin: 0 auto;

  background-color: ${(props) => props.theme.blue};
  color: ${(props) => props.theme.background};

  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 24px; 
`;

export const ServicesContainer = styled.section`
  display: grid;
  max-width: 1200px;
  margin-inline: auto;
  padding-inline: 24px;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
`;

export const ServicesConatinerCars = styled.article`
  padding: 10%;
  background: ${(props) => props.theme.backgroundSecundary};
  border-radius: 16px;
  box-shadow: none;

  border-radius: 1rem;
  transition: all 0.4s ease-in;
  
  &:hover {
    transform: translateY(-0.7rem);
    box-shadow: 2px 2px 2px 0px ${(props) => props.theme.blue};
    border-radius: 1.8rem;
  }
`;

export const ServicesContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ServicesBody = styled.div`
  padding: 7%;
  text-align: justify;

  p {
    font-family: 'Roboto';
    font-weight: 100;
  }

  h2 {
    margin: 0 0 18px 0;
 
    font-size: clamp(1rem, 1vw + 1rem, 2rem);
    letter-spacing: 0.06em;
  }
`;

