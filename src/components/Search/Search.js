import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { FaSearch } from "react-icons/fa";

import useSearchHistory from "../../hooks/useSearchHistory";
import SearchHistory from "./SearchHistory";
import {
  SearchContainer,
  SearchArea,
  SearchForm,
  SearchInput,
  SearchButton,
} from "./Search.elements";

const Search = ({ status, search, changeView }) => {
  const [query, setQuery] = useState("");
  const inputFieldRef = useRef();
  const [
    history,
    pushToHistory,
    deleteHistoryItem,
    clearHistory,
  ] = useSearchHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    // If input is empty return
    if (typeof query !== "string" || query.trim() === "") return;

    // Otherwise proceed and run search
    inputFieldRef.current.blur();
    pushToHistory(query);
    changeView("currentSearch");
    search(query);
    setQuery("");
  };

  const searchFromHistory = (item) => {
    // Update query input value and run search
    pushToHistory(item);
    changeView("currentSearch");
    search(item);
  };

  const handleInputChange = ({ target }) => setQuery(target.value);

  return (
    <SearchContainer>
      <SearchArea>
        <SearchForm role="search" onSubmit={handleSubmit}>
          <SearchInput
            name="search-input"
            value={query}
            onChange={handleInputChange}
            placeholder="Type to search..."
            ref={inputFieldRef}
          />
          <SearchButton
            name="search-button"
            aria-label="Search button"
            disabled={status === "fetching" || status === "fetchingMore"}
          >
            <FaSearch aria-hidden="true" focusable="false" />
          </SearchButton>
        </SearchForm>
        {history.length > 0 && (
          <SearchHistory
            history={history}
            search={searchFromHistory}
            deleteItem={deleteHistoryItem}
            clearHistory={clearHistory}
          />
        )}
      </SearchArea>
    </SearchContainer>
  );
};

Search.propTypes = {
  status: PropTypes.string.isRequired,
  search: PropTypes.func.isRequired,
  changeView: PropTypes.func.isRequired,
};

export default Search;
