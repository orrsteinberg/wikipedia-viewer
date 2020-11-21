import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { FaSearch } from "react-icons/fa";

import { RANDOM_ARTICLE_URL } from "../../constants";
import SearchHistory from "./SearchHistory";
import {
  SearchContainer,
  SearchArea,
  SearchForm,
  SearchInput,
  SearchButton,
  RandomArticleButton,
} from "./Search.elements";

const Search = ({ searchWiki }) => {
  const [query, setQuery] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);
  const inputFieldRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (typeof query !== "string" || query.trim() === "") return;

    // Remove focus from input field
    inputFieldRef.current.blur();

    // Add query to search history and remove duplicates
    setSearchHistory(Array.from(new Set([query, ...searchHistory])));

    searchWiki(query);
  };

  const searchFromHistory = (item) => {
    // Move item to the beginning of the array and remove duplicates
    setSearchHistory(Array.from(new Set([item, ...searchHistory])));

    // Update query field value and run search
    setQuery(item);
    searchWiki(item);
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
          <SearchButton name="search-button" aria-label="Search button">
            <FaSearch aria-hidden="true" focusable="false" />
          </SearchButton>
        </SearchForm>
        {searchHistory.length > 0 && (
          <SearchHistory
            searchHistory={searchHistory}
            updateSearchHistory={setSearchHistory}
            searchFromHistory={searchFromHistory}
          />
        )}
      </SearchArea>
      <RandomArticleButton href={RANDOM_ARTICLE_URL} target="_blank">
        Random Article{"  "}
        <span role="img" aria-hidden="true">
          ✨
        </span>
      </RandomArticleButton>
    </SearchContainer>
  );
};

Search.propTypes = {
  searchWiki: PropTypes.func.isRequired,
};

export default Search;
