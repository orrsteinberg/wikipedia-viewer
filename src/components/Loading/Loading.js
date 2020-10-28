import React from "react";
import PropTypes from "prop-types";
import { LoadingIcon, LoadingText, LoadingContainer } from "./Loading.elements";

const Loading = ({ more }) => {
  return more ? (
    <LoadingContainer>
      <LoadingText>Loading more...</LoadingText>
    </LoadingContainer>
  ) : (
    <LoadingContainer>
      <LoadingIcon />
      <LoadingText>Searching...</LoadingText>
    </LoadingContainer>
  );
};

Loading.propTypes = {
  more: PropTypes.bool,
};

export default Loading;
