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
  color: ${(props) =>
    props.active
      ? "var(--color-gray-dark)"
      : "var(--color-history-button-text)"};
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
  display: ${(props) => (props.isOpen ? "block" : "none")};
  /* Custom Scrollbar */
  scrollbar-width: thin;
  scrollbar-color: var(c--color-orange) transparent;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(c--color-orange);
    border-radius: 20px;
    border: 3px solid var(--color-white);
  }

  @media screen and (min-width: 690px) {
    border-top: ${(props) =>
      props.isOpen ? "2px solid var(--color-gray-lighter)" : "none"};
    position: absolute;
    z-index: 1;
    min-width: 150px;
    max-height: 40%;
  }
`;

export const ListItem = styled.li`
  background: var(--color-white);
  color: var(--color-gray-dark);
  padding: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  &:nth-child(odd) {
    border-left: 3px solid var(--color-purple);
  }

  &:nth-child(even) {
    background: var(--color-light);
    border-left: 3px solid var(--color-orange);
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
    background: var(--color-focus);
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
  color: var(--color-gray-lighter);
`;

export const ListItemDeleteButton = styled.button`
  background: none;
  border: none;
  padding: 5px;
  font-size: 1.2rem;
  color: var(--color-delete-button);
  cursor: pointer;

  @media screen and (min-width: 690px) {
    font-size: 1rem;
  }
`;

export const ClearHistoryButton = styled.button`
  width: 100%;
  background: var(--color-clear-button);
  border: none;
  padding: 5px 10px;
  color: var(--color-white);
  font-size: 1.1rem;
  text-transform: uppercase;
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      background: var(--color-clear-button-hover);
    }
  }

  @media screen and (min-width: 690px) {
    font-size: 1rem;
  }
`;
