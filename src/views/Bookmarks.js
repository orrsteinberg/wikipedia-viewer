import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Entries, Error } from "../components";

const ClearBookmarksButton = styled.button`
  max-width: 300px;
  margin: 30px auto 0 auto;
  border-radius: 5px;
  padding: 10px 20px;
  background: var(--color-clear-button);
  border: none;
  text-align: center;
  color: var(--color-white);
  font-size: 1.1rem;
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

const Bookmarks = ({
  bookmarks,
  addBookmark,
  removeBookmark,
  clearBookmarks,
}) => {
  return bookmarks.allIds.length === 0 ? (
    <Error message="No bookmarks to display" />
  ) : (
    <>
      <Entries
        entries={bookmarks}
        bookmarks={bookmarks}
        addBookmark={addBookmark}
        removeBookmark={removeBookmark}
      />
      <ClearBookmarksButton onClick={clearBookmarks}>
        Clear All Bookmarks
      </ClearBookmarksButton>
    </>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.object.isRequired,
  addBookmark: PropTypes.func.isRequired,
  removeBookmark: PropTypes.func.isRequired,
  clearBookmarks: PropTypes.func.isRequired,
};

export default Bookmarks;
