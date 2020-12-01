import { useState, useEffect } from "react";

const useSearchHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Load search history from localStorage
    const localSearchHistory = window.localStorage.getItem("searchHistory");

    if (localSearchHistory) {
      setHistory(JSON.parse(localSearchHistory));
    }
  }, []);

  const updateHistory = (updatedHistory) => {
    setHistory(updatedHistory);

    window.localStorage.setItem(
      "searchHistory",
      JSON.stringify(updatedHistory)
    );
  };

  const pushToHistory = (item) => {
    // Add item to the beginning of the array and remove duplicates
    updateHistory(Array.from(new Set([item, ...history])));
  };

  const deleteHistoryItem = (itemToDelete) => {
    updateHistory(history.filter((item) => item !== itemToDelete));
  };

  const clearHistory = () => {
    updateHistory([]);
  };

  return [history, pushToHistory, deleteHistoryItem, clearHistory];
};

export default useSearchHistory;
