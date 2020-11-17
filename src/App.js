import React, { useReducer } from "react";
import axios from "axios";
import { BASE_URL, NUM_ENTRIES_TO_FETCH } from "./constants";
import { reducer, initialState, actions } from "./state";
import { isEmpty, mergeEntries } from "./utils";
import { GlobalStyle, MainContainer } from "./globalStyles";
import {
  Header,
  Search,
  Entries,
  Error,
  Loading,
  ScrollUpArrow,
  Footer,
} from "./components";

const App = () => {
  const [
    { status, entries, error, currentQuery, currentOffset },
    dispatch,
  ] = useReducer(reducer, initialState);

  // Optional parameter for new queries, otherwise fetch the currentQuery value
  const searchWiki = async (newQuery) => {
    if (newQuery === currentQuery) {
      return;
    } else if (newQuery) {
      dispatch(actions.search(newQuery));
    } else {
      dispatch(actions.searchMore());
    }

    const params = {
      action: "query",
      list: "search",
      srsearch: newQuery || currentQuery,
      srlimit: NUM_ENTRIES_TO_FETCH,
      sroffset: newQuery ? 0 : currentOffset,
      format: "json",
      origin: "*",
    };

    try {
      const { data } = await axios.get(BASE_URL, { params });

      // If no results
      if (data.query.search.length === 0) {
        if (newQuery) {
          dispatch(actions.clearEntries());
          dispatch(actions.setError("No results found"));
        } else {
          dispatch(actions.setError("No more entries to load"));
        }
        return;
      }

      // Update entries and current offset (the point from which to keep fetching)
      const mergedEntries = mergeEntries({
        currentEntries: newQuery ? {} : entries,
        newEntries: data.query.search,
      });
      dispatch(actions.updateEntries(mergedEntries, data.continue.sroffset));
    } catch (err) {
      dispatch(actions.setError("Oops! Something went wrong"));
    }
  };

  const showEntries =
    (status === "idle" || status === "fetchingMore") && !isEmpty(entries);

  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <Header />
        <Search searchWiki={searchWiki} />
        {status === "fetching" && <Loading />}
        {showEntries && <Entries entries={entries} searchMore={searchWiki} />}
        {status === "fetchingMore" && <Loading more />}
        {status === "error" && <Error message={error.message} />}
        <ScrollUpArrow />
        <Footer />
      </MainContainer>
    </>
  );
};

export default App;
