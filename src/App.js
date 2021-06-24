import React, { useState } from "react";

import { useBookmarks, useWikiSearch } from "./hooks";
import { GlobalStyle, MainContainer } from "./globalStyles";
import { CurrentSearch, Bookmarks } from "./views";
import { Navbar, Header, Search, ScrollUpArrow, Footer } from "./components";

const App = () => {
  const [view, setView] = useState("currentSearch");
  const [{ status, entries, error }, search, searchForMore] = useWikiSearch();
  const [bookmarks, addBookmark, removeBookmark, clearBookmarks] =
    useBookmarks();

  let content;

  if (view === "currentSearch") {
    content = (
      <CurrentSearch
        entries={entries}
        status={status}
        error={error}
        searchForMore={searchForMore}
        bookmarks={bookmarks}
        addBookmark={addBookmark}
        removeBookmark={removeBookmark}
      />
    );
  } else if (view === "bookmarks") {
    content = (
      <Bookmarks
        bookmarks={bookmarks}
        addBookmark={addBookmark}
        removeBookmark={removeBookmark}
        clearBookmarks={clearBookmarks}
      />
    );
  }

  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <Header />
        <Search status={status} search={search} changeView={setView} />
        <Navbar
          currentView={view}
          changeView={setView}
          numBookmarks={bookmarks.allIds.length}
        />
        {content}
        <ScrollUpArrow />
        <Footer />
      </MainContainer>
    </>
  );
};

export default App;
