import styled from "styled-components";
import { FaWikipediaW } from "react-icons/fa";

export const HeaderWrapper = styled.div`
  text-align: center;
  padding-top: 20px;
  color: #fff;
`;

export const Logo = styled(FaWikipediaW)`
  border-bottom: 3px solid #e64922;
  padding-bottom: 5px;
`;

export const HeaderTitle = styled.h1`
  margin: 5px;
  font-weight: 700;
  font-size: 3rem;
  letter-spacing: -2px;
`;

export const HeaderSubtitle = styled.h2`
  margin-top: 5px;
  letter-spacing: 3px;
  color: #dfdfdf;
`;
