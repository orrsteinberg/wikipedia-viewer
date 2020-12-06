import React from "react";
import PropTypes from "prop-types";

import { isEmpty } from "../lib/utils";
import { Entries, Loading, Error } from "../components";

const CurrentSearchView = ({
  entriesToView,
  status,
  error,
  searchForMore,
  bookmarks,
  addBookmark,
  removeBookmark,
}) => {
  // Conditions for displaying the Entries component
  const showEntries = status !== "fetching" && !isEmpty(entriesToView);

  // Only pass a 'load more' function when appropriate
  const loadMore = status === "error" ? null : searchForMore;

  return (
    <>
      {status === "fetching" && <Loading />}
      {showEntries && (
        <Entries
          entriesToView={entriesToView}
          loadMore={loadMore}
          {...{ bookmarks, addBookmark, removeBookmark }}
        />
      )}
      {status === "fetchingMore" && <Loading more />}
      {status === "error" && <Error message={error.message} />}
    </>
  );
};

CurrentSearchView.propTypes = {
  entriesToView: PropTypes.object.isRequired,
  status: PropTypes.string.isRequired,
  error: PropTypes.object, // not required since it can be null
  searchForMore: PropTypes.func.isRequired,
  bookmarks: PropTypes.object.isRequired,
  addBookmark: PropTypes.func.isRequired,
  removeBookmark: PropTypes.func.isRequired,
};

export default CurrentSearchView;
