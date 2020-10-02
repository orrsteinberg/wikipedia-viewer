import React, { useState } from "react";

const SearchHistoryButton = ({ handleClick, showList }) => {
  return (
    <button onClick={handleClick} style={{ display: "block" }}>
      Search History {showList ? "X" : null}
    </button>
  );
};

const SearchHistoryList = ({ searchHistory, updateSearchHistory, search }) => {
  const clearHistory = () => updateSearchHistory([]);

  const deleteItem = (itemToDelete) => {
    const updatedList = searchHistory.filter((item) => item !== itemToDelete);
    updateSearchHistory(updatedList);
  };

  return (
    <ul>
      {searchHistory.map((item) => (
        <li key={item} style={{ color: "#fff" }}>
          <button onClick={() => search(item)}>{item}</button>{" "}
          <button onClick={() => deleteItem(item)}>X</button>
        </li>
      ))}
      <li>
        <button onClick={clearHistory}>CLEAR HISTORY</button>
      </li>
    </ul>
  );
};

const SearchHistory = ({
  searchHistory,
  updateSearchHistory,
  searchFromHistory,
}) => {
  const [showList, setShowList] = useState(false);

  const toggleList = () => setShowList(!showList);

  const search = (item) => {
    toggleList();
    searchFromHistory(item);
  };

  return (
    <>
      <SearchHistoryButton showList={showList} handleClick={toggleList} />
      {showList && (
        <SearchHistoryList
          searchHistory={searchHistory}
          updateSearchHistory={updateSearchHistory}
          search={search}
        />
      )}
    </>
  );
};

export default SearchHistory;
