import styled, { keyframes } from "styled-components";
import { CgSearchLoading } from "react-icons/cg";
import { Container } from "../../globalStyles";

const pulse = keyframes`
    50% { transform: scale(2) }
    100% { transform: scale(1) }
`;

export const LoadingContainer = styled(Container)`
  padding-top: 30px;
  text-align: center;
`;

export const LoadingIcon = styled(CgSearchLoading)`
  color: #fff;
  font-size: 4rem;
  animation-name: ${pulse};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;

export const LoadingText = styled.p`
  margin-top: 20px;
  color: #fff;
  font-size: 1.2rem;
`;
