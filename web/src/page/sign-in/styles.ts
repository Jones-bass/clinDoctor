import styled, { keyframes } from 'styled-components';
import { darken } from 'polished'; 

import backgroundImage from "../../assets/img/carousel-2.jpg";

const appearFromRight = keyframes`
from {
  opacity: 0;
  transform: translateX(50px);
}

to {
  opacity: 1;
  transform: translateX(0);
}
`;

export const Container = styled.div`
  h2 {
    color: ${(props) => props.theme.textTitle}; 
  }
  
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;
  max-width: 700px;
`;

export const AnimationContainer = styled.div`
  img {
    width: 150px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${appearFromRight} 1s;

  form {
    margin: 50px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }
  }

  a {
    color: ${(props) => props.theme.blue_100}; 
    display: block;
    gap: 0px;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;
    
    font-family: 'Inter';
    
    cursor: pointer;

    p {
      margin-left: 2px;
    }

    &:hover {
      color: ${(props) => darken(0.1, props.theme.blue_100)}; 
    
    span {
      transform: translateX(2px);
      transition: transform 0.7s ease; 
    }

    svg {
      margin-right: 6px;
    }
  }}
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImage}) no-repeat center;
  background-size: cover;
`;
