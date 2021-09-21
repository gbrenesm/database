import styled from 'styled-components'
import { colors } from '../../../../styles/theme'

export const TableHeadContainer = styled.thead`
  tr th {
    font-size: 18px;
    border-bottom: 5px ${colors.purple} solid;
    padding: 0 15px 8px;
    text-align: left;
  }

  .icon {
    width: 12px;
    color: ${colors.yellow}
  }
`