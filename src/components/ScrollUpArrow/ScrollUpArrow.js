import React, { useState, useEffect, useCallback } from "react";
import styled, { keyframes } from "styled-components";
import { MdKeyboardArrowUp } from "react-icons/md";

const fadeIn = keyframes`
    0% { opacity: 0; }
  100% { opacity: 0.5; }
`;

const ArrowIcon = styled(MdKeyboardArrowUp)`
  position: fixed;
  font-size: 65px;
  bottom: 50px;
  right: 20px;
  z-index: 1000;
  cursor: pointer;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0px 0px 3px #555;
  animation: ${fadeIn} 0.3s;

  @media screen and (min-width: 690px) {
    transition: all 0.3s;

    @media (hover: hover) {
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;

function throttle(callback, interval) {
  let allowCall = true;

  return () => {
    if (!allowCall) return;

    allowCall = false;
    callback();

    setTimeout(() => {
      allowCall = true;
    }, interval);
  };
}

const ScrollUpArrow = () => {
  const [showArrow, setShowArrow] = useState(false);

  const checkScrollPosition = useCallback(
    throttle(() => {
      if (!showArrow && window.pageYOffset > 400) {
        setShowArrow(true);
      } else if (showArrow && window.pageYOffset <= 400) {
        setShowArrow(false);
      }
    }, 300),
    [showArrow]
  );

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);
  }, [checkScrollPosition]);

  return (
    showArrow && (
      <ArrowIcon
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-hidden="true"
      />
    )
  );
};

export default ScrollUpArrow;
