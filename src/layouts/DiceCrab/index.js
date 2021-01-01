import React, { Component } from "react";
import AnimalGame from "../../components/AnimalGame";
import { connect } from 'react-redux'
class DiceCrab extends Component {
  render() {
    console.log(this.props.result)
    return (
      <div className="text-center">
        {this.props.result.map(dice => {
          return(
            <div className="col-3 mx-auto my-2">
                <AnimalGame img={dice.url}/>
            </div>
        )
        })}
        <button className="btn btn-success my-2">Xốc</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    result: state.GrabGameReducer.result,
  };
}
export default connect(mapStateToProps)(DiceCrab);
