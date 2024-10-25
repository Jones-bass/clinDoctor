import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.header`
  padding: 32px 0;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 0% 2% 0% 2%;
  
  display: flex;
  align-items: center;
  
  button {
    margin-left: auto;
    border: 0;
    background: transparent;
    
    cursor: pointer;

    svg {
      color: ${(props) => props.theme.alert}; 
      height: 20px;
      width: 20px;
    }

    :hover {
        opacity: 0.8;
      }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  div {
    margin-left: 16px;
    line-height: 24px;

    display: flex;
    flex-direction: column;

    span {
      color: ${(props) => props.theme.textTitle};
    }

    a {
      color: ${(props) => props.theme.blue};

      :hover {
        opacity: 0.8;
      }
    }
  }
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
`;

export const Schedule = styled.div`
  padding: 2%;

  flex: 1;

  h1 {
    font-size: clamp(0.8rem, 1vw + 1rem, 2rem);
    color: ${(props) => props.theme.gray}
  }

  p {
    color: ${(props) => props.theme.blue};
    font-weight: 500;

    display: flex;
    align-items: center;

    span {
      display: flex;
      align-items: center;
    }

    span + span::before {
      content: "";
      width: 1px;
      height: 12px;
      background: ${(props) => props.theme.textTitle};
      margin: 0 8px;
    }
  }
`;

export const Section = styled.section`
    margin-top: 4%;

  > strong {
    color: ${(props) => props.theme.gray};

    font-size: clamp(1rem, 1vw + 1rem, 1.5rem);

    display: block;
    border-bottom: 1px solid ${(props) => props.theme.gray};
    padding-bottom: 16px;
    margin-bottom: 16px;
  }
`;

export const Appointment = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;

  background: ${(props) => darken(0.05, props.theme.backgroundSecundary)};

  cursor: pointer;

  :hover {
    background: ${(props) => darken(0.1, props.theme.backgroundSecundary)};
  }
  
  & + div {
    margin-top: 16px;
  }

  div {
    padding: 1%;
    display: flex;
    align-items: flex-start;
    flex: 1;
    border-radius: 8px;
    
    img {
      margin-top: 0.5%;
      width: 5%;
      height: 5%;
      border-radius: 50%;
    }

    @media (max-width: 768px) {
      img {
        width: 10%;
        height: 10%;
      }}
    
    .user-info {
      margin-left: 1%;
      display: flex;
      flex-direction: column;

      span {
        color: ${(props) => props.theme.blue};
        display: flex;
        align-items: center;
        font-size: clamp(0.6rem, 0.6vw + 0.6rem, 1rem);
     

        svg {
          color: ${(props) => props.theme.blue_dark};
          margin-right: 8px;
        }
      }

      strong {
        color: ${(props) => props.theme.textTitle};
        font-size: clamp(0.75rem, 0.75vw + 0.75rem, 1.5rem);
        font-family: 'Roboto';
        font-weight: 300;
      }
    }
  }
`;





