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
          <Logo />
          <HeaderTitle />
          <HeaderSubtitle />
        </HeaderWrapper>
      </Container>
    </header>
  );
};

export default Header;
