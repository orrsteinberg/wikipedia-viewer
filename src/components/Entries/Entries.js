import React from "react";
import PropTypes from "prop-types";
import Entry from "./Entry";
import { EntriesContainer, LoadMore, LoadMoreButton } from "./Entries.elements";

const Entries = ({ entries, fetchEntries }) => {
  return (
    <main>
      <EntriesContainer>
        {Object.values(entries).map((entry) => (
          <Entry key={entry.pageid} entry={entry} />
        ))}
        <LoadMore>
          <LoadMoreButton onClick={() => fetchEntries()}>
            Load more
          </LoadMoreButton>
        </LoadMore>
      </EntriesContainer>
    </main>
  );
};

Entries.propTypes = {
  entries: PropTypes.object.isRequired,
  fetchEntries: PropTypes.func.isRequired,
};

export default Entries;
