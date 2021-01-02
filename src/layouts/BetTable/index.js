import React, { Component } from "react";
import CardGame from "../../components/CardGame";
import { connect } from "react-redux";
class BetTable extends Component {
  render() {
    // console.log(this.props.arrAnimal);
    return (
      <div className="row">
        {this.props.arrAnimal.map((animal, index) => {
          return (
            <div className="col-4" key={animal.id}>
              <CardGame index={index} />
            </div>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { arrAnimal: state.GrabGameReducer.arrAnimal };
};
export default connect(mapStateToProps)(BetTable);
