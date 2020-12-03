import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        overflow-x: hidden;
        font-family: Roboto, "Helvetica Neue", Arial, sans-serif;
        background-color: #0d1a4f;
        color: #333;
        font-size: 1rem;
        line-height: 1.5;
    }
`;

export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
`;

export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const Tooltip = styled.span`
  position: relative;
  font-size: 0.8rem;

  &:before {
    content: attr(data-text);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 100%;
    margin-right: 15px;
    padding: 5px 10px;
    border-radius: 10px;
    background: #333;
    color: #fff;
    text-align: center;

    display: none;
  }

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 100%;
    border: 8px solid #333;
    border-color: transparent transparent transparent #333;
    display: none;
  }

  @media (hover: hover) {
    &:hover:before,
    &:hover:after {
      display: block;
    }
  }
`;
