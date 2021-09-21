import styled from 'styled-components'
import { colors } from '../../../styles/theme'

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 60px;
  padding: 0 30px;
  background-color: ${colors.purple};
  background: linear-gradient(90deg, ${colors.red} 21%, ${colors.purple} 74%);

  h1 {
    color: white;
    font-size: 20px;
  }

  a {
    text-decoration: none;
  }
`