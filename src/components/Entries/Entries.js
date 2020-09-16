import React from "react";
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
        {entries.map((entry) => {
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

export default Entries;
