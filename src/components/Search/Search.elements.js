import styled from "styled-components";
import { Container } from "../../globalStyles";

export const SearchContainer = styled(Container)`
  text-align: center;
`;

export const SearchArea = styled.div`
  margin: 20px auto 30px auto;
  background-color: #fff;
  padding-top: 30px;
  padding-bottom: 10px;
  border-radius: 20px;
  border-bottom: 12px solid #eee;
  max-width: 960px;
  min-height: 135px;
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
  border: 2px solid #eee;
  border-radius: 20px;
  font-size: 1.5rem;
  margin-bottom: 20px;
  transition: all 0.2s ease-out;

  &:focus {
    border: 2px solid #e64922;
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
  outline: none;
  color: #e64922;
  font-size: 3.2rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }

  &:focus {
    border-bottom: 2px solid #eee;
  }

  @media screen and (min-width: 690px) {
    font-size: 2.6rem;
  }
`;
