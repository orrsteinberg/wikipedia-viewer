import React, { useState } from "react";

import { useBookmarks, useWikiSearch } from "./hooks";
import { GlobalStyle, MainContainer } from "./globalStyles";
import { CurrentSearchView, BookmarksView } from "./views";
import { Navbar, Header, Search, ScrollUpArrow, Footer } from "./components";

const App = () => {
  const [view, setView] = useState("currentSearch");
  const [{ status, entries, error }, search, searchForMore] = useWikiSearch();
  const [
    bookmarks,
    addBookmark,
    removeBookmark,
    clearBookmarks,
  ] = useBookmarks();

  let content;

  if (view === "currentSearch") {
    content = (
      <CurrentSearchView
        entriesToView={entries}
        {...{ status, error, searchForMore }}
        {...{ bookmarks, addBookmark, removeBookmark }}
      />
    );
  } else if (view === "bookmarks") {
    content = (
      <BookmarksView
        {...{ bookmarks, addBookmark, removeBookmark, clearBookmarks }}
      />
    );
  }

  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <Header />
        <Search search={search} changeView={setView} />
        <Navbar
          currentView={view}
          changeView={setView}
          numBookmarks={Object.keys(bookmarks).length}
        />
        {content}
        <ScrollUpArrow />
        <Footer />
      </MainContainer>
    </>
  );
};

export default App;
