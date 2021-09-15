import styled from 'styled-components'
import { colors } from '../../../styles/theme'

export const TableHeadContainer = styled.thead`
  tr th {
    font-size: 18px;
    font-weight: 300;
    border-bottom: 5px ${colors.purple} solid;
    padding: 0 15px 8px;
    text-align: left;
  }

  .icon {
    width: 10px;
    color: ${colors.yellow}
  }
`