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
        background-color: #273c72;
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
