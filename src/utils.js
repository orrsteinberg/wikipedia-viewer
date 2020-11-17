// Check if an object is empty
export const isEmpty = (obj) => Object.keys(obj).length === 0;

// Parse and merge new entries with current ones to avoid duplicates
export const mergeEntries = ({ currentEntries, newEntries }) => {
  return newEntries.reduce((obj, entry) => {
    if (!obj[`_${entry.pageid}`]) {
      return {
        ...obj,
        // Prefix _ to bypass auto-sorting of objects so that new entries are appended to the end
        [`_${entry.pageid}`]: entry,
      };
    }
    return obj;
  }, currentEntries);
};
