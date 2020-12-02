import React from "react";
import PropTypes from "prop-types";

import { RANDOM_URL_MOBILE, RANDOM_URL_DESKTOP } from "../../lib/constants";
import { isMobile } from "../../lib/utils";
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

export const Navbar = ({ numBookmarks, currentView, changeView }) => {
  return (
    <NavContainer>
      <Nav>
        <NavList>
          <NavListItem>
            {currentView === "bookmarks" && (
              <BackButton onClick={() => changeView("currentSearch")}>
                &larr; Back to search results
              </BackButton>
            )}
          </NavListItem>
          <NavListItem>
            <RandomArticleButton
              href={isMobile() ? RANDOM_URL_MOBILE : RANDOM_URL_DESKTOP}
              target="_blank"
            >
              Random Article{" "}
              <span role="img" aria-hidden="true">
                🔮
              </span>
            </RandomArticleButton>
          </NavListItem>
          <NavListItem>
            {currentView === "currentSearch" && (
              <BookmarksButton onClick={() => changeView("bookmarks")}>
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
  currentView: PropTypes.string.isRequired,
  changeView: PropTypes.func.isRequired,
};

export default Navbar;
