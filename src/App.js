import React, { useState } from "react";
import axios from "axios";
import { Header, Search, Entries, Error, Loading, Footer } from "./components";
import { GlobalStyle, MainContainer } from "./globalStyles.js";

const App = () => {
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchEntries = (query) => {
    setEntries([]);
    setError(null);
    setLoading(true);

    const baseUrl = "https://en.wikipedia.org//w/api.php";

    const params = {
      action: "query",
      list: "search",
      srsearch: query,
      srlimit: 30,
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
