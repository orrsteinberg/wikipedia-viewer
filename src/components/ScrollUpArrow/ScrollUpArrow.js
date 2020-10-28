import React, { useState, useEffect, useCallback } from "react";
import styled, { keyframes } from "styled-components";
import { FaArrowCircleUp } from "react-icons/fa";

const fadeIn = keyframes`
    0% { opacity: 0; }
  100% { opacity: 0.5; }
`;

const ArrowIcon = styled(FaArrowCircleUp)`
  position: fixed;
  font-size: 70px;
  bottom: 50px;
  right: 20px;
  z-index: 1000;
  cursor: pointer;
  color: #13a360;
  animation: ${fadeIn} 0.3s;

  @media screen and (min-width: 690px) {
    font-size: 70px;
    bottom: 60px;
    right: 50px;
    opacity: 0.5;
    transition: opacity 0.3s;

    &:hover {
      opacity: 1;
    }
  }
`;

const ScrollUpArrow = () => {
  const [showArrow, setShowArrow] = useState(false);

  const checkScrollPosition = useCallback(() => {
    if (!showArrow && window.pageYOffset > 400) {
      setShowArrow(true);
    } else if (showArrow && window.pageYOffset <= 400) {
      setShowArrow(false);
    }
  }, [showArrow]);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);
  }, [checkScrollPosition]);

  return (
    showArrow && (
      <ArrowIcon
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
    )
  );
};

export default ScrollUpArrow;
