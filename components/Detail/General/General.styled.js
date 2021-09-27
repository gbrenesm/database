import styled from "styled-components"
import { colors } from '../../../styles/theme'

export const GeneralInfo = styled.main`
  h1 {
    font: 300 28px 'Poppins', sans-serif;
  }

  h2 {
    font: bold 24px 'Poppins', sans-serif;
    margin-bottom: 10px;
  }

  hr {
    color: ${colors.purple};
    width: 60%;
    border: 3px solid ${colors.purple};
    border-radius: 2px;
    margin-top: 6px;
  }

  >div {
    display: flex;
    margin-top: 20px;
    div:nth-child(1) {
      width: 60%;
      margin-right: 25px;
    }
  }

  ul {
    font: 300 18px 'Poppins', sans-serif;
    list-style: none;
    padding: 0;
    li {
      margin-bottom: 8px;
    }
  }
`