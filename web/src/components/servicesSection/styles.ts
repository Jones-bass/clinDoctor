import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

import imageRight from "../../assets/img/pexels-photo-4031369.jpeg";
import imageLeft from "../../assets/img/pexels-photo-3825502.jpeg";

interface PropsType {
  isVisible: boolean
}

export const Section = styled.section<PropsType>`
  width: 100%;
  background: ${(props) => darken(0.08, props.theme.blue_dark)};

  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transform: translateY(${({ isVisible }) => (isVisible ? '0' : '20%')});
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
`;

export const flipInContainer = keyframes`
  0% {
    transform: rotateY(-180deg);
    opacity: 0;
  }
  100% {
    transform: rotateY(0);
    opacity: 1;
  }
`;

export const LayoutWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column; 
    align-items: center;
  }
`;

export const LayoutCell = styled.div`
  width: 33.33%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%; 
    justify-content: center;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    display: none; 
  }
`;

export const ImageLeft = styled(ImageContainer)`
  background: url(${imageLeft}) no-repeat center;
`;

export const ImageRight = styled(ImageContainer)`
  background: url(${imageRight}) no-repeat center;
`;

export const ContentContainer = styled.div`
  background: ${(props) => props.theme.blue_dark};
  color: ${(props) => props.theme.background};
  text-align: center;
  padding: 10%;
  animation: ${flipInContainer} 3s;

  h1 {
    font-size: clamp(0.8rem, 1vw + 1rem, 2rem);
  }

  p {
    margin: 20px 0;
    font-weight: 250;
  }

  a {
    color: ${(props) => props.theme.background}; 
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
      color: ${(props) => darken(0.1, props.theme.background)}; 
    
    span {
      transform: translateX(2px);
      transition: transform 0.7s ease; 
    }

    svg {
      margin-right: 6px;
    }
  }}

  @media (max-width: 768px) {
    width: 100%; 
    padding: 20px; 
  }
`;


export const IconFaHeartbeat = styled.span`
  font-size: clamp(1.5rem, 2.5vw + 2.5rem, 5rem);
  display: inline-block;

  color: ${(props) => props.theme.background};

  cursor: pointer;

  :hover {
    color: ${(props) => darken(0.1, props.theme.background)};
  }
`;


export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const flipInIcon = keyframes`
  0% {
    transform: rotateY(-180deg);
    opacity: 0;
  }
  100% {
    transform: rotateY(0);
    opacity: 1;
  }
`;

export const ListItem = styled.div`
  padding: 20px;
  margin: 15px;
  width: 250px;
  text-align: center;
  
  h2 {
    color: ${(props) => props.theme.background};
    margin-bottom: 10px;
  }

  p {
    color: ${(props) => props.theme.backgroundSecundary};
    font-family: 'Roboto';
    font-weight: 250;
  }
`;

export const Icon = styled.span<PropsType>`
  font-size: clamp(2rem, 2vw + 2rem, 4rem);
  color: ${(props) => props.theme.background};

  animation: ${flipInIcon} 2s;
  display: inline-block;

  cursor: pointer;


  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transform: ${({ isVisible }) => (isVisible ? 'rotateY(0)' : 'rotateY(-180deg)')};
  transition: opacity 0.7s ease-out, transform 0.7s ease-out;

  animation: ${({ isVisible }) => isVisible ? flipInIcon : 'none'} 2s;

  :hover {
    color: ${(props) => darken(0.1, props.theme.background)};
  }
`;




