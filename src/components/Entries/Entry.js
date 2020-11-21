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

const Entry = ({ entry, mobileDevice }) => {
  // If user is on mobile, use the mobile Wikipedia website version
  const articleUrl = mobileDevice
    ? `https://en.m.wikipedia.org/?curid=${entry.pageid}`
    : `https://en.wikipedia.org/?curid=${entry.pageid}`;

  return (
    <Card>
      <CardHeader>
        <CardHeaderWikiIcon aria-label="Wikipedia Logo" />
        <EntryTitle>
          <EntryLink href={articleUrl} target="_blank">
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
};

Entry.propTypes = {
  entry: PropTypes.object.isRequired,
  mobileDevice: PropTypes.bool.isRequired,
};

export default Entry;
