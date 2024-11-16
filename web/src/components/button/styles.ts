import { darken } from 'polished'
import styled, { css } from 'styled-components'

interface ButtonContainerProps {
  size: 'small' | 'medium' | 'large'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  background: ${(props) => props.theme.blue};
  color: ${(props) => props.theme.background};

  border: 0;
  transition: background-color 0.2s;
  border-radius: 8px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  transition: background-color 0.3s;

  ${(props) =>
    props.size === 'small' &&
    css`
      width: 80px;
      height: 32px;
      font-size: clamp(0.6rem, 0.8vw + 0.8rem, 0.9rem);
  `}

  ${(props) =>
    props.size === 'medium' &&
    css`
      width: 140px;
      height: 50px;
      font-size: clamp(0.7rem, 0.9vw + 0.9rem, 1rem);
  `}

  ${(props) =>
    props.size === 'large' &&
    css`
      width: 160px;
      height: 60px;
      width: 100%;
      font-size: clamp(0.8rem, 1vw + 1rem, 1.2rem);
    `}

  &:hover {
    background: ${(props) => darken(0.1, props.theme.blue)};
  }

  span {
    font-family: 'Inter', sans-serif;
    display: inline-block;
    transition: transform 300ms;
  }

  &:hover span {
    transform: translateX(3px);
  }

  svg {
    font-size: 1.5rem;
    margin-right: 6px;
  }
`
