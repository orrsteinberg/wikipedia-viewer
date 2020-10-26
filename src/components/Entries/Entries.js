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
} from "./Entries.elements";

const Entries = ({ entries }) => {
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
      </EntriesContainer>
    </main>
  );
};

Entries.propTypes = {
  entries: PropTypes.object.isRequired,
  //entries: PropTypes.arrayOf(
  //  PropTypes.shape({
  //    pageid: PropTypes.number.isRequired,
  //    title: PropTypes.string.isRequired,
  //    snippet: PropTypes.string.isRequired,
  //  })
  //).isRequired,
};

export default Entries;
