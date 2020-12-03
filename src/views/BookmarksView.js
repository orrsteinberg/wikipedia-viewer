import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { isEmpty } from "../lib/utils";
import { Entries, Error } from "../components";

const ClearBookmarksButton = styled.button`
  max-width: 300px;
  margin: 30px auto 0 auto;
  border-radius: 5px;
  padding: 10px 20px;
  background: #d21313;
  border: none;
  text-align: center;
  color: #fff;
  font-size: 1.1rem;
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

const BookmarksView = ({
  bookmarks,
  addBookmark,
  removeBookmark,
  clearBookmarks,
}) => {
  return isEmpty(bookmarks) ? (
    <Error message="No bookmarks to display" />
  ) : (
    <>
      <Entries
        entriesToView={bookmarks}
        {...{ bookmarks, addBookmark, removeBookmark }}
      />
      <ClearBookmarksButton onClick={clearBookmarks}>
        Clear All Bookmarks
      </ClearBookmarksButton>
    </>
  );
};

BookmarksView.propTypes = {
  bookmarks: PropTypes.object.isRequired,
  addBookmark: PropTypes.func.isRequired,
  removeBookmark: PropTypes.func.isRequired,
  clearBookmarks: PropTypes.func.isRequired,
};

export default BookmarksView;
