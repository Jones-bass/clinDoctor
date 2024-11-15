import styled from 'styled-components'
import backgroundImage from '../../assets/img/header-page.jpg'

export const Main = styled.main`
  flex: 1;
  width: 100%;
  height: 40vh;
  background: url(${backgroundImage}) no-repeat center center;
  background-size: cover;

  @media (max-width: 768px) {
    height: 20vh;
    padding: 1rem;
  }
`

export const Section = styled.section`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 2.5%;

  h1 {
    width: 90%;
    margin-bottom: 1rem;

    font-size: clamp(2rem, 2vw + 2rem, 4rem);
    color: ${(props) => props.theme.background};
  }
`

export const Logo = styled.img`
  width: 20%;
`
