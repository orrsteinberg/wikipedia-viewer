import React, { useState } from "react";
import PropTypes from "prop-types";
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

const SearchHistoryList = ({ history, updateHistory, search }) => {
  const clearHistory = () => {
    updateHistory([]);
  };

  const deleteItem = (itemToDelete) => {
    updateHistory(history.filter((item) => item !== itemToDelete));
  };

  return (
    <List>
      {history.map((item) => (
        <ListItem key={item}>
          <ListItemText
            onClick={() => search(item)}
            aria-label="Search history item"
            tabIndex="0"
            role="button"
          >
            <ListItemIcon aria-label="Search icon" /> {item}
          </ListItemText>
          <ListItemDeleteButton onClick={() => deleteItem(item)}>
            <FaTrash aria-label="Trash icon" />
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

const SearchHistory = ({ history, searchFromHistory, updateHistory }) => {
  const [showList, setShowList] = useState(false);

  const toggleList = () => setShowList(!showList);

  const search = (item) => {
    toggleList();
    searchFromHistory(item);
  };

  return (
    <SearchHistoryContainer>
      <SearchHistoryButton onClick={toggleList} active={showList}>
        {showList ? (
          <FaMinus aria-label="Minus sign" />
        ) : (
          <FaPlus aria-label="Plus-sign" />
        )}{" "}
        Search History
      </SearchHistoryButton>
      {showList && (
        <SearchHistoryList
          history={history}
          updateHistory={updateHistory}
          search={search}
        />
      )}
    </SearchHistoryContainer>
  );
};

SearchHistory.propTypes = {
  history: PropTypes.array.isRequired,
  searchFromHistory: PropTypes.func.isRequired,
  updateHistory: PropTypes.func.isRequired,
};

SearchHistoryList.propTypes = {
  history: PropTypes.array.isRequired,
  updateHistory: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
};

export default SearchHistory;
