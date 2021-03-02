import React, { useRef } from "react";
import PropTypes from "prop-types";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

import { useDetectPageClick } from "../../hooks";

import {
  SearchHistoryContainer,
  SearchHistoryButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemDeleteButton,
  ClearHistoryButton,
} from "./SearchHistory.elements";

const SearchHistoryList = React.forwardRef(
  ({ isOpen, history, handleSearchClick, deleteItem, clearHistory }, ref) => {
    // History items
    const historyItems = history.map((item) => (
      <ListItem key={item}>
        <ListItemButton
          onClick={() => handleSearchClick(item)}
          aria-label="Search history item"
          tabIndex="0"
          role="button"
        >
          <ListItemIcon aria-label="Search icon" /> {item}
        </ListItemButton>
        <ListItemDeleteButton onClick={() => deleteItem(item)}>
          <FaTrash aria-label="Trash icon" />
        </ListItemDeleteButton>
      </ListItem>
    ));

    // Keep the ref but only render the list if it's open
    return (
      <div ref={ref}>
        {isOpen && (
          <List active={isOpen}>
            {historyItems}
            <ListItem>
              <ClearHistoryButton onClick={clearHistory}>
                Clear History
              </ClearHistoryButton>
            </ListItem>
          </List>
        )}
      </div>
    );
  }
);

const SearchHistory = ({ history, search, deleteItem, clearHistory }) => {
  const listElement = useRef(null);
  const [showList, setShowList] = useDetectPageClick(listElement, false);

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
      <SearchHistoryList
        ref={listElement}
        isOpen={showList}
        history={history}
        deleteItem={deleteItem}
        clearHistory={clearHistory}
        handleSearchClick={handleSearchClick}
      />
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
  isOpen: PropTypes.bool.isRequired,
  history: PropTypes.array.isRequired,
  handleSearchClick: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  clearHistory: PropTypes.func.isRequired,
};

export default SearchHistory;
