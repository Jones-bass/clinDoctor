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


