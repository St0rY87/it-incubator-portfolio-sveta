import styled from 'styled-components';
import { theme } from '../styles/Theme';


export const Link = styled.a`
  position: relative;
  z-index: 0;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 10px;
  &:hover {
    &:before {
      height: 10px;
    }
  }

  &:before {
    content: "";
    display: inline-block;
    background-color: ${theme.colors.accentColor};
    position: absolute;
    z-index: -1;
    bottom: 8px;
    left: 0;
    right: 0;
  }
`;
