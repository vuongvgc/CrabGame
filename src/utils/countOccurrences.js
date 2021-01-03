export const countOccurrences = (arr) =>
  // eslint-disable-next-line no-sequences
  arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});
