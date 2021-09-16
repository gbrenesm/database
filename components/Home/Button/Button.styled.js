import styled from 'styled-components'
import { colors, constantes } from '../../../styles/theme'

export const AddButton = styled.button`
  width: 130px;
  height: 40px;
  background-color: ${colors.red};
  border: none;
  border-radius: ${constantes.borderRadius};
  font: 16px 'Open Sans', sans-serif;
  
  a {
    color: #FFF;
    text-decoration: none;
  }
`