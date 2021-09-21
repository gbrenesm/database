import styled from 'styled-components'
import { colors } from '../../../../styles/theme'

export const TableBodyContainer = styled.tbody`
  tr {
    font: 300 17px 'Poppins', sans-serif;
    :nth-child(even) {
      background-color: ${colors.gray};
    }
  }
  
  td {
    padding: 10px 0 10px 12px;
  }
`