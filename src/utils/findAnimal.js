export const findAnimal = (arr, id) => {
  let index = arr.findIndex((animal) => animal.id === id);
  return index;
};
