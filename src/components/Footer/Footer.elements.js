import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

export const FooterWrapper = styled.footer`
  margin-top: 40px;
  padding-top: 10px;
  background: #fff;
  border-left: 8px solid #e64922;
  border-right: 8px solid #7f0de9;
  text-align: center;
`;

export const GithubIcon = styled(FaGithub)`
  font-size: 30px;
  color: #333;
`;
