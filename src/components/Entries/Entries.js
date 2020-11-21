import React from "react";
import PropTypes from "prop-types";

import { isMobile } from "../../utils";
import { EntriesContainer, LoadMore, LoadMoreButton } from "./Entries.elements";
import Entry from "./Entry";

const Entries = ({ entries, searchMore }) => {
  // Check if the user is on a mobile device to create appropriate entry links
  const mobileDevice = isMobile();

  return (
    <main>
      <EntriesContainer>
        {Object.values(entries).map((entry) => (
          <Entry key={entry.pageid} entry={entry} mobileDevice={mobileDevice} />
        ))}
        <LoadMore>
          <LoadMoreButton onClick={() => searchMore()}>
            Load more
          </LoadMoreButton>
        </LoadMore>
      </EntriesContainer>
    </main>
  );
};

Entries.propTypes = {
  entries: PropTypes.object.isRequired,
  searchMore: PropTypes.func.isRequired,
};

export default Entries;
