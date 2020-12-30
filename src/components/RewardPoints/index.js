import React, { Component } from "react";

class RewardPoints extends Component {
  render() {
    return (
      <div className="text-center">
        <p className="bg-warning d-inline p-2 RewardPoints">
          Tiền thưởng: <span className="text-success">500 điểm</span>
        </p>
      </div>
    );
  }
}

export default RewardPoints;
