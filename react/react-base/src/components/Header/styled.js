import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const NavBar = styled.nav`
  background: ${primaryColor};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: #fff;
    margin: 0 10px 0;
    font-weight: bold;
  }
`;
