import styled from "styled-components";
import { theme } from "../styles/Theme";

export const SectionTitle = styled.h2`
  margin-bottom: 90px;
  font-family: "Josefin Sans", sans-serif;
  text-align: center;
  font-weight: 600;
  font-size: 36px;
  letter-spacing: 0.08em;

  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: 55px;
    height: 1px;
    background-color: ${theme.colors.accentColor};

    position: absolute;
    left: 50%;
    bottom: -30px;
    transform: translateX(-50%);
  }
`;
