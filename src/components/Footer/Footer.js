import React from "react";
import { Container } from "../../globalStyles";
import { FooterWrapper, GithubIcon } from "./Footer.elements";

const Footer = () => {
  return (
    <FooterWrapper>
      <a href="https://www.github.com" target="_blank">
        <GithubIcon />
      </a>
    </FooterWrapper>
  );
};

export default Footer;
