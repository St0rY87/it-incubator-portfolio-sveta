import styled from "styled-components";
import { HeaderMenuItem } from "./headerMenuItem/HeaderMenuItem";
import { theme } from "../../../styles/Theme";


export const HeaderMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledHeaderMenu>
      <ul>
        {props.menuItems.map((item) => (
          <HeaderMenuItem key={item} item={item} />
        ))}
      </ul>
    </StyledHeaderMenu>
  );
};

const StyledHeaderMenu = styled.nav`
    width: min(100%, 600px);

  ul {
    display: flex;
    justify-content: space-between;
  }

  @media ${theme.media.tablet} {
    display: none;
  }
`;
