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

const SearchHistoryList = ({
  history,
  handleSearchClick,
  deleteItem,
  clearHistory,
}) => (
  <List>
    {history.map((item) => (
      <ListItem key={item}>
        <ListItemText
          onClick={() => handleSearchClick(item)}
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

const SearchHistory = ({ history, search, deleteItem, clearHistory }) => {
  const [showList, setShowList] = useState(false);

  const toggleList = () => setShowList(!showList);

  const handleSearchClick = (item) => {
    toggleList();
    search(item);
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
          deleteItem={deleteItem}
          clearHistory={clearHistory}
          handleSearchClick={handleSearchClick}
        />
      )}
    </SearchHistoryContainer>
  );
};

SearchHistory.propTypes = {
  history: PropTypes.array.isRequired,
  search: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  clearHistory: PropTypes.func.isRequired,
};

SearchHistoryList.propTypes = {
  history: PropTypes.array.isRequired,
  handleSearchClick: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  clearHistory: PropTypes.func.isRequired,
};

export default SearchHistory;
