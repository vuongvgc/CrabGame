const initialState = {
  arrAnimal: [
    {
      id: 1,
      name: "bau",
      url: "../src/img/bau.png",
    },

    {
      id: 2,
      name: "ca",
      url: "../src/img/ca.png",
    },
    {
      id: 3,
      name: "cua",
      url: "../src/img/cua.png",
    },
    {
      id: 4,
      name: "ga",
      url: "../src/img/ga.png",
    },
    {
      id: 5,
      name: "nai",
      url: "../src/img/nai.png",
    },
    {
      id: 6,
      name: "tom",
      url: "../src/img/tom.png",
    },
  ],
};
const GrabGameReducer = (state = initialState, action) => {
  switch (action.payload) {
    default:
      return state;
  }
};
export default GrabGameReducer;
