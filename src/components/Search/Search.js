import React, { useState } from "react";
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

  const handleInputChange = ({ target }) => setQuery(target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (typeof query !== "string" || query.trim() === "") return;

    setSearchHistory(Array.from(new Set([...searchHistory, query])));
    fetchEntries(query);
  };

  const searchFromHistory = (item) => {
    setQuery(item);
    fetchEntries(query);
  };

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
