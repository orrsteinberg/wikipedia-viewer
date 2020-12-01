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

  const renderCurrentView = () => {
    if (view === "currentSearch") {
      return (
        <CurrentSearchView
          entriesToView={entries}
          {...{ status, error, searchForMore }}
          {...{ bookmarks, addBookmark, removeBookmark }}
        />
      );
    } else if (view === "bookmarks") {
      return (
        <BookmarksView
          {...{ bookmarks, addBookmark, removeBookmark, clearBookmarks }}
        />
      );
    }
  };

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
        {renderCurrentView()}
        <ScrollUpArrow />
        <Footer />
      </MainContainer>
    </>
  );
};

export default App;
