import React, { Component } from "react";
import { connect } from "react-redux";
class RewardPoints extends Component {
  render() {
    return (
      <div className="text-center">
        <p className="bg-warning d-inline p-2 RewardPoints">
          Tiền thưởng:{" "}
          <span className="text-success">{this.props.rewardPoint} điểm</span>
        </p>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    rewardPoint: state.GrabGameReducer.rewardPoint,
  };
};
export default connect(mapStateToProps)(RewardPoints);
