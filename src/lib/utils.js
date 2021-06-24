// Parse and merge new entries with current ones to avoid duplicates
const filterDuplicates = (currentEntries) => (entry) =>
  !currentEntries.byId[entry.pageid];

const normalizeById = (entriesById, entry) => ({ ...entriesById, [entry.pageid]: entry });

const extractEntryId = ({ pageid }) => pageid;

export const mergeEntries = ({ currentEntries, newEntries }) => {
  const filteredNewEntries = newEntries.filter(
    filterDuplicates(currentEntries)
  );
  return {
    byId: {
      ...currentEntries.byId,
      ...filteredNewEntries.reduce(normalizeById, {}),
    },
    allIds: [
      ...currentEntries.allIds,
      ...filteredNewEntries.map(extractEntryId),
    ],
  };
};

// Check if the user is on a mobile device
export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};
