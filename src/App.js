import React, { useReducer, useState, useEffect } from "react";
import axios from "axios";

import { API_URL, NUM_ENTRIES_TO_FETCH } from "./constants";
import { reducer, initialState, actions } from "./state";
import { isEmpty, mergeEntries } from "./utils";
import { GlobalStyle, MainContainer } from "./globalStyles";
import {
  Navbar,
  Header,
  Search,
  Entries,
  Error,
  Loading,
  ScrollUpArrow,
  Footer,
} from "./components";

const App = () => {
  const [{ status, entries, error, current }, dispatch] = useReducer(
    reducer,
    initialState
  );

  /*
   Temporary state management for bookmarks
   */
  const [bookmarks, setBookmarks] = useState({});
  const [view, setView] = useState("search"); // "search" | "bookmarks"

  useEffect(() => {
    // Load bookmarks from localStorage
    const localBookmarks = window.localStorage.getItem("bookmarks");
    if (localBookmarks) {
      setBookmarks(JSON.parse(localBookmarks));
    }
  }, []);

  const addBookmark = (entry) => {
    const updatedBookmarks = mergeEntries({
      currentEntries: bookmarks,
      newEntries: [entry],
    });
    window.localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    setBookmarks(updatedBookmarks);
  };

  const removeBookmark = (entryId) => {
    // Use destructuring to assign the entry to a throwaway variable,
    // then only keep the remaining entries
    let { [`_${entryId}`]: omit, ...remainingBookmarks } = bookmarks;
    if (!remainingBookmarks) {
      remainingBookmarks = [];
    }
    window.localStorage.setItem(
      "bookmarks",
      JSON.stringify(remainingBookmarks)
    );
    setBookmarks(remainingBookmarks);
  };

  /*
   * End
   */

  // Optional parameter for new queries, otherwise fetch the current query value
  const searchWiki = async (newQuery = false) => {
    // Redirect to search view to follow the search
    setView("search");

    if (newQuery && newQuery === current.query) {
      return;
    } else if (newQuery) {
      dispatch(actions.fetch(newQuery));
    } else {
      dispatch(actions.fetchMore());
    }

    const params = {
      action: "query",
      list: "search",
      srsearch: newQuery || current.query,
      srlimit: NUM_ENTRIES_TO_FETCH,
      sroffset: newQuery ? 0 : current.offset,
      format: "json",
      origin: "*",
    };

    try {
      const { data } = await axios.get(API_URL, { params });

      // If no results were found, return 'no results'
      if (data.query.search.length === 0) {
        return newQuery
          ? dispatch(actions.noResults())
          : dispatch(actions.noMoreResults());
      }

      // Otherwise update entries and current offset (the point from which to keep fetching)
      const updatedEntries = mergeEntries({
        currentEntries: newQuery ? {} : entries,
        newEntries: data.query.search,
      });
      dispatch(actions.fetchSuccess(updatedEntries, data.continue.sroffset));
    } catch (err) {
      dispatch(actions.fetchError());
    }
  };

  // Conditions for displaying the Entries component
  const showEntries =
    (status === "idle" || status === "fetchingMore") && !isEmpty(entries);

  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <Header />
        <Search searchWiki={searchWiki} />
        <Navbar
          view={view}
          setView={setView}
          numBookmarks={Object.keys(bookmarks).length}
        />
        {view === "search" && (
          <>
            {status === "fetching" && <Loading />}
            {showEntries && (
              <Entries
                entries={entries}
                loadMore={searchWiki}
                bookmarks={bookmarks}
                addBookmark={addBookmark}
                removeBookmark={removeBookmark}
              />
            )}
            {status === "fetchingMore" && <Loading more />}
            {status === "error" && <Error message={error.message} />}
          </>
        )}
        {view === "bookmarks" && (
          <>
            <Entries
              entries={bookmarks}
              bookmarks={bookmarks}
              addBookmark={addBookmark}
              removeBookmark={removeBookmark}
            />
          </>
        )}
        <ScrollUpArrow />
        <Footer />
      </MainContainer>
    </>
  );
};

export default App;
