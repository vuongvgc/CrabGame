import React, { Component } from "react";
import BetTable from "../BetTable";
import DiceCrab from "../DiceCrab";
import RewardPoints from "../../components/RewardPoints";
class CrabGame extends Component {
  render() {
    return (
      <div className="border border-success my-2">
        <div>
          <RewardPoints />
        </div>
        <div className="row">
          <div className="col-9">
            <BetTable />
          </div>
          <div className="col-3">
            <DiceCrab />
          </div>
        </div>
      </div>
    );
  }
}

export default CrabGame;
