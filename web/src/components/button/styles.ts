import { darken } from 'polished'
import styled, { css } from 'styled-components'

interface ButtonContainerProps {
  size: 'small' | 'medium' | 'large'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  background: ${(props) => props.theme.blue};
  color: ${(props) => props.theme.background};

  font-size: clamp(0.5rem, 0.5vw + 0.5rem, 1rem);
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
      font-size: clamp(0.25rem, 0.25vw + 0.25rem, 0.75rem);
    `}

  ${(props) =>
    props.size === 'medium' &&
    css`
      width: 140px;
      height: 50px;
      font-size: clamp(0.5rem, 0.5vw + 0.5rem, 1rem);
    `}

  ${(props) =>
    props.size === 'large' &&
    css`
      width: 160px;
      height: 60px;
      width: 100%;
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
