import { countOccurrences } from "./countOccurrences";
export const calcRewardPoint = (arrResult, rewardPoint, arrAnimal) => {
  //   console.log(arrResult, rewardPoint, arrAnimal);
  let countNumber = countOccurrences(arrResult);
  let arrNumber = Object.keys(countNumber);
  let newPoint = rewardPoint;
  //   console.log(newPoint);
  arrNumber.map(
    (rs) => (newPoint += arrAnimal[rs - 1].point * (countNumber[rs] + 1))
  );
  return newPoint;
};
