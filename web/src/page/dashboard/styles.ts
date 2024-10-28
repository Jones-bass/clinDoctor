import { darken } from "polished";
import { DayPicker } from "react-day-picker";

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
      color: ${(props) => props.theme.blue_100};

      :hover {
        opacity: 0.8;
      }
    }
  }
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 0 auto;


  .schedule-and-calendar {
    display: flex; 
    align-items: flex-start; 
    gap: 24px; 
  }

  @media (max-width: 768px) {
    .schedule-and-calendar {
      flex-direction: column; 
    }
  }
`;

export const Schedule = styled.div`
  padding: 2%;

  flex: 1;

  .icon {
    font-size: clamp(4.8rem, 4vw + 4rem, 8rem);
    color: ${(props) => (props.theme.text)};
    margin-bottom: 0.5rem; 
    opacity: 0.7; 
  }

  .no-appointments {
    display: flex;

    margin: 0 auto;
    flex-direction: column; 
    align-items: center; 
    justify-content: center;
    font-size: 1.2rem;
    color: ${(props) => props.theme.text}; 
    padding: 1rem 0;
    animation: fadeIn 0.3s ease-in; 
  }

  @media (max-width: 768px) {
    width: 80%;
    margin: 0 auto;

  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  h1 {
    font-size: clamp(0.8rem, 1vw + 1rem, 2rem);
    color: ${(props) => props.theme.gray}
  }

  p {
    color: ${(props) => props.theme.blue_100};
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

const ContainerAppointment = styled.div`
  :hover {
      background: ${(props) => darken(0.1, props.theme.backgroundSecundary)};
    }

  > div {
    background: ${(props) => props.theme.backgroundSecundary};
    padding: 16px 24px;
    margin-top: 24px;
    position: relative;

    cursor: pointer;

    display: flex;
    align-items: center;


    span {
      color: ${(props) => props.theme.blue_100};      
      display: flex;
      align-items: center;
      font-size: 16px;

      svg {
        color: ${(props) => props.theme.blue_100};      
        margin-right: 2%;
      }
    }
  }
`;

export const NextAppointment = styled(ContainerAppointment)`
    margin-top: 10%;

    > strong {
      color: ${(props) => props.theme.gray};
      font-size: clamp(1rem, 1vw + 1rem, 2rem);
    }

    > strong:hover {
      background-color: transparent;
    }

    > div {
       &::before {
        content: "";
        position: absolute;
        height: 100%;
        width: 3px;
        left: 0;
        top: 0%;
        background: ${(props) => props.theme.gray};
    }
    
    img {
      width: 12%;
      height: 12%;
      border-radius: 50%;
      margin-right: 5%; 
    }

    .appointment-details {
      display: flex;
      width: 70%;
      flex-direction: column;
      justify-content: center;
      
      span {
        display: flex;
        align-items: center;
        text-align: start;
        justify-content: start;
        width: 30%;
      }
      
      .appointment-time-and-date {
        display: flex; 
      }
    }

   strong {
      color: ${(props) => props.theme.gray};      
      margin-top: 2%; 
      font-size: clamp(1rem, 1vw + 1rem, 2rem);
      font-weight: bold;
    }
  }
`;

export const Appointment = styled(ContainerAppointment)`

> div {
     &::before {
      content: "";
      position: absolute;
      height: 100%;
      width: 2px;
      left: 0;
      top: 0%;
      background: ${(props) => props.theme.blue_100};
    }

  img {
    width: 7%;
    height: 7%;
    border-radius: 50%;
  }    

  @media (max-width: 768px) {
    img {
      width: 10%;
      height: 10%;
    }}
  
  .user-info {
    margin-left: 2%;
    display: flex;
    flex-direction: column;

    span {
      color: ${(props) => props.theme.blue_100};
      display: flex;
      align-items: center;
      font-size: clamp(0.5rem, 0.5vw + 0.5rem, 0.8rem);
    
      svg {
        color: ${(props) => props.theme.blue_100};
        margin-right: 4%;
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


export const Calender = styled(DayPicker)`
    color: ${(props) => darken(0.1, props.theme.gray)};

 .rdp-caption_label {
    color: ${(props) => darken(0.1, props.theme.gray)};
    font-family: 'Roboto';
  }
  
  .rdp-chevron {
    display: inline-block;
    fill: ${(props) => props.theme.blue};
  }

   .rdp-selected  {
    color: ${(props) => props.theme.gray};
  }

  .rdp-selected .rdp-day_button {
    color: ${(props) => props.theme.gray};
    background-color: ${(props) => props.theme.backgroundSecundary};
    border: none;
  }

  .rdp-today {
    color: ${(props) => props.theme.blue};
  }

  .rdp-day:hover:not(.rdp-day_disabled) {
    width: 7%;
    height: 7%;
    border-radius: 50%;
    background: ${(props) => props.theme.backgroundSecundary};
  }

  @media (max-width: 768px) {
    margin: 0 auto;
    width: 80%;
  }
`;




