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
  const [{ status, entries, error, current }, dispatch] = useReducer(
    reducer,
    initialState
  );

  // Optional parameter for new queries, otherwise fetch the current query value
  const searchWiki = async (newQuery = false) => {
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
      const { data } = await axios.get(BASE_URL, { params });

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
