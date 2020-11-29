import React from "react";
import PropTypes from "prop-types";

import { RANDOM_URL_MOBILE, RANDOM_URL_DESKTOP } from "../../constants";
import { isMobile } from "../../utils";
import {
  NavContainer,
  Nav,
  NavList,
  NavListItem,
  BackButton,
  RandomArticleButton,
  BookmarksButton,
  StarIcon,
} from "./Navbar.elements";

export const Navbar = ({ numBookmarks, view, setView }) => {
  return (
    <NavContainer>
      <Nav>
        <NavList>
          <NavListItem>
            {view === "bookmarks" && (
              <BackButton onClick={() => setView("search")}>
                &larr; Back to search results
              </BackButton>
            )}
          </NavListItem>
          <NavListItem>
            <RandomArticleButton
              href={isMobile() ? RANDOM_URL_MOBILE : RANDOM_URL_DESKTOP}
              target="_blank"
            >
              Random Article{"  "}
              <span role="img" aria-hidden="true">
                ✨
              </span>
            </RandomArticleButton>
          </NavListItem>
          <NavListItem>
            {view === "search" && (
              <BookmarksButton onClick={() => setView("bookmarks")}>
                {numBookmarks} {numBookmarks === 1 ? "Bookmark" : "Bookmarks"}{" "}
                <StarIcon />
              </BookmarksButton>
            )}
          </NavListItem>
        </NavList>
      </Nav>
    </NavContainer>
  );
};

Navbar.propTypes = {
  numBookmarks: PropTypes.number.isRequired,
  view: PropTypes.string.isRequired,
  setView: PropTypes.func.isRequired,
};

export default Navbar;
