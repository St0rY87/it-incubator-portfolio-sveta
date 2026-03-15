import styled from "styled-components";
import { HeaderMenuItem } from "./headerMenuItem/HeaderMenuItem";


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
    list-style-type: none;
  }
`;
