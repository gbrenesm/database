import styled from 'styled-components'
import { colors, constantes } from '../../../styles/theme'

export const AddButton = styled.button`
  width: 100px;
  height: 30px;
  color: #FFF;
  background-color: ${colors.red};
  border: none;
  border-radius: ${constantes.borderRadius};
  font: 16px 'Open Sans', sans-serif;
`