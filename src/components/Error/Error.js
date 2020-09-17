import React from "react";
import { ErrorText } from "./Error.elements";

const Error = ({ message }) => {
  return <ErrorText>{message}</ErrorText>;
};

export default Error;
