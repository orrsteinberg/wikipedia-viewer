import React, { useState } from "react";
import axios from "axios";
import { BASE_URL, NUM_ENTRIES_TO_FETCH } from "./constants.js";
import { Header, Search, Entries, Error, Loading, Footer } from "./components";
import { GlobalStyle, MainContainer } from "./globalStyles.js";

const App = () => {
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentOffset, setOffset] = useState(0);

  const fetchEntries = (query) => {
    setEntries([]);
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
        setOffset(data.continue.sroffset);
        if (data.query.search.length === 0) {
          setError("No results found");
          return;
        }
        setEntries(entries.concat(data.query.search));
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
        <Search fetchEntries={fetchEntries} setErrorMessage={setError} />
        {loading && <Loading />}
        {entries.length > 0 && <Entries entries={entries} />}
        {error && <Error message={error} />}
        <Footer />
      </MainContainer>
    </>
  );
};

export default App;
