import { randomNumber } from "../utils/randomNumber";
const initialState = {
  arrAnimal: [
    {
      id: 1,
      name: "bau",
      url: "./img/bau.png",
      point: 0,
    },

    {
      id: 2,
      name: "ca",
      url: "./img/ca.png",
      point: 0,
    },
    {
      id: 3,
      name: "cua",
      url: "./img/cua.png",
      point: 0,
    },
    {
      id: 4,
      name: "ga",
      url: "./img/ga.png",
      point: 0,
    },
    {
      id: 5,
      name: "nai",
      url: "./img/nai.png",
      point: 0,
    },
    {
      id: 6,
      name: "tom",
      url: "./img/tom.png",
      point: 0,
    },
  ],
  result: [1, 2, 3],
};
const GrabGameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DICE__GAME": {
      // console.log("dice");
      return {
        ...state,
        result: [randomNumber(), randomNumber(), randomNumber()],
      };
    }
    default:
      return state;
  }
};
export default GrabGameReducer;
