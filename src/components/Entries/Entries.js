import React, { useMemo } from "react";
import PropTypes from "prop-types";

import { isMobile } from "../../lib/utils";
import { EntriesContainer, LoadMore, LoadMoreButton } from "./Entries.elements";
import Entry from "./Entry";

const Entries = ({
  entries,
  loadMore,
  bookmarks,
  addBookmark,
  removeBookmark,
}) => {
  // Check if the user is on a mobile device to create appropriate wiki page links
  const isMobileUser = useMemo(isMobile, []);

  const isBookmarked = (entryId) => Boolean(bookmarks[`_${entryId}`]);

  return (
    <main>
      <EntriesContainer>
        {Object.values(entries).map((entry) => (
          <Entry
            key={entry.pageid}
            entry={entry}
            isMobileUser={isMobileUser}
            isBookmarked={isBookmarked(entry.pageid)}
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
  entries: PropTypes.object.isRequired,
  bookmarks: PropTypes.object.isRequired,
  addBookmark: PropTypes.func.isRequired,
  removeBookmark: PropTypes.func.isRequired,
  loadMore: PropTypes.func, // required for search results, not for bookmarks
};

export default Entries;
