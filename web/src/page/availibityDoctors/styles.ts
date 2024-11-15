import styled from 'styled-components'
import { darken } from 'polished'

export const Content = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const DoctorCard = styled.div`
  background: ${(props) => props.theme.white};
  padding: 0% 8% 0% 8%;
  width: 90%;
  border-radius: 8px;
`

export const DoctorInfoBox = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  text-align: center;
  justify-content: space-between;
`

export const DoctorBio = styled.p`
  font-size: clamp(0.7rem, 0.7vw + 0.7rem, 0.9rem);
  color: ${(props) => darken(0.1, props.theme.gray)};
`

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
      font-size: clamp(0.7rem, 0.8vw + 0.8rem, 1rem);
      color: ${(props) => props.theme.gray};
    }

    h2 {
      font-size: clamp(0.7rem, 0.9vw + 0.9rem, 1.2rem);
      color: ${(props) => darken(0.1, props.theme.gray)};
      margin-top: 5px;
    }
  }
`

export const DoctorAvatar = styled.div`
  height: 175px;
  width: 175px;
  margin: 0 auto 20px;
  border-radius: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const DoctorDetails = styled.div`
  margin-bottom: 15px;

  .name {
    font-family: 'Roboto';
    font-weight: bold;
    font-size: clamp(0.75rem, 1vw + 1rem, 1.8rem);
    text-transform: uppercase;
    margin-bottom: 5px;
    color: ${(props) => darken(0.1, props.theme.gray)};
  }

  .username {
    font-size: clamp(0.9rem, 0.9vw + 0.9rem, 1.5rem);
    color: ${(props) => props.theme.blue};

    padding: 0;
    margin: 0;
  }

  .join-date {
    font-size: clamp(0.6rem, 0.6vw + 0.6rem, 0.9rem);
    color: ${(props) => props.theme.gray};
  }
`

export const CalenderWrapper = styled.div`
  align-items: center;
  text-align: center;
  justify-content: flex-start;

  & > div {
    width: 100%;
  }

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`

export const AvailabilityList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;

  width: 70%;

  h3 {
    font-size: clamp(0.9rem, 0.9vw + 0.9rem, 1rem);
    background: ${(props) => props.theme.blue_200};

    width: 100%;
    padding: 5%;
    text-align: center;
    color: ${(props) => props.theme.background};
  }

  li {
    display: flex;
    justify-content: space-between;
    padding: 2%;
    align-items: center;
    position: relative;

    &:last-child {
      border-bottom: none;
    }

    span {
      font-size: clamp(0.6rem, 0.7vw + 0.7rem, 0.8rem);
      color: ${(props) => props.theme.text};
      position: relative;
    }

    .available {
      color: ${(props) => props.theme.success};
      display: flex;
      align-items: center;
    }

    .unavailable {
      color: ${(props) => props.theme.danger};
      display: flex;
      align-items: center;

      svg {
        margin-right: 8px;
      }

      &::after {
        content: '';
        position: absolute;
        bottom: 8px; /* Distância da linha em relação ao texto */
        left: 0;
        width: 100%;
        height: 1px; /* Espessura da linha */
        background-color: ${(props) => props.theme.text}; /* Cor da linha */
      }
    }
  }
`
