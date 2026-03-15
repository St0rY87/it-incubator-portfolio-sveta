import styled from "styled-components";
import { theme } from "../../../../styles/Theme";

export const HeaderMenuItem = (props: { item: string }) => {
  return (
    <ListItem>
      <Link href="#">
        <span>{props.item}</span>
        <Mask>
          <span>{props.item}</span>
        </Mask>
        <Mask>
          <span>{props.item}</span>
        </Mask>
      </Link>
    </ListItem>
  );
};

const Link = styled.a`
  font-family: "Josefin Sans", "sans-serif";
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  color: #7572d5;
    & > span:first-child {
        opacity: 0;
    }
`;

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  color: ${theme.colors.accentColor};

  & + & {
    /* position: absolute; */

    top: 50%;
    span {
      /* position: absolute; */
      display: inline-block;
      transform: translateY(-50%);
      /* top: -50%; */
    }
  }
`;

const ListItem = styled.li`
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    height: 3px;
    background-color: ${theme.colors.accentColor};


    position: absolute;
    top:50%;
    left: -10px;
    right: -10px;
    z-index: 1;

    transform: scale(0);
  }

  &:hover {
    &::before {
        transform: scale(1)
    }
    ${Mask} {
      transform: skewX(12deg) translateX(5px);
      color:${theme.colors.font};
      & + ${Mask} {
        transform: skewX(12deg) translateX(-5px);
      }
    }
  }
`;
