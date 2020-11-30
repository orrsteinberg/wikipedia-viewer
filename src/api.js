import axios from "axios";

import { API_URL, NUM_ENTRIES_TO_FETCH } from "./constants";

const searchWikipedia = async (query, offset) => {
  const params = {
    action: "query",
    list: "search",
    srsearch: query,
    srlimit: NUM_ENTRIES_TO_FETCH,
    sroffset: offset,
    format: "json",
    origin: "*",
  };

  return await axios.get(API_URL, { params });
};

export default {
  searchWikipedia,
};
