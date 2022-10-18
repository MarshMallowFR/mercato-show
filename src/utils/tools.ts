export const sortDate = (dateA: string, dateB: string): number => {
  const a = new Date(dateA);
  const b = new Date(dateB);
  if (a > b) {
    return -1;
  }
  if (a < b) {
    return 1;
  }
  return 0;
};

export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-us', {
    // year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};
