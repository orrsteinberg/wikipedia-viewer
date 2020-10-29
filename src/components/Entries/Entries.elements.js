import styled from "styled-components";
import { Container } from "../../globalStyles";

export const EntriesContainer = styled(Container)`
  margin-top: 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

export const LoadMore = styled.div`
  flex-basis: 100%;
  padding-top: 20px;
  text-align: center;
`;

export const LoadMoreButton = styled.button`
  text-align: center;
  text-decoration: none;
  margin: auto;
  padding: 12px 12px;
  margin-left: auto;
  border: 0;
  background-color: #e64922;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #13a360;
  }
`;
