import styled from "styled-components";
import { FaWikipediaW } from "react-icons/fa";

export const HeaderWrapper = styled.div`
  text-align: center;
  padding-top: 20px;
  color: var(--color-white);
`;

export const Logo = styled(FaWikipediaW)`
  display: inline-block;
  border-bottom: 3px solid var(--colror-orange);
  font-size: 30px;
  padding: 5px 0;
`;

export const HeaderTitle = styled.h1`
  margin: 5px;
  font-weight: 700;
  font-size: 3rem;
  letter-spacing: -2px;
  line-height: 1.2;
`;

export const HeaderSubtitle = styled.h2`
  margin-top: 5px;
  font-weight: 400;
  font-size: 2rem;
  letter-spacing: 3px;
  line-height: 1.2;
  color: var(--color-header-subtitle);
`;
