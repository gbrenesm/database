import styled from 'styled-components'
import { colors } from '../../../styles/theme'

export const Form = styled.form`
  width: 95%;
  margin: 30px auto;
  font-size: 18px;
  
  input, 
  textarea,
  select {
    font-family: 'Open Sans', sans-serif;
    border-radius: 5px;
    border: 1px solid black;
    padding: 5px 10px;
  }

  .input-container {
    display: flex;
    margin-top: 8px;
    input,
    select {
      margin-left: 5px;
    }
  }

  .text-area {
    flex-direction: column;
    textarea {
      width: 90%;
      margin-top: 5px;
    }
  }

  .in-line {
    
  }

  // For the first name label and input
  .name {
    margin: 10px 0;
    input {
      width: 50%;
    }
  }

  .datos {
    width: 90%;
    display: flex;
    justify-content: space-between;
  }
`