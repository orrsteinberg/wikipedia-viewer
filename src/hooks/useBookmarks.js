import { useState, useEffect } from "react";

import { mergeEntries } from "../utils";

const useBookmarks = () => {
  const [bookmarks, setBookmarks] = useState({});

  useEffect(() => {
    // Load bookmarks from localStorage
    const localBookmarks = window.localStorage.getItem("bookmarks");
    if (localBookmarks) {
      setBookmarks(JSON.parse(localBookmarks));
    }
  }, [setBookmarks]);

  const updateBookmarks = (updatedBookmarks) => {
    window.localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    setBookmarks(updatedBookmarks);
  };

  const addBookmark = (entry) => {
    const updatedBookmarks = mergeEntries({
      currentEntries: bookmarks,
      newEntries: [entry],
    });
    updateBookmarks(updatedBookmarks);
  };

  const removeBookmark = (entryId) => {
    // Use destructuring to assign the selected entry to a throwaway variable,
    // then only keep the remaining entries (or the empty object)
    let { [`_${entryId}`]: throwaway, ...remainingBookmarks } = bookmarks;
    updateBookmarks(remainingBookmarks);
  };

  const clearBookmarks = () => {
    updateBookmarks({});
  };

  return [bookmarks, addBookmark, removeBookmark, clearBookmarks];
};

export default useBookmarks;
