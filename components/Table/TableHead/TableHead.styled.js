import styled from 'styled-components'
import { theme } from '../../../styles/theme'

export const TableHeadContainer = styled.thead`
  color: white;
  background-color: ${theme.munsell};
  tr {
    border-radius: 5px;
    th {
      padding: 10px 0;
    }
  }
`