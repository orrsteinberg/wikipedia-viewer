export const initialState = {
  status: "idle", // "idle" | "fetching" | "fetchingMore" | "error"
  entries: {}, // { [entryId]: entry }
  error: null, // { message: error.message }
  current: {
    query: "",
    offset: 0,
  },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH":
      return {
        ...state,
        status: "fetching",
        current: {
          ...state.current,
          query: action.payload,
        },
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
        entries: action.payload.updatedEntries,
        current: {
          ...state.current,
          offset: action.payload.newOffset,
        },
      };

    case "FETCH_ERROR":
      return {
        ...state,
        status: "error",
        error: { message: "Oops! Something went wrong" },
      };

    default:
      return state;
  }
};

export const actions = {
  fetch: (query) => {
    return { type: "FETCH", payload: query };
  },
  fetchMore: () => {
    return { type: "FETCH_MORE" };
  },
  noResults: () => {
    return { type: "NO_RESULTS" };
  },
  noMoreResults: () => {
    return { type: "NO_MORE_RESULTS" };
  },
  fetchSuccess: (updatedEntries, newOffset) => {
    return {
      type: "FETCH_SUCCESS",
      payload: { updatedEntries, newOffset },
    };
  },
  fetchError: () => {
    return { type: "FETCH_ERROR" };
  },
};
