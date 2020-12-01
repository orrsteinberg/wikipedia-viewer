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
  const showEntries =
    (status === "idle" || status === "fetchingMore") && !isEmpty(entriesToView);

  return (
    <>
      {status === "fetching" && <Loading />}
      {showEntries && (
        <Entries
          entriesToView={entriesToView}
          loadMore={searchForMore}
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
