import React from "react";
import PropTypes from "prop-types";

import { Entries, Loading, Error } from "../components";

const CurrentSearch = ({
  entries,
  status,
  error,
  searchForMore,
  bookmarks,
  addBookmark,
  removeBookmark,
}) => {
  // Conditions for displaying the Entries component
  const showEntries = status !== "fetching" && entries.allIds.length > 0;

  // Only pass a 'load more' function when appropriate
  const loadMore = status === "error" ? null : searchForMore;

  return (
    <>
      {status === "fetching" && <Loading />}
      {showEntries && (
        <Entries
          entries={entries}
          loadMore={loadMore}
          bookmarks={bookmarks}
          addBookmark={addBookmark}
          removeBookmark={removeBookmark}
        />
      )}
      {status === "fetchingMore" && <Loading more />}
      {status === "error" && <Error message={error.message} />}
    </>
  );
};

CurrentSearch.propTypes = {
  entries: PropTypes.object.isRequired,
  status: PropTypes.string.isRequired,
  error: PropTypes.object, // not required since it can be null
  searchForMore: PropTypes.func.isRequired,
  bookmarks: PropTypes.object.isRequired,
  addBookmark: PropTypes.func.isRequired,
  removeBookmark: PropTypes.func.isRequired,
};

export default CurrentSearch;
