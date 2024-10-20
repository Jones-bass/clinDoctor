import styled, { keyframes } from 'styled-components';
import { darken } from 'polished'; 

import backgroundImage from "../../assets/img/feature.jpg";

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
  h1 {
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
    color: ${(props) => props.theme.blue_dark}; 
    display: block;
    margin-top: 24px;
    gap: 0px;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    cursor: pointer;
    align-items: center;

    &:hover {
      color: ${(props) => darken(0.1, props.theme.blue_dark)}; 
    
      span {
      transform: translateX(-3px);
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
