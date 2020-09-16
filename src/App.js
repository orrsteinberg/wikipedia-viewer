import React, { useState } from "react";
import { Header, Search, Entries } from "./components";

const App = () => {
  const [entries, setEntries] = useState(null);

  const updateEntries = (query) => {
    // ...
    // fetch query
    // setEntries
  };

  return (
    <>
      <Header />
      <Search handleUpdate={updateEntries} />
      <Entries entries={entries} />
    </>
  );
};

export default App;
