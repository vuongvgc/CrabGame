import React, { Component } from "react";
import AnimalGame from "../../components/AnimalGame";
import { connect } from "react-redux";
import { diceGrabGame } from "../../actions";
import { findAnimal } from "../../utils/findAnimal";
class DiceCrab extends Component {
  render() {
    // console.log(this.props.result);
    const { result, animalItem } = this.props;
    return (
      <div className="text-center">
        {result.map((dice, index) => {
          let id = findAnimal(animalItem, dice);
          return (
            <div className="col-3 mx-auto my-2" key={index}>
              <AnimalGame img={animalItem[id].url} />
            </div>
          );
        })}
        <button
          className="btn btn-success my-2"
          onClick={() => this.props.diceGrabGame()}
        >
          Xốc
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    result: state.GrabGameReducer.result,
    animalItem: state.GrabGameReducer.arrAnimal,
  };
};
export default connect(mapStateToProps, { diceGrabGame })(DiceCrab);
