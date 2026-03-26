import styled from "styled-components";
import { Link } from "../../../../../components/Link";

export const TabMenuItem = (props: { item: string }) => {
  return (
    <ListItem>
      <Link href="#">{props.item}</Link>
    </ListItem>
  );
};

const ListItem = styled.li``;

