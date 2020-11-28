import React, { useState } from "react";
import PropTypes from "prop-types";

import { Tooltip } from "../../globalStyles";
import {
  Card,
  CardHeader,
  CardBody,
  EntryTitle,
  CardHeaderWikiIcon,
  EntryTitleLink,
  EntryText,
  CardButtons,
  ArticleLink,
  BookmarkStarIcon,
} from "./Entry.elements";

const Entry = ({ entry, isMobileUser }) => {
  const [bookmarked, setBookmarked] = useState(false);

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
        <CardButtons>
          <ArticleLink href={articleUrl} target="_blank">
            Visit article page &rarr;
          </ArticleLink>
          <Tooltip data-text="Bookmark">
            <BookmarkStarIcon
              role="button"
              aria-label="Bookmark Button"
              tabIndex="0"
              $bookmarked={bookmarked}
              onClick={() => setBookmarked(!bookmarked)}
            />
          </Tooltip>
        </CardButtons>
      </CardBody>
    </Card>
  );
};

Entry.propTypes = {
  entry: PropTypes.object.isRequired,
  isMobileUser: PropTypes.bool.isRequired,
};

export default Entry;
