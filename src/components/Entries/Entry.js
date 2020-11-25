import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  EntryTitle,
  CardHeaderWikiIcon,
  EntryTitleLink,
  EntryText,
  ArticleLink,
} from "./Entry.elements";

const Entry = ({ entry, isMobileUser }) => {
  // If user is on mobile, use the mobile Wikipedia website version
  const articleUrl = isMobileUser
    ? `https://en.m.wikipedia.org/?curid=${entry.pageid}`
    : `https://en.wikipedia.org/?curid=${entry.pageid}`;

  return (
    <Card>
      <CardHeader>
        <CardHeaderWikiIcon aria-label="Wikipedia Logo" />
        <EntryTitle>
          <EntryTitleLink href={articleUrl} target="_blank">
            {entry.title}
          </EntryTitleLink>
        </EntryTitle>
      </CardHeader>
      <CardBody>
        <EntryText
          dangerouslySetInnerHTML={{ __html: entry.snippet + "..." }}
        />
        <ArticleLink href={articleUrl} target="_blank">
          Visit article page &rarr;
        </ArticleLink>
      </CardBody>
    </Card>
  );
};

Entry.propTypes = {
  entry: PropTypes.object.isRequired,
  isMobileUser: PropTypes.bool.isRequired,
};

export default Entry;
