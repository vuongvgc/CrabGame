import React, { Component } from "react";
import AnimalGame from "../AnimalGame";
import BetButton from "../BetButton";
import { connect } from "react-redux";
class CardGame extends Component {
  render() {
    // console.log(this.props.animalItem);
    const { url, point, id } = this.props.animalItem;
    return (
      <div className="m-2 bg-warning ">
        <AnimalGame img={url} />
        <BetButton point={point} id={id} />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps);
  return {
    animalItem: state.GrabGameReducer.arrAnimal[ownProps.index],
  };
};
export default connect(mapStateToProps)(CardGame);
