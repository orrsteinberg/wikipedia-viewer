import styled from "styled-components";
import { Container } from "../../globalStyles";

export const SearchContainer = styled(Container)`
  flex-grow: 1;
  text-align: center;
  margin-bottom: 30px;
`;

export const SearchForm = styled.form`
  margin: 20px auto 30px auto;
  background-color: #fff;
  padding-top: 30px;
  padding-bottom: 30px;
  border-radius: 20px;
  border-bottom: 12px solid #eee;
  max-width: 960px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const SearchInput = styled.input`
  padding: 10px 20px;
  margin-right: 15px;
  max-width: 300px;
  border: 2px solid #eee;
  border-radius: 20px;
  font-size: 1.2rem;
`;

export const SearchButton = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;
  color: #e64922;
  font-size: 38px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

export const RandomArticleButton = styled.a`
  text-align: center;
  text-decoration: none;
  padding: 12px 12px;
  background-color: #13a360;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  transition: background-color 0.3s ease;
`;
