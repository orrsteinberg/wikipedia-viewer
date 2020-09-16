import React, { useState } from "react";
import axios from "axios";
import { Header, Search, Entries, Error } from "./components";
import { GlobalStyle } from "./globalStyles.js";

const App = () => {
  const [entries, setEntries] = useState(null);
  const [error, setError] = useState(false);

  const fetchEntries = (query) => {
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
      .then((res) => {
        setEntries(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
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
      {entries ? <Entries entries={entries} /> : null}
      {error ? <Error message={error} /> : null}
    </>
  );
};

export default App;
