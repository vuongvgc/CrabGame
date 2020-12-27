import React, { Component } from "react";
import AnimalGame from "../AnimalGame";
import BetButton from "../BetButton";
class CardGame extends Component {
  render() {
    return (
      <div className="border border-success m-2">
        <AnimalGame />
        <BetButton />
      </div>
    );
  }
}

export default CardGame;
