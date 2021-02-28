import { useState, useEffect } from "react";

// Detect clicks on the page in order to toggle active elements
const useDetectPageClick = (elementRef, initialState) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const handlePageClick = (event) => {
      // If the target element is not the active element, we know the user clicked outside
      // so we should deactivate it
      if (elementRef.current && !elementRef.current.contains(event.target)) {
        setIsActive(!isActive);
      }
    };

    // When the element is active, listen for clicks anywhere on the page
    if (isActive) {
      window.addEventListener("click", handlePageClick);
    }

    // Cleanup on unmount
    // (the element gets a state update when its deactivated and rerenders so we remove the click listener)
    return () => window.removeEventListener("click", handlePageClick);
  });

  return [isActive, setIsActive];
};

export default useDetectPageClick;
