import styled from 'styled-components'
import { colors } from '../../../../styles/theme'

export const TableBodyContainer = styled.tbody`
  font-size: 17px;
  font-weight: 300;
  tr {
    :nth-child(even) {
      background-color: ${colors.gray};
    }
  }
  
  td {
    padding: 10px 0 10px 12px;
  }
`