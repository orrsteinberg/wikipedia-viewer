import React, { useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";

import SearchHistory from "./SearchHistory";
import {
  SearchContainer,
  SearchArea,
  SearchForm,
  SearchInput,
  SearchButton,
  RandomArticleButton,
} from "./Search.elements";

const Search = ({ fetchEntries, setErrorMessage }) => {
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
    fetchEntries(query);
  };

  const searchFromHistory = (item) => {
    // Move item to the beginning of the array and remove duplicates
    setSearchHistory(Array.from(new Set([item, ...searchHistory])));

    // Update query and run search
    setQuery(item);
    fetchEntries(item);
  };

  const handleInputChange = ({ target }) => setQuery(target.value);

  const fetchRandomUrl = "https://en.wikipedia.org/wiki/Special:Random";

  return (
    <SearchContainer>
      <SearchArea>
        <SearchForm onSubmit={handleSubmit}>
          <SearchInput
            name="search-input"
            value={query}
            onChange={handleInputChange}
            placeholder="Type to search..."
            ref={inputFieldRef}
          />
          <SearchButton name="search-button">
            <FaSearch />
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
      <RandomArticleButton href={fetchRandomUrl} target="_blank">
        Random Article{"  "}
        <span role="img" aria-label="sparkles">
          ✨
        </span>
      </RandomArticleButton>
    </SearchContainer>
  );
};

export default Search;
