import styled from "styled-components";
import { FaStar } from "react-icons/fa";

import { Container } from "../../globalStyles";

export const NavContainer = styled(Container)`
  flex-grow: 1;
`;

export const Nav = styled.nav`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  padding-bottom: 10px;
  max-width: 960px;
`;

export const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  @media screen and (max-width: 690px) {
    /* Push the middle list item down on small screens */
    & > li:nth-child(2) {
      order: 3;
    }

    & > li:nth-child(3) {
      order: 2;
    }
  }
`;

export const NavListItem = styled.li`
  width: 100%;

  @media screen and (min-width: 690px) {
    width: 33%;
  }
`;

export const BackButton = styled.button`
  display: block;
  border: none;
  margin: auto;
  background-color: var(--color-button-bg);
  padding: 10px 20px;
  font-size: 1rem;
  color: var(--color-white);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;

  @media (hover: hover) {
    &:hover {
      filter: brightness(1.2);
    }
  }
`;

export const RandomArticleButton = styled.a`
  display: block;
  text-align: center;
  text-decoration: none;
  padding: 12px 12px;
  margin: 20px auto auto auto;
  max-width: 160px;
  color: var(--color-white);
  border-bottom: 3px dashed var(--color-random-article-border);
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;

  @media (hover: hover) {
    &:hover {
      border-bottom: 3px dashed var(--color-teal);
    }
  }

  @media screen and (min-width: 690px) {
    margin: auto;
  }
`;

export const BookmarksButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: end;
  border: none;
  margin: auto;
  background-color: var(--color-button-bg);
  padding: 10px 20px;
  font-size: 1rem;
  color: var(--color-white);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;

  @media (hover: hover) {
    &:hover {
      filter: brightness(1.2);
    }
  }
`;

export const StarIcon = styled(FaStar)`
  color: var(--color-gold);
  font-size: 20px;
  margin-left: 5px;
`;
