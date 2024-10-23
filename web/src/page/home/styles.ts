import { darken } from 'polished';
import styled from 'styled-components';

export const Main = styled.main`
  max-width: calc(100vw - 16px);
  margin: 0 auto;
  padding: 0 22px;
  height: calc(100vh - 10rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  background: linear-gradient(-160deg, #0463FA 10%, #72EFE9 100%);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Section = styled.section`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 2.5%;

  span {
    font-family: 'Roboto';
    font-weight: 100;
  }
`;

export const HighlightSpan = styled.h1`
  width: 90%;
  margin-bottom: 1rem;
  font-family: 'Roboto';
  font-weight: 200;


  font-size: clamp(1.25rem, 1.25vw + 1.25rem, 2.5rem);
  text-align: justify;
  line-height: 1.2;
 
  color: ${(props) => props.theme.background};
`;

export const SpanText = styled.h1`
  color: ${(props) => props.theme.background};
  font-size: clamp(2.65rem, 2.65vw + 2.65rem, 4.25rem);
 
  margin: 0; 
  padding: 0; 

  animation: slideIn 1s ease-out;

  @keyframes slideIn {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;


export const Description = styled.p`
  font-size: clamp(0.65rem, 0.65vw + 0.65rem, 1rem);
  margin-bottom: 1%;

  color: ${(props) => props.theme.background};
`;

export const MedicImage = styled.img`
  width: 25%;
  margin-top: 5%;
  height: auto;
  border-radius: 8px;
  box-shadow: 10px 10px 10px 0px ${(props) => props.theme.textTitle};

  @media (max-width: 768px) {
    margin: 2rem auto 0;
    width: 80%;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  margin-top: 10%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AboutColumn = styled.div`

a {
    color: ${(props) => props.theme.blue_dark}; 
    display: block;
    gap: 0px;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;
    
    font-family: 'Inter';
    
    cursor: pointer;

    > p {
      margin-right: 2px;
    }

    &:hover {
      color: ${(props) => darken(0.1, props.theme.blue_dark)}; 
    
    span {
      transform: translateX(2px);
      transition: transform 0.7s ease; 
    }

    svg {
      margin-right: 6px;
    }
  }}

  flex: 1;
  max-width: 50%;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }

  h1 {
    color: ${(props) => props.theme.blue};
    font-size: clamp(2rem, 2vw + 2rem, 4rem);
    margin-top: 0%;
  }
`;

export const ImageContainer = styled.div`
  img {
    border-radius: 8px;
  }

  display: flex;
  flex-direction: column;
  gap: 2rem;

  .primary-image {
    width: 75%;
    align-self: flex-end;
    box-shadow: 2px 2px 5px ${(props) => props.theme.blue_dark};

    @media (max-width: 768px) {
      width: 100%;
      align-self: center;
    }
  }

  .secondary-image {
    width: 40%;
    background-color: ${(props) => props.theme.background};
    padding-top: 1%;
    padding-right: 1%;
    margin-top: -30%;
    align-self: flex-start;

    @media (max-width: 768px) {
      width: 60%;
      margin-top: -10%;
      align-self: center;
    }
  }
`;

export const CheckTextAbout = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: clamp(0.75rem, 0.75vw + 0.75rem, 1rem);
  color: ${(props) => props.theme.blue_dark};
  margin-bottom: 1rem;

  
  @media (max-width: 768px) {
      padding: 2.5%;
    }
`;

export const IconAbout = styled.div`
  font-size: clamp(0.75rem, 0.75vw + 0.75rem, 1rem);
  color: ${(props) => props.theme.primary};
`;


