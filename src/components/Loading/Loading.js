import React from "react";
import { LoadingIcon, LoadingText, LoadingContainer } from "./Loading.elements";

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingIcon />
      <LoadingText>Searching...</LoadingText>
    </LoadingContainer>
  );
};

export default Loading;
