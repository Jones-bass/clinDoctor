import styled from 'styled-components'

export const Container = styled.div`
  border-radius: 10px;
  padding: 5% 0% 5% 0%;
  width: 100%;
  border: 1px solid ${(props) => props.theme.textTitle};
  color: ${(props) => props.theme.textTitle};

  display: flex;
  align-items: center;

  .icon {
    margin-left: 2%;
  }

  & + div {
    margin-top: 14px;
    margin-bottom: 14px;
  }

  input {
    flex: 1;
    background: transparent;
    border: none;
    color: ${(props) => props.theme.textTitle};
    padding: 5px;

    &::placeholder {
      color: ${(props) => props.theme.textTitle};
    }

    &:focus {
      outline: none;
    }
  }

  svg {
    margin-right: 6px;
  }
`

export const ErrorText = styled.span`
  display: block;
  padding: 0px 0px 0px 10px;

  color: #c53030;
  margin-bottom: 4px;
  font-size: 12px;
  text-align: start;
`
