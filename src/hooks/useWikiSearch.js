import { useReducer } from "react";

import { mergeEntries } from "../utils";
import api from "../api";

// Reducer function for managing the WikiSearch state

const initialState = {
  status: "idle", // "idle" | "fetching" | "fetchingMore" | "error"
  entries: {}, // { [entryId]: entry }
  error: null, // { message: error.message }
  currentQuery: "",
  currentOffset: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH":
      return {
        ...state,
        status: "fetching",
        currentQuery: action.payload,
        error: null,
      };

    case "FETCH_MORE":
      return {
        ...state,
        status: "fetchingMore",
        error: null,
      };

    case "NO_RESULTS":
      return {
        ...state,
        status: "error",
        entries: {},
        error: { message: "No results found" },
      };

    case "NO_MORE_RESULTS":
      return {
        ...state,
        status: "error",
        error: { message: "No more entries to load" },
      };

    case "FETCH_SUCCESS":
      return {
        ...state,
        status: "idle",
        entries: mergeEntries({
          currentEntries: state.entries,
          newEntries: action.payload.newEntries,
        }),
        currentOffset: action.payload.newOffset,
      };

    case "FETCH_ERROR":
      return {
        ...state,
        status: "error",
        error: { message: "Oops! Something went wrong" },
      };

    case "CLEAR_ENTRIES":
      return {
        ...state,
        entries: {},
      };

    default:
      return state;
  }
};

// Actions creators
const fetch = (query) => ({ type: "FETCH", payload: query });
const fetchMore = () => ({ type: "FETCH_MORE" });
const noResults = () => ({ type: "NO_RESULTS" });
const noMoreResults = () => ({ type: "NO_MORE_RESULTS" });
const fetchSuccess = (newEntries, newOffset) => ({
  type: "FETCH_SUCCESS",
  payload: { newEntries, newOffset },
});
const fetchError = () => ({ type: "FETCH_ERROR" });
const clearEntries = () => ({ type: "CLEAR_ENTRIES" });

// Custom hook

const useWikiSearch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const wikiSearch = async (query, offset, fetchAction, noResultsAction) => {
    // dispatch either fetch(query) or fetchMore(currentQuery)
    // the argument is irrelevant to the fetchMore action creator...
    dispatch(fetchAction(query));

    try {
      // ...but needs to be passed to the search API
      const { data } = await api.searchWikipedia(query, offset);

      // If no results were found, return 'no results' or 'no more results'
      if (data.query.search.length === 0) {
        return dispatch(noResultsAction());
      }

      // Otherwise update entries and current offset (the point from which to keep fetching)
      dispatch(fetchSuccess(data.query.search, data.continue.sroffset));
    } catch (err) {
      dispatch(fetchError());
    }
  };

  const search = async (query) => {
    if (query === state.currentQuery) {
      return;
    } else {
      dispatch(clearEntries());
      return await wikiSearch(query, 0, fetch, noResults);
    }
  };

  const searchForMore = async () => {
    return await wikiSearch(
      state.currentQuery,
      state.currentOffset,
      fetchMore,
      noMoreResults
    );
  };

  return [state, search, searchForMore];
};

export default useWikiSearch;
