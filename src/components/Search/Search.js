import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import {
  SearchContainer,
  SearchForm,
  SearchInput,
  SearchButton,
  RandomArticleButton,
} from "./Search.elements";

const Search = ({ fetchEntries, fetchRandom, setErrorMessage }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = ({ target }) => setQuery(target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (typeof query !== "string" || query.trim() === "") {
      return;
    }
    fetchEntries(query);
  };

  return (
    <SearchContainer>
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
      <RandomArticleButton href={fetchRandom} target="_blank">
        Random Article
      </RandomArticleButton>
    </SearchContainer>
  );
};

export default Search;
