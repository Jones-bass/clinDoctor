import { darken } from 'polished'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 1% 0% 1% 0%;

  .user-info {
    img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
    }

    @media (max-width: 480px) {
      img {
        width: 40px;
        height: 40px;
      }
    }
  }

  nav {
    display: flex;

    text-align: center;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    max-width: 99%;
    width: 100%;

    .logo {
      width: 80px;
    }

    .abas {
      display: flex;

      padding: 1%;
      width: 80%;
      justify-content: end;
      gap: 2%;

      a {
        color: ${(props) => props.theme.text};
        text-decoration: none;
        padding: 1%;
        font-size: clamp(0.5rem, 0.8vw + 0.8rem, 1.2rem);
        transition: color 0.3s;

        font-family: 'Roboto' sans-serif;
        font-weight: 200;

        position: relative;
        cursor: pointer;

        &:hover {
          color: ${(props) => props.theme.blue_100};
          font-weight: 300;
        }

        &::after {
          content: '';
          height: 2px;
          border-radius: 3px 3px 0 0;
          width: 0;
          position: absolute;
          bottom: 1px;
          left: 0;
          background: ${(props) => props.theme.blue_100};
          transition: width 0.3s ease;
        }

        &:hover::after {
          width: 100%;
        }

        &.active {
          color: ${(props) => props.theme.blue_100};
          font-weight: bold;
        }

        &.active::after {
          content: '';
          height: 2px;
          border-radius: 3px 3px 0 0;
          width: 100%;
          position: absolute;
          left: 0;
          background: ${(props) => props.theme.blue_100};
        }
      }
    }

    @media (max-width: 480px) {
      .logo {
        margin-left: 10%;
        width: 50px;
        height: 50px;
      }
    }
  }
`

export const ButtonIcon = styled.button`
  background: ${(props) => props.theme.blue};

  margin-left: 1%;
  width: 8%;
  height: 50px;
  border: 0;
  transition: background-color 0.2s;
  border-radius: 8px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  transition: background-color 0.3s;

  > span {
    font-size: clamp(0.5rem, 0.5vw + 0.5rem, 1rem);
    color: ${(props) => props.theme.background};
  }

  .icon-user {
    color: ${(props) => props.theme.background};
    font-size: 1.2rem;
  }

  &:hover {
    background: ${(props) => darken(0.1, props.theme.blue)};
  }

  @media (max-width: 760px) {
    height: 35px;
    gap: 0px;
    background-color: transparent;

    .icon-user {
      padding: 1%;
      font-size: 1.5rem;
      color: ${(props) => darken(0.1, props.theme.blue)};
    }

    span {
      visibility: hidden;
      width: 0;
      height: 0;
    }
  }

  @media (max-width: 480px) {
    span {
      visibility: hidden;
      width: 0;
      height: 0;
    }

    nav {
      width: 100%;

      img {
        background-color: red;
      }
    }
  }
`
