import styled from "styled-components"
import { colors } from '../../../styles/theme'

export const GeneralInfo = styled.main`
  h2 {
    font: bold 24px 'Poppins', sans-serif;
    margin-bottom: 10px;
  }

  ul,
  p {
    font: 300 18px 'Poppins', sans-serif;
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
    list-style: none;
    padding: 0;
    li {
      margin-bottom: 8px;
    }
  }
`