import styled from 'styled-components'
import { theme } from '../../../styles/theme'

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    margin-right: 8px;
    font-size: 18px;
  }

  input,
  textarea {
    font: 16px 'KoHo', sans-serif;
    border: 1px solid ${theme.onyx};
    border-radius: 6px;
    padding: 5px 10px; 
  }

  input {
    flex: 1;
  }

  >div {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  }

  .dates-div,
  .general-div,
  .fact-div {
    justify-content: space-between;
    div {
      display: flex;
      align-items: center;
    }
  }


  .dates-div,
  .fact-div {
    div {
      width: 48%;
    }
  }

  .general-div {
    div {
      width: 30%;
    }
  }

  .textarea-div {
    flex-direction: column;
    align-items: flex-start;
    label {
      margin-bottom: 8px;
    }
  }

  textarea {
    width: 100%;
  }

  button {
    width: 130px;
    height: 30px;
    border: none;
    border-radius: 5px;
    margin-top: 20px;
    align-self: flex-end;
    color: white;
    background-color: ${theme.munsell};
    font-size: 15px;
  }
`