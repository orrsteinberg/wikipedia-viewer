import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import {
  SearchContainer,
  SearchForm,
  SearchInput,
  SearchButton,
  RandomArticleButton,
} from "./Search.elements";

const Search = ({ fetchEntries, fetchRandom }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = ({ target }) => setQuery(target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(query);
  };

  return (
    <section>
      <SearchContainer>
        <SearchForm onSubmit={handleSubmit}>
          <SearchInput
            name="search-input"
            value={query}
            onChange={handleInputChange}
            placeholder={"Type to search..."}
          />
          <SearchButton name="search-button">
            <FaSearch />
          </SearchButton>
        </SearchForm>
        <RandomArticleButton onClick={fetchRandom}>
          Random Article
        </RandomArticleButton>
      </SearchContainer>
    </section>
  );
};

export default Search;
