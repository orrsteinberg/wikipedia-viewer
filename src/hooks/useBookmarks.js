import { useState, useEffect, useCallback } from "react";

import { mergeEntries } from "../lib/utils";

const initialState = {
  byId: {},
  allIds: [],
};

const useBookmarks = () => {
  const [bookmarks, setBookmarks] = useState(() => initialState);

  useEffect(() => {
    // Load bookmarks from localStorage
    const localBookmarks = window.localStorage.getItem("bookmarks");
    if (localBookmarks) {
      setBookmarks(JSON.parse(localBookmarks));
    }
  }, [setBookmarks]);

  const updateBookmarks = useCallback((updatedBookmarks) => {
    window.localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    setBookmarks(updatedBookmarks);
  }, []);

  const addBookmark = useCallback(
    (entry) => {
      const updatedBookmarks = mergeEntries({
        currentEntries: bookmarks,
        newEntries: [entry],
      });
      updateBookmarks(updatedBookmarks);
    },
    [bookmarks, updateBookmarks]
  );

  const removeBookmark = useCallback(
    (entryId) => {
      const { entryId: throwaway, ...remainingBookmarksById } = bookmarks.byId;
      updateBookmarks({
        byId: remainingBookmarksById,
        allIds: bookmarks.allIds.filter((id) => id !== entryId),
      });
    },
    [bookmarks, updateBookmarks]
  );

  const clearBookmarks = useCallback(() => {
    updateBookmarks(initialState);
  }, [updateBookmarks]);

  return [bookmarks, addBookmark, removeBookmark, clearBookmarks];
};

export default useBookmarks;
