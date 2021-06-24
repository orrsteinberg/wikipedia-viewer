import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

export const FooterWrapper = styled.footer`
  margin-top: 40px;
  padding-top: 10px;
  background: var(--color-white);
  border-left: 8px solid var(--color-gray-lighter);
  border-right: 8px solid var(--color-gray-lighter);
  text-align: center;
`;

export const GithubIcon = styled(FaGithub)`
  font-size: 35px;
  transition: all 0.2s ease-in;
  color: var(--color-gray-dark);

  @media (hover: hover) {
    &:hover {
      color: var(--color-gray-darker);
    }
  }
`;
