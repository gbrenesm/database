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

  a {
    color: #000;
    text-decoration: none;
    padding-left: 0.125em;
    padding-right: 0.125em;
    padding-bottom: 0.05em;
    position: relative;
  ::after {
    content: '';
    position: absolute;
    top: 100%;
    border-bottom: 0.125em solid ${colors.yellow};
    transition: all 0.35s;
    right: 50%;
    left: 50%;
    }
  :hover::after {
    transition: all 0.35s;
    right: 0;
    left: 0;
  }
  }
`