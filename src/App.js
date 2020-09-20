import React, { useState } from "react";
import axios from "axios";
import { Header, Search, Entries, Error, Loading, Footer } from "./components";
import { GlobalStyle, MainContainer } from "./globalStyles.js";

const App = () => {
  const [entries, setEntries] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchEntries = (query) => {
    setEntries(null);
    setError(null);
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
      <MainContainer>
        <Header />
        <Search
          fetchEntries={fetchEntries}
          fetchRandom={fetchRandom}
          setErrorMessage={setError}
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
