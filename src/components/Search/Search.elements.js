import styled from "styled-components";
import { Container } from "../../globalStyles";

export const SearchContainer = styled(Container)`
  text-align: center;
`;

export const SearchArea = styled.div`
  margin: 20px auto 30px auto;
  background-color: var(--color-white);
  padding-top: 30px;
  padding-bottom: 10px;
  border-radius: 20px;
  border-bottom: 12px solid var(--color-gray-lighter);
  max-width: 960px;
  min-height: 145px;
`;

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 690px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const SearchInput = styled.input`
  padding: 10px 20px;
  max-width: 300px;
  border: 2px solid var(--color-gray-lighter);
  border-radius: 20px;
  font-size: 1.5rem;
  margin-bottom: 20px;
  transition: all 0.2s ease-out;

  &:focus {
    outline: 0;
    border: 2px solid var(--color-orange);
  }

  @media screen and (min-width: 690px) {
    margin-right: 15px;
    margin-bottom: 5px;
    font-size: 1.3rem;
  }
`;

export const SearchButton = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  color: var(--color-orange);
  font-size: 3.2rem;
  transition: transform 0.2s ease;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.2);
    }

    &:disabled:hover {
      transform: scale(1);
    }
  }

  &:focus {
    box-shadow: none;
    transform: scale(1.2);
  }

  &:disabled {
    color: var(--color-gray-lighter);
    cursor: auto;
  }

  @media screen and (min-width: 690px) {
    font-size: 2.6rem;
  }
`;
