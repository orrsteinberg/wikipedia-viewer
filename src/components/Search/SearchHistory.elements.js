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
  padding: 5px;
  border-radius: 10px;
  margin-bottom: 10px;
  background: none;
  border: none;
  color: ${(props) => (props.active ? "#333" : "#1d8253")};
  font-size: 1.2rem;
  cursor: pointer;

  @media screen and (min-width: 690px) {
    margin-bottom: 0;
    font-size: 1rem;
  }
`;

export const List = styled.ul`
  list-style: none;
  text-align: left;
  overflow-y: auto;
  padding: 0 10px;
  max-height: 350px;
  /* Custom Scrollbar */
  scrollbar-width: thin;
  scrollbar-color: #e64922 transparent;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
  }

  &::-webkit-scrollbar-thumb {
    background-color: #e64922;
    border-radius: 20px;
    border: 3px solid #fff;
  }

  @media screen and (min-width: 690px) {
    border-top: ${(props) => (props.isOpen ? "2px solid #eee" : "none")};
    visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
    position: absolute;
    z-index: 1;
    min-width: 150px;
    max-height: 40%;
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
    border-left: 3px solid #7f0de9;
  }

  &:nth-child(even) {
    background: #fbfbfb;
    border-left: 3px solid #e64922;
  }

  @media screen and (min-width: 690px) {
    &:nth-child(odd) {
      transform: skewX(8deg);
    }

    &:nth-child(even) {
      transform: skewX(-8deg);
    }
  }
`;

export const ListItemButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  word-wrap: anywhere;
  margin-left: 5px;
  margin-right: 5px;
  font-size: 1.1rem;

  &:focus {
    box-shadow: none;
    background: rgba(21, 156, 228, 0.4);
  }

  @media (hover: hover) {
    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and (min-width: 690px) {
    font-size: 1rem;
  }
`;

export const ListItemIcon = styled(FaSearch)`
  font-size: 20px;
  color: #eee;
`;

export const ListItemDeleteButton = styled.button`
  background: none;
  border: none;
  padding: 5px;
  font-size: 1.2rem;
  color: #e83232;
  cursor: pointer;

  @media screen and (min-width: 690px) {
    font-size: 1rem;
  }
`;

export const ClearHistoryButton = styled.button`
  width: 100%;
  background: #d21313;
  border: none;
  padding: 5px 10px;
  color: #fff;
  font-size: 1.1rem;
  text-transform: uppercase;
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      background: #e31e1e;
    }
  }

  @media screen and (min-width: 690px) {
    font-size: 1rem;
  }
`;
