import styled from 'styled-components'
import backgroundImage from '../../assets/img/header-page.jpg'

export const Main = styled.div``

export const AboutMain = styled.div`
  height: 40vh;
  background: url(${backgroundImage}) no-repeat center center;
  background-size: cover;

  @media (max-width: 768px) {
    height: 20vh;
  }
`

export const AboutSection = styled.section`
  max-width: 950px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-left: 1%;
  width: 100%;

  h1 {
    font-family: 'Roboto';
    font-weight: 500;
    margin-top: 8%;
    margin-bottom: 10%;
    font-size: clamp(1rem, 1vw + 2rem, 4rem);
    color: ${(props) => props.theme.blue};
  }

  p {
    font-family: 'Roboto';
    font-weight: 200;
    margin-top: 8%;
    margin-bottom: 10%;
    font-size: clamp(1rem, 1vw + 2rem, 4rem);
    color: ${(props) => props.theme.background};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    h1 {
      margin-bottom: 0;
    }
    p {
      margin-top: 0;
      padding: 0;
    }
  }
`

export const AboutContainer = styled.section`
  display: flex;
  padding-inline: 24px;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;

  margin-bottom: 5%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const AboutCard = styled.article`
  display: flex;
  background: ${(props) => props.theme.white};
  padding: 6%;
  border-radius: 8px;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease-in;

  flex-direction: column;

  &:hover {
    transform: translateY(-0.7rem);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`

export const Icon = styled.div`
  width: 50px;
  height: 50px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.blue};
  color: ${(props) => props.theme.background};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: clamp(0.7rem, 1vw + 1rem, 1.5rem);

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`

export const AboutInfo = styled.div`
  text-align: justify;

  h2 {
    color: ${(props) => props.theme.gray};
    font-weight: 500;
    font-size: clamp(0.7rem, 1vw + 1rem, 1.5rem);
  }
  
  p {
    color: ${(props) => props.theme.gray};
    font-family: 'Roboto';
    font-weight: 300;
  }
`
