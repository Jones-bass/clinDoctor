import styled from 'styled-components'

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`

export const DropdownButton = styled.button`
  background: none;
  border: none;
`

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  width: 150px;
  padding: 8px 0;
  color: ${(props) => props.theme.text};

  font-family: 'Roboto' sans-serif;
  font-weight: 300;

  z-index: 1;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      padding: 8px 16px;
      cursor: pointer;
      &:hover {
        font-weight: 400;
        color: ${(props) => props.theme.textTitle};
        background: ${(props) => props.theme.background};
      }
    }
  }
`
