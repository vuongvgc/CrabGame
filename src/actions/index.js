export const diceGrabGame = () => {
  return {
    type: "DICE__GAME",
  };
};
export const addPoint = (id) => {
  return {
    type: "ADD__POINT",
    payload: id,
  };
};
export const subPoint = (id) => {
  return {
    type: "SUB__POINT",
    payload: id,
  };
};
