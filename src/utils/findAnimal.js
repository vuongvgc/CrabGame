export const findAnimal = (arr = [{ id: 1 }, { id: 2 }, { id: 3 }], id = 3) => {
  let index = arr.findIndex((animal) => (animal.id = id));
  return index;
};
