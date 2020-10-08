import React, { useState } from "react";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import {
  SearchHistoryContainer,
  SearchHistoryButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemDeleteButton,
  ClearHistoryButton,
} from "./SearchHistory.elements";

const SearchHistoryList = ({ searchHistory, updateSearchHistory, search }) => {
  const clearHistory = () => updateSearchHistory([]);

  const deleteItem = (itemToDelete) => {
    const updatedList = searchHistory.filter((item) => item !== itemToDelete);
    updateSearchHistory(updatedList);
  };

  return (
    <List>
      {searchHistory.map((item) => (
        <ListItem key={item}>
          <ListItemText onClick={() => search(item)}>
            <ListItemIcon /> {item}
          </ListItemText>
          <ListItemDeleteButton onClick={() => deleteItem(item)}>
            <FaTrash />
          </ListItemDeleteButton>
        </ListItem>
      ))}
      <ListItem>
        <ClearHistoryButton onClick={clearHistory}>
          CLEAR HISTORY
        </ClearHistoryButton>
      </ListItem>
    </List>
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
    <SearchHistoryContainer>
      <SearchHistoryButton onClick={toggleList} active={showList}>
        {showList ? <FaMinus /> : <FaPlus />} Search History
      </SearchHistoryButton>
      {showList && (
        <SearchHistoryList
          searchHistory={searchHistory}
          updateSearchHistory={updateSearchHistory}
          search={search}
        />
      )}
    </SearchHistoryContainer>
  );
};

export default SearchHistory;
