import styled from 'styled-components'
import { theme } from '../../../styles/theme'

export const SidebarNav = styled.nav`
  width: 180px;
  height: calc(100vh - 60px);
  font-weight: 500;
  font-size: 18px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.08);

  ul {
    list-style: none;
    li {
      display: flex;
      align-items: center;
      height: 42px;
      width: 120px;
      padding: 0 10px;
      border-radius: 20px 100px 100px 20px;
    }
  }

  .icon {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    fill: ${theme.onyx};
  }

  .active {
    background-color: ${theme.munsell};
    color: white;
    .icon {
      fill: white;
    }
  }
`