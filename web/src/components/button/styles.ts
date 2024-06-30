import styled, { css } from 'styled-components';

interface ButtonContainerProps {
  size: 'small' | 'medium' | 'large';
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  font-size: clamp(0.5rem, 0.5vw + 0.5rem, 1rem);
  font-weight: bold;

  color: ${(props) => props.theme.background};

  background: ${(props) => props.theme.blue};

  border-radius: 6px;
  border: none;
  
  padding: 1.5%;
  cursor: pointer;
  
  transition: background-color 0.3s;

  ${(props) =>
    props.size === 'small' &&
    css`
      padding: 0.5rem 1rem;
      font-size: clamp(0.25rem, 0.25vw + 0.25rem, 0.75rem);;
    `}

  ${(props) =>
    props.size === 'medium' &&
    css`
      padding: 1.5%;
      font-size: clamp(0.5rem, 0.5vw + 0.5rem, 1rem);;
    `}

  ${(props) =>
    props.size === 'large' &&
    css`
      padding: 3%;
      font-size: clamp(0.75rem, 0.75vw + 0.75rem, 1.5rem);

    `}

  &:hover {
    background: ${(props) => props.theme.blue_dark};
  }

  span {
    font-family: "Inter", sans-serif;
    display: inline-block;
    transition: transform 300ms;
  }

  &:hover span {
    transform: translateX(3px);
  }
`;
