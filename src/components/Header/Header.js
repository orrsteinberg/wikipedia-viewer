import React from "react";
import { Container } from "../../globalStyles";
import {
  HeaderWrapper,
  Logo,
  HeaderTitle,
  HeaderSubtitle,
} from "./Header.elements";

const Header = () => {
  return (
    <header>
      <Container>
        <HeaderWrapper>
          <Logo aria-label="Wikipedia Logo" />
          <HeaderTitle>Wikipedia Viewer</HeaderTitle>
          <HeaderSubtitle>What are you interested in?</HeaderSubtitle>
        </HeaderWrapper>
      </Container>
    </header>
  );
};

export default Header;
