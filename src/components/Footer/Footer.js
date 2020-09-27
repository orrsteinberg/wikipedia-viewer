import React from "react";
import { FooterWrapper, GithubIcon } from "./Footer.elements";

const Footer = () => {
  return (
    <FooterWrapper>
      <a
        href="https://www.github.com/orrsteinberg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon />
      </a>
    </FooterWrapper>
  );
};

export default Footer;
