import React from "react";
import { GITHUB_URL } from "../../constants";
import { FooterWrapper, GithubIcon } from "./Footer.elements";

const Footer = () => {
  return (
    <FooterWrapper>
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Github Repo Link"
      >
        <GithubIcon aria-hidden="true" focusable="false" />
      </a>
    </FooterWrapper>
  );
};

export default Footer;
