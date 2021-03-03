import { useState, useEffect } from "react";

// Detect clicks on the page in order to toggle dropdown elements
const useDetectPageClick = (elementRef, initialState) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const handlePageClick = (event) => {
      if (elementRef.current) {
        // If the document does not contain the clicked target it means we deleted the item
        // and we want to keep the list open
        if (!document.contains(event.target)) return;

        // Otherwise if it's in the document but outside of the list, it means we clicked outside
        // and we want to close the list
        if (!elementRef.current.contains(event.target)) {
          setIsActive(false);
        }
      }
    };

    // When the element is active, listen for clicks anywhere on the page
    if (isActive) {
      window.addEventListener("click", handlePageClick);
    }

    // Cleanup on unmount
    return () => {
      window.removeEventListener("click", handlePageClick);
    };
  });

  return [isActive, setIsActive];
};

export default useDetectPageClick;
