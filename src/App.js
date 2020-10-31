import React, { useState } from "react";
import axios from "axios";
import { BASE_URL, NUM_ENTRIES_TO_FETCH } from "./constants";
import { isEmpty, mergeEntries } from "./utils";
import {
  Header,
  Search,
  Entries,
  Error,
  Loading,
  ScrollUpArrow,
  Footer,
} from "./components";
import { GlobalStyle, MainContainer } from "./globalStyles";

const App = () => {
  const [entries, setEntries] = useState({}); // Arange entries by ID for easy filtering
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [currentQuery, setCurrentQuery] = useState("");
  const [currentOffset, setCurrentOffset] = useState(0);

  // Optional parameter for new queries
  const fetchEntries = (newQuery) => {
    setError(null);

    if (newQuery && newQuery === currentQuery) {
      return;
    } else if (newQuery) {
      setCurrentQuery(newQuery);
      setLoading(true);
    } else {
      setLoadingMore(true);
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

    axios
      .get(BASE_URL, { params })
      .then(({ data }) => {
        setLoading(false);
        setLoadingMore(false);

        if (data.query.search.length === 0) {
          if (newQuery) {
            setEntries({});
            setError("No results found");
          } else {
            setError("No more entries to load");
          }
          return;
        }

        // Add new entries and update offset (the point from which to keep fetching)
        setEntries((currentEntries) =>
          mergeEntries(data.query.search, newQuery ? {} : currentEntries)
        );
        setCurrentOffset(data.continue.sroffset);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        setLoadingMore(false);
        setError("Oops! Something went wrong");
      });
  };

  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <Header />
        <Search fetchEntries={fetchEntries} />
        {loading && <Loading />}
        {!isEmpty(entries) && (
          <Entries entries={entries} fetchEntries={fetchEntries} />
        )}
        {loadingMore && <Loading more />}
        {error && <Error message={error} />}
        <ScrollUpArrow />
        <Footer />
      </MainContainer>
    </>
  );
};

export default App;
