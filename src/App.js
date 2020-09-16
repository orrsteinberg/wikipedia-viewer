import React, { useState } from "react";
import { Header, Search, Entries } from "./components";
import { GlobalStyle } from "./globalStyles.js";

const App = () => {
  const [entries, setEntries] = useState(null);
  const [error, setError] = useState(false);

  const fetchEntries = (query) => {
    // ...
    // fetch query
    // if success update entries
    // else display error
  };

  const fetchRandom = "https://en.wikipedia.org/wiki/Special:Random";

  return (
    <>
      <GlobalStyle />
      <Header />
      <Search fetchEntries={fetchEntries} fetchRandom={fetchRandom} />
      <Entries entries={entries} />
    </>
  );
};

export default App;
