import { randomNumber } from "../utils/randomNumber";
import { findAnimal } from "../utils/findAnimal";
import { countOccurrences } from "../utils/countOccurrences";
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
  rewardPoint: 500,
};
const GrabGameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DICE__GAME": {
      // console.log("dice");
      let arrResult = [randomNumber(), randomNumber(), randomNumber()];
      // console.log(countOccurrences(arrResult));
      let countNumber = countOccurrences(arrResult);
      let arrNumber = Object.keys(countNumber);
      let newPoint = state.rewardPoint;
      arrNumber.map((rs) => {
        return (newPoint +=
          state.arrAnimal[rs - 1].point * (countNumber[rs] + 1));
      });
      // console.log(newPoint);
      return {
        ...state,
        arrAnimal: [...initialState.arrAnimal],
        result: arrResult,
        rewardPoint: newPoint,
      };
    }
    case "ADD__POINT": {
      // console.log("Add");
      if (state.rewardPoint > 0) {
        let newArr = [...state.arrAnimal];
        newArr[findAnimal(state.arrAnimal, action.payload)] = {
          ...newArr[findAnimal(state.arrAnimal, action.payload)],
          point:
            newArr[findAnimal(state.arrAnimal, action.payload)].point + 100,
        };
        return {
          ...state,
          arrAnimal: newArr,
          rewardPoint: state.rewardPoint - 100,
        };
      }

      return state;
    }
    case "SUB__POINT": {
      // console.log("Add");
      if (
        state.arrAnimal[findAnimal(state.arrAnimal, action.payload)].point > 0
      ) {
        let newArr = [...state.arrAnimal];
        newArr[findAnimal(state.arrAnimal, action.payload)] = {
          ...newArr[findAnimal(state.arrAnimal, action.payload)],
          point:
            newArr[findAnimal(state.arrAnimal, action.payload)].point - 100,
        };
        return {
          ...state,
          arrAnimal: newArr,
          rewardPoint: state.rewardPoint + 100,
        };
      }

      return state;
    }
    default:
      return state;
  }
};
export default GrabGameReducer;
