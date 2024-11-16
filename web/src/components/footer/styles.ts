import { darken } from "polished"
import styled from "styled-components"

export const FooterContainer = styled.footer`
   

  width: 100%;
  background-color: ${(props) => props.theme.footer};
  color: ${(props) => props.theme.white};
  padding: 5% 0;

  @media (max-width: 460px) {
    flex-direction: column;
    text-align: start;
  }
`

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 24px;
  padding: 0 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
  }
`

export const FooterSection = styled.div`
  h2 {
    font-size: clamp(0.9rem, 1vw + 1rem, 1.5rem);
    text-align: start;
    color: ${(props) => props.theme.background};
  }

  p {
    font-size: clamp(0.7rem, 0.8vw + 0.8rem, 1rem);
    color: ${(props) => props.theme.background};
    display: flex;
    align-items: center;
    gap: 8px;
  }
`

export const SocialIcons = styled.div`
  display: flex;
  gap: 16px;

  a {
    color: ${(props) => props.theme.white};
    font-size: clamp(0.9rem, 1vw + 1rem, 1.5rem);
    transition: color 0.3s;

    &:hover {
      color: ${(props) => darken(0.2, props.theme.background)};
    }
  }
`

export const FooterBottom = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;

  font-size: clamp(0.7rem, 0.8vw + 0.8rem, 1rem);

  color: ${(props) => props.theme.text};
`
