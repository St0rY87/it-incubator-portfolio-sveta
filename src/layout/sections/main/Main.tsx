import React from "react";
import photo from "../../../assets/images/main-photo.webp";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
  return (
    <div>
      <FlexWrapper justify="space-around" align-items={"center"}>
        <div>
          <span>Hi There</span>
          <h2>I am Svetlana Dyablo</h2>
          <h1>A Web Developer.</h1>
        </div>

        <Photo src={photo} />
      </FlexWrapper>
    </div>
  );
};

const StyledMain = styled.div`
  min-height: 100vh;
`;
const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`;
