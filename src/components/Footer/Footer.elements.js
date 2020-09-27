import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

export const FooterWrapper = styled.footer`
  margin-top: 40px;
  padding-top: 10px;
  background: #fff;
  border-left: 8px solid #eee;
  border-right: 8px solid #eee;
  text-align: center;
`;

export const GithubIcon = styled(FaGithub)`
  font-size: 35px;
  transition: all 0.2s ease-in;
  color: #333;

  &:hover {
    color: #222;
  }
`;
