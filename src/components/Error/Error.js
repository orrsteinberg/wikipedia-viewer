import React from "react";
import { Container } from "../../globalStyles";
import { ErrorText } from "./Error.elements";

const Error = ({ message }) => {
  return (
    <Container>
      <ErrorText>{message}</ErrorText>
    </Container>
  );
};

export default Error;
