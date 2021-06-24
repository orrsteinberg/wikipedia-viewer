import { useState, useEffect, useCallback } from "react";

const useSearchHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Load search history from localStorage
    const localSearchHistory = window.localStorage.getItem("searchHistory");

    if (localSearchHistory) {
      setHistory(JSON.parse(localSearchHistory));
    }
  }, []);

  const updateHistory = useCallback((updatedHistory) => {
    setHistory(updatedHistory);

    window.localStorage.setItem(
      "searchHistory",
      JSON.stringify(updatedHistory)
    );
  }, []);

  const pushToHistory = useCallback((item) => {
    // Add item to the beginning of the array and remove duplicates
    updateHistory(Array.from(new Set([item, ...history])));
  }, [updateHistory, history]);

  const deleteHistoryItem = useCallback((itemToDelete) => {
    updateHistory(history.filter((item) => item !== itemToDelete));
  }, [updateHistory, history]);

  const clearHistory = useCallback(() => {
    updateHistory([]);
  }, [updateHistory]);

  return [history, pushToHistory, deleteHistoryItem, clearHistory];
};

export default useSearchHistory;
