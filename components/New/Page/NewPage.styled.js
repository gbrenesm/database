import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const NewPage = styled.main`
  width: 75%;
  margin: 50px auto 0;

  h1,
  h2 {
    margin-bottom: 15px;
    color: ${colors.munsell};
  }

  h1 {
    text-align: center;
  }

  h2 {
    margin-top: 15px;
  }
`