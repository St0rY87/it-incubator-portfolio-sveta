import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Menu } from "../../../components/menu/Menu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import socialImg from "./../../../assets/images/social.webp";
import timerImg from "./../../../assets/images/timer.webp";

const menuWorkItems = ["All", "landing page", "React", "spa"];

export const Works = () => {
  return (
    <StyledWorks>
      <SectionTitle>My works</SectionTitle>
      <Menu menuItems={menuWorkItems} />
      <FlexWrapper justify="center" gap='30px'>
        <Work
          src={socialImg}
          title={"Social Network"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          }
        />
        <Work
          src={timerImg}
          title={"Timer"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          }
        />
      </FlexWrapper>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: violet;
`;
