import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

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
  BookmarkStar,
} from "./Entry.elements";

const Entry = ({
  entry,
  isMobileUser,
  isBookmarked,
  addBookmark,
  removeBookmark,
}) => {
  const [bookmarked, setBookmarked] = useState(isBookmarked);

  // If user is on mobile, use the mobile Wikipedia website version
  const articleUrl = isMobileUser
    ? `https://en.m.wikipedia.org/wiki/${entry.title.replace(/ /g, "_")}`
    : `https://en.wikipedia.org/wiki/${entry.title.replace(/ /g, "_")}`;

  const handleClick = () => {
    // Toggle current bookmark status and bookmarks update state
    if (bookmarked) {
      removeBookmark(entry.pageid);
    } else {
      addBookmark(entry);
    }

    setBookmarked(!bookmarked);
  };

  const markup = {
    __html: entry.snippet + "...",
  };

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
        <EntryText dangerouslySetInnerHTML={markup} />
        <CardButtons>
          <ArticleLink href={articleUrl} target="_blank">
            Visit article page &rarr;
          </ArticleLink>
          <Tooltip data-text="Bookmark">
            <BookmarkStar
              aria-label="Bookmark Button"
              onClick={handleClick}
              $bookmarked={bookmarked}
            >
              <FaStar />
            </BookmarkStar>
          </Tooltip>
        </CardButtons>
      </CardBody>
    </Card>
  );
};

Entry.propTypes = {
  entry: PropTypes.object.isRequired,
  isMobileUser: PropTypes.bool.isRequired,
  isBookmarked: PropTypes.bool.isRequired,
  addBookmark: PropTypes.func.isRequired,
  removeBookmark: PropTypes.func.isRequired,
};

export default Entry;
