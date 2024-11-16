import styled from 'styled-components'
import backgroundImage from '../../assets/img/header-page.jpg'

interface PropsType {
  isVisible: boolean
}

export const Main = styled.div``

export const SectionContainer = styled.div`
  height: 40vh;
  background: url(${backgroundImage}) no-repeat center center;
  background-size: cover;

  @media (max-width: 768px) {
    height: 20vh;
  }
`

export const Section = styled.section`
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
  font-size: 50px;
`

export const ServicesContainer = styled.section<PropsType>`
  display: grid;
  max-width: 1200px;
  margin-inline: auto;
  padding-inline: 24px;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;

  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transform: translateY(${({ isVisible }) => (isVisible ? '0' : '20%')});
  transition: opacity 0.5s ease-out,
  transform 0.5s ease-out;
`

export const ServicesConatinerCars = styled.article`
  background: ${(props) => props.theme.white};
  padding: 5%;
  width: 85%;

  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease-in;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-0.7rem);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`

export const ServicesContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const ServicesBody = styled.div`
  padding: 7%;
  text-align: justify;

  h2 {
    color: ${(props) => props.theme.gray};
    font-weight: 500;
    margin: 0 0 18px 0;
    font-size: clamp(1rem, 1vw + 1rem, 2rem);
    letter-spacing: 0.06em;
  }

  p {
    color: ${(props) => props.theme.gray};
    font-family: 'Roboto';
    font-weight: 300;
  }
`
