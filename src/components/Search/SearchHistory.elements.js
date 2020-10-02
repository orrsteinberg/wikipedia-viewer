import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export const SearchHistoryContainer = styled.div`
  margin: 25px auto 5px auto;

  @media screen and (min-width: 690px) {
    margin: 0 auto 5px 40px;
    text-align: left;
  }
`;

export const SearchHistoryButton = styled.button`
  margin-bottom: 10px;
  background: none;
  border: none;
  color: ${(props) => (props.active ? "#333" : "#13a360")};
  cursor: pointer;
  transition: all 0.2s ease-out;

  @media screen and (min-width: 690px) {
    margin-bottom: 10px;
  }
`;

export const List = styled.ul`
  list-style: none;
  text-align: left;
  overflow-y: scroll;
  padding: 0 10px;

  @media screen and (min-width: 690px) {
    border-top: 2px solid #eee;
    position: absolute;
    max-width: 300px;
    min-width: 150px;
    max-height: 250px;
  }
`;

export const ListItem = styled.li`
  background: #fff;
  color: #333;
  padding: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  &:nth-child(odd) {
    transform: skewX(25deg);
    border-left: 3px solid #7f0de9;
  }

  &:nth-child(even) {
    background: #fbfbfb;
    transform: skewX(-25deg);
    border-left: 3px solid #e64922;
  }
`;

export const ListItemText = styled.span`
  cursor: pointer;
  word-wrap: anywhere;
  margin-left: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

export const ListItemIcon = styled(FaSearch)`
  font-size: 20px;
  color: #eee;
`;

export const ClearHistoryButton = styled.button`
  width: 100%;
  background: #e83232;
  border: none;
  padding: 5px 10px;
  color: #fff;
  cursor: pointer;

  &:hover {
    background: #e83243;
  }
`;
