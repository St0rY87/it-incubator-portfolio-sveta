import styled from "styled-components";
// import { TabMenuItem } from "./tabMenuItem/TabMenuItem";
import { TabMenuItem } from "./tabMenuItem/TabMenuItem";

export const TabMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledTabMenu>
      <ul>
        {props.menuItems.map((item) => (
          <TabMenuItem key={item} item={item} />
        ))}
      </ul>
    </StyledTabMenu>
  );
};

const StyledTabMenu = styled.nav`
  margin-inline: auto;
  width: max-content;
  margin-bottom: 40px;
  ul {
    display: flex;
    gap: 10px;
    list-style-type: none;
  }
`;
