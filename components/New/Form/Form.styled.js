import styled from 'styled-components'
import { theme } from '../../../styles/theme'

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  >div {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    div {
      margin-right: 20px;
    }
  }

  .textarea-div {
    flex-direction: column;
    align-items: flex-start;
    label {
      margin-bottom: 8px;
    }
  }

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

  textarea {
    width: 100%;
  }

  #name {
    width: 100%;
  }

  #birthday,
  #death {
    width: 40%;
  }
`