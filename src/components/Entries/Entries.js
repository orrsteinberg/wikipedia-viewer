import React from "react";
import PropTypes from "prop-types";

import { isMobile } from "../../lib/utils";
import { EntriesContainer, LoadMore, LoadMoreButton } from "./Entries.elements";
import Entry from "./Entry";

const Entries = ({
  entriesToView,
  loadMore,
  bookmarks,
  addBookmark,
  removeBookmark,
}) => {
  // Check if the user is on a mobile device to create appropriate wiki page links
  const isMobileUser = isMobile();

  const isEntryBookmarked = (entryId) => Boolean(bookmarks[`_${entryId}`]);

  return (
    <main>
      <EntriesContainer>
        {Object.values(entriesToView).map((entry) => (
          <Entry
            key={entry.pageid}
            entry={entry}
            isMobileUser={isMobileUser}
            isBookmarked={isEntryBookmarked(entry.pageid)}
            addBookmark={addBookmark}
            removeBookmark={removeBookmark}
          />
        ))}
        {loadMore && (
          <LoadMore>
            <LoadMoreButton onClick={() => loadMore()}>
              Load more
            </LoadMoreButton>
          </LoadMore>
        )}
      </EntriesContainer>
    </main>
  );
};

Entries.propTypes = {
  entriesToView: PropTypes.object.isRequired,
  bookmarks: PropTypes.object.isRequired,
  addBookmark: PropTypes.func.isRequired,
  removeBookmark: PropTypes.func.isRequired,
  loadMore: PropTypes.func, // required for search results, not for bookmarks
};

export default Entries;
