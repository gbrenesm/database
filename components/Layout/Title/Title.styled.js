import styled from "styled-components"
import { colors } from '../../../styles/theme'

export const TitleHeader = styled.div`
  h1 {
    font: 300 28px 'Poppins', sans-serif;
  }

  hr {
    color: ${colors.purple};
    width: 70%;
    border: 3px solid ${colors.purple};
    border-radius: 2px;
    margin-top: 6px;
  }
`

export const Title2 = styled.h2`
  font: bold 24px 'Poppins', sans-serif;
  margin-bottom: 10px;
`