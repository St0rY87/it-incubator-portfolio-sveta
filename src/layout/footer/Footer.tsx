import styled from "styled-components";
import { SectionTitle } from "../../components/SectionTitle";
import { Menu } from "../../components/menu/Menu";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";

const items = [];

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction="column" align="center">
        <Name>Svetlana</Name>
        <SocialList>
          <SocialItem>
            <SocialLink>
              <Icon height='21' width='21' viewBox='0 0 21 21' iconId="insta" />
            </SocialLink>
          </SocialItem>

          <SocialItem>
            <SocialLink>
              <Icon height='21' width='21' viewBox='0 0 21 21' iconId="telegram" />
            </SocialLink>
          </SocialItem>

          <SocialItem>
            <SocialLink>
              <Icon height='21' width='21' viewBox='0 0 21 21' iconId="vk" />
            </SocialLink>
          </SocialItem>

          <SocialItem>
            <SocialLink>
              <Icon height='21' width='21' viewBox='0 0 21 21' iconId="linkedin" />
            </SocialLink>
          </SocialItem>
        </SocialList>
        <CopyRight>© 2023 Svetlana Dyablo, All Rights Reserved.</CopyRight>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: lightslategrey;
  min-height: 30vh;
`;
const Name = styled.h2`
  text-align: center;
  color: red;
`;

const SocialList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 30px;
`;
const SocialItem = styled.li``;
const SocialLink = styled.a``;
const CopyRight = styled.small``;
