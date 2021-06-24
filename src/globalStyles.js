import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
      --color-purple: #7f0de9;
      --color-teal: #22e6cc;
      --color-orange: #e64922;
      --color-white: #ffffff;
      --color-light: #fbfbfb;
      --color-gray-lighter: #eeeeee;
      --color-gray-light: #cccccc;
      --color-gray-medium: #747474;
      --color-gray-dark: #333333;
      --color-gray-darker: #222222;
      --color-bg: #0d1a4f;
      --color-header-subtitle: #dfdfdf;
      --color-focus: rgba(21, 156, 228, 0.4);
      --color-text-highlight: #f1fdb9;
      --color-link: #007bff;
      --color-link-hover: #0056b3;
      --color-button-bg: #12255b;
      --color-gold: #ffd700;
      --color-shadow: #555555;
      --color-random-article-border: #13a360;
      --color-history-button-text: #1d8253;
      --color-delete-button: #e83232;
      --color-clear-button: #d21313;
      --color-clear-button-hover: #e31e1e;
    }

    *, *::before, *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        overflow-x: hidden;
        font-family: Roboto, "Helvetica Neue", Arial, sans-serif;
        background-color: var(--color-bg);
        color: var(--color-gray-dark);
        font-size: 1rem;
        line-height: 1.5;

        &::before {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          height: 5px;
          width: 100%;
          background-image: linear-gradient(
            90deg,
            var(--color-purple) 11.76%,
            var(--color-white) 11.76%,
            var(--color-white) 26.47%,
            var(--color-teal) 26.47%,
            var(--color-teal) 38.24%,
            var(--color-orange) 38.24%,
            var(--color-orange) 50%,
            var(--color-purple) 50%,
            var(--color-purple) 61.76%,
            var(--color-white) 61.76%,
            var(--color-white) 76.47%,
            var(--color-teal) 76.47%,
            var(--color-teal) 88.24%,
            var(--color-orange) 88.24%,
            var(--color-orange) 100%
          );
          background-size: 300px 5px;
        }
    }

    span:focus, a:focus, svg:focus input:focus, button:focus {
      outline: none;

    }

    span:focus, a:focus {
      background: var(--color-focus);
    }

    svg:focus {
      transform: scale(1.2);
    }

    input:focus, button:focus {
      box-shadow: 0 0 0 5px var(--color-focus);
    }
`;

// Reusable styled componets

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

  &::before {
    content: attr(data-text);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 100%;
    margin-right: 15px;
    padding: 5px 10px;
    border-radius: 10px;
    background: var(--color-gray-dark);
    color: var(--color-white);
    text-align: center;

    display: none;
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 100%;
    border: 8px solid var(--color-gray-dark);
    border-color: transparent transparent transparent var(--color-gray-dark);
    display: none;
  }

  @media (hover: hover) {
    &:hover:before,
    &:hover:after {
      display: block;
    }
  }
`;
