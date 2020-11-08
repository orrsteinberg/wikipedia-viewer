export const initialState = {
  status: "idle", // "idle" / "fetching" / "fetchingMore" / "error"
  entries: {}, // { [entryId]: entry }
  errorMessage: null, // { message: error.message }
  currentQuery: "",
  currentOffset: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        status: "fetching",
        currentQuery: action.payload,
        error: null,
      };

    case "SEARCH_MORE":
      return {
        ...state,
        status: "fetchingMore",
        error: null,
      };

    case "UPDATE_ENTRIES":
      return {
        ...state,
        status: "idle",
        entries: action.payload.entries,
        currentOffset: action.payload.currentOffset,
      };

    case "SET_ERROR":
      return {
        ...state,
        status: "error",
        error: { message: action.payload },
      };

    case "CLEAR_ERROR":
      return {
        ...state,
        error: null,
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

export const actions = {
  search: (query) => ({ type: "SEARCH", payload: query }),
  searchMore: () => ({ type: "SEARCH_MORE" }),
  updateEntries: (entries, currentOffset) => ({
    type: "UPDATE_ENTRIES",
    payload: { entries, currentOffset },
  }),
  setError: (message) => ({ type: "SET_ERROR", payload: message }),
  clearError: () => ({ type: "CLEAR_ERROR" }),
  clearEntries: () => ({ type: "CLEAR_ENTRIES" }),
};
