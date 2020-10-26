import React, { useState } from "react";
import axios from "axios";
import { BASE_URL, NUM_ENTRIES_TO_FETCH } from "./constants.js";
import { Header, Search, Entries, Error, Loading, Footer } from "./components";
import { GlobalStyle, MainContainer } from "./globalStyles.js";

const App = () => {
  const [entries, setEntries] = useState({}); // Arange entries by ID for easy filtering
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentOffset, setCurrentOffset] = useState(0);

  const clearPreviousQuery = () => {
    setEntries({});
    setCurrentOffset(0);
  };

  const fetchEntries = (query) => {
    // TODO: CHANGE THIS DEPENDING ON TYPE OF FETCH (FIRST OR MORE)
    setError(null);
    setLoading(true);

    const params = {
      action: "query",
      list: "search",
      srsearch: query,
      srlimit: NUM_ENTRIES_TO_FETCH,
      sroffset: currentOffset, // when more results are available, use this to continue
      format: "json",
      origin: "*",
    };

    axios
      .get(BASE_URL, { params })
      .then(({ data }) => {
        setLoading(false);

        if (data.query.search.length === 0) {
          setError("No results found");
          return;
        }

        // Update offsate (the point from which to keep fetching)
        setCurrentOffset(data.continue.sroffset);

        // Avoid adding duplicates
        const entriesToAdd = data.query.search.reduce((obj, entry) => {
          if (!entries[entry.pageid]) {
            return {
              ...obj,
              [entry.pageid]: entry,
            };
          }
          return obj;
        }, {});

        setEntries({
          ...entries,
          ...entriesToAdd,
        });
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        setError("Oops! Something went wrong");
      });
  };

  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <Header />
        <Search
          fetchEntries={fetchEntries}
          clearPreviousQuery={clearPreviousQuery}
        />
        {loading && <Loading />}
        {entries && <Entries entries={entries} />}
        {error && <Error message={error} />}
        <Footer />
      </MainContainer>
    </>
  );
};

export default App;
