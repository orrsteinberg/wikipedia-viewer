import React, { useState } from "react";
import axios from "axios";
import { Header, Search, Entries, Error, Loading } from "./components";
import { GlobalStyle } from "./globalStyles.js";

const App = () => {
  const [entries, setEntries] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchEntries = (query) => {
    setEntries(null);
    setLoading(true);

    const baseUrl = "https://en.wikipedia.org//w/api.php";

    const params = {
      action: "query",
      list: "search",
      srsearch: query,
      format: "json",
      origin: "*",
    };

    axios
      .get(baseUrl, { params })
      .then(({ data }) => {
        setLoading(false);
        setError(null);
        if (data.query.search.length === 0) {
          setError("No results found");
          return;
        }
        setEntries(data.query.search);
      })
      .catch(() => {
        setError("Oops! Something went wrong");
      });
  };

  const fetchRandom = "https://en.wikipedia.org/wiki/Special:Random";

  return (
    <>
      <GlobalStyle />
      <Header />
      <Search
        fetchEntries={fetchEntries}
        fetchRandom={fetchRandom}
        setErrorMessage={setError}
      />
      {loading ? <Loading /> : null}
      {entries ? <Entries entries={entries} /> : null}
      {error ? <Error message={error} /> : null}
    </>
  );
};

export default App;
