import styled from 'styled-components'
import { theme } from '../../../styles/theme'

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 60px;
  padding: 0 30px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.08);

  a {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: ${theme.munsell};
    font-size: 15px;
    text-decoration: none;
  }
`