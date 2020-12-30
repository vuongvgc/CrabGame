import React, { Component } from "react";
import AnimalGame from "../AnimalGame";
import BetButton from "../BetButton";
class CardGame extends Component {
  render() {
    return (
      <div className="m-2 bg-warning ">
        <AnimalGame />
        <BetButton />
      </div>
    );
  }
}

export default CardGame;
