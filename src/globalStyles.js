import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
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

        &::before {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          height: 5px;
          width: 100%;
          background-image: linear-gradient(
            90deg,
            #7f0de9 11.76%,
            #ffffff 11.76%,
            #ffffff 26.47%,
            #22e6cc 26.47%,
            #22e6cc 38.24%,
            #e64922 38.24%,
            #e64922 50%,
            #7f0de9 50%,
            #7f0de9 61.76%,
            #ffffff 61.76%,
            #ffffff 76.47%,
            #22e6cc 76.47%,
            #22e6cc 88.24%,
            #e64922 88.24%,
            #e64922 100%
          );
          background-size: 300px 5px;
        }
    }

    span:focus, a:focus, svg:focus input:focus, button:focus {
      outline: none;

    }

    span:focus, a:focus {
      background: rgba(21, 156, 228, 0.4);
    }

    svg:focus {
      transform: scale(1.2);
    }

    input:focus, button:focus {
      box-shadow: 0 0 0 5px rgba(21, 156, 228, 0.4);
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

  &::before {
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

  &::after {
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
