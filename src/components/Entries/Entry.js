import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  EntryTitle,
  CardHeaderWikiIcon,
  EntryLink,
  EntryText,
} from "./Entry.elements";

const Entry = ({ entry }) => (
  <Card>
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
      <EntryText dangerouslySetInnerHTML={{ __html: entry.snippet + "..." }} />
    </CardBody>
  </Card>
);

Entry.propTypes = {
  entry: PropTypes.object.isRequired,
};

export default Entry;
