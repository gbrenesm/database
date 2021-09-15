import styled from 'styled-components'
import { colors, constantes } from '../../../styles/theme'

export const SearchcContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${colors.gray};
  border-radius: ${constantes.borderRadius};
  padding-right: 5px;
  .icon {
    width: 16px;
  }
`

export const Searchinput = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  font: 15px 'Open Sans', sans-serif;
  
`