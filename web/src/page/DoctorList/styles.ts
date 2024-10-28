import styled from "styled-components";
import backgroundImage from "../../assets/img/header-page.jpg";
import { darken } from "polished";

export const Main = styled.div`
  flex: 1;
  width: 100%;
  height: 40vh;
  background: url(${backgroundImage}) no-repeat center center;
  background-size: cover;

  @media (max-width: 768px) {
    height: 20vh;
    padding: 1rem;
  }
`;

export const Section = styled.section`
  max-width: 950px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-left: 1%;
  width: 100%;
  
  h1 {
    font-family: 'Roboto';
    font-weight: 500;

    margin-top: 8%;
    margin-bottom: 10%;
    
    font-size: clamp(2rem, 2vw + 2rem, 4rem);
    color: ${(props) => props.theme.blue};
  }

  p {
    font-family: 'Roboto';
    font-weight: 200;
    
    margin-top: 8%;
    margin-bottom: 10%;
    
    font-size: clamp(2rem, 2vw + 2rem, 4rem);
    color: ${(props) => props.theme.background};
  }
`;

export const DoctorsContainer = styled.section`
  display: grid;
  max-width: 1200px;
  margin: auto;
  padding: 2%;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2%;
`;

export const DoctorCard = styled.div`
  background: ${(props) => props.theme.white};      
  padding: 5%;
  width: 90%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease-in;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  
  &:hover {
    transform: translateY(-0.7rem);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const DoctorInfoBox = styled.div`
  flex-grow: 1; 
  display: flex;
  flex-direction: column;
  
  align-items: center;
  text-align: center;
  justify-content: space-between;
`;

export const DoctorBio = styled.p`
  font-size: clamp(0.7rem, 0.7vw + 0.7rem, 0.9rem);
  color: ${(props) => darken(0.1, props.theme.gray)};      
`;


export const DoctorStats = styled.div`
  display: flex;
  justify-content: space-around;
  background: ${(props) => props.theme.background};      
  border-radius: 8px;
  padding: 2%;
  width: 95%;

  div {
    text-align: center;

    span {
      font-size: 13px;
      color: ${(props) => props.theme.gray};      
    }

    h2 {
      font-size: 18px;
      color: ${(props) => darken(0.1, props.theme.gray)};      
      margin-top: 5px;
    }
  }
`;


export const DoctorAvatar = styled.div`
  height: 95px;
  width: 95px;
  margin: 0 auto 20px;
  border-radius: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const DoctorDetails = styled.div`
  margin-bottom: 15px;
  
  .name {
    font-family: "Roboto";
    font-weight: bold;
    font-size: clamp(0.75rem, 0.75vw + 1rem, 1.5rem);
    text-transform: uppercase;
    margin-bottom: 5px;
    color: ${(props) => darken(0.1, props.theme.gray)};       
  }
  
  .username {
    font-size: clamp(0.9rem, 0.9vw + 0.9rem, 1.2rem);
    color: ${(props) => props.theme.blue};      
    
    padding: 0;
    margin: 0;
  }

  .join-date {
    font-size: clamp(0.6rem, 0.6vw + 0.6rem, 0.9rem);
    color: ${(props) => props.theme.gray};      
  }
`;
