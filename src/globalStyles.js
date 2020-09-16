import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        font-family: "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
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
    margin-right: auto;
    margin-left: auto;
`;
