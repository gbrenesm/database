import styled from 'styled-components'
import { theme } from '../../../styles/theme'

export const TableHeadContainer = styled.thead`
  tr th {
    font-size: 18px;
    font-weight: 300;
    border-bottom: 5px ${theme.purple} solid;
    padding: 0 15px 8px;
    text-align: left;
  }

  .icon {
    width: 10px;
    color: ${theme.yellow}
  }
`