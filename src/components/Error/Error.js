import React from "react";
import PropTypes from "prop-types";
import { ErrorText } from "./Error.elements";

const Error = ({ message }) => {
  return <ErrorText>{message}</ErrorText>;
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
