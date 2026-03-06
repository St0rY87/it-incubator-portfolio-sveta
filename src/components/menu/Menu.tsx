import styled from "styled-components";
import { MenuItem } from "./MenuItem/MenuItem";

export const Menu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledMenu>
      <ul>
        {props.menuItems.map((item) => (
          <MenuItem key={item} item={item} />
        ))}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 10px;
    list-style-type: none;
  }
`;
