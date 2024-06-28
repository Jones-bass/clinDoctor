import styled from 'styled-components';

export const ButtonContainer = styled.button`
  font-size: clamp(0.5rem, 0.5vw + 0.5rem, 1rem);
  font-weight: bold;

  color: ${(props) => props.theme.background};

  background: ${(props) => props.theme.blue};

  border-radius: 6px;
  border: none;
  
  padding: 1.5%;
  cursor: pointer;
  
  transition: background-color 0.3s;

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
