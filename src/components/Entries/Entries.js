import React from "react";
import PropTypes from "prop-types";
import {
  EntriesContainer,
  Card,
  CardHeader,
  CardBody,
  EntryTitle,
  CardHeaderWikiIcon,
  EntryLink,
  EntryText,
  LoadMore,
  LoadMoreButton,
} from "./Entries.elements";

const Entries = ({ entries, fetchEntries }) => {
  return (
    <main>
      <EntriesContainer>
        {Object.values(entries).map((entry) => {
          return (
            <Card key={entry.pageid}>
              <CardHeader>
                <CardHeaderWikiIcon />
                <EntryTitle>
                  <EntryLink
                    href={`https://en.wikipedia.org/?curid=${entry.pageid}`}
                    target="_blank"
                  >
                    {entry.title}
                  </EntryLink>
                </EntryTitle>
              </CardHeader>
              <CardBody>
                <EntryText
                  dangerouslySetInnerHTML={{ __html: entry.snippet + "..." }}
                />
              </CardBody>
            </Card>
          );
        })}
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
};

export default Entries;
