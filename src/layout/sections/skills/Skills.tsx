import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>My Skills</SectionTitle>
      <FlexWrapper align="center" justify="center">
        <Skill
          iconId="codeSvg"
          title="html5"
          description="Lorem ipsumаа dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
        />
        <Skill
          iconId="css"
          title="CSS3"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
        />
        <Skill
          iconId="react"
          title="React"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
        />
        <Skill
          iconId="sc"
          title="Styled Components"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
        />
        <Skill
          iconId="css"
          title="CSS3"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
        />
        <Skill
          iconId="figma"
          title="Web design"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
        />
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  background-color: skyblue;
  min-height: 100vh;
`;
