import styled from 'styled-components'
import { theme } from '../../../styles/theme'

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 60px;
  padding: 0 30px;
  background-color: ${theme.purple};
  background: linear-gradient(90deg, ${theme.red} 21%, ${theme.purple} 74%);

  h1 {
    color: white;
    font-size: 20px;
  }
`