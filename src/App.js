import React, { useState } from "react";
import { Header, Search, Entries } from "./components";
import { GlobalStyle } from "./globalStyles.js";

const App = () => {
  const [entries, setEntries] = useState(null);
  const [error, setError] = useState(false);

  const updateEntries = (query) => {
    // ...
    // fetch query
    // setEntries
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      <Search update={updateEntries} />
      <Entries entries={entries} />
    </>
  );
};

export default App;
