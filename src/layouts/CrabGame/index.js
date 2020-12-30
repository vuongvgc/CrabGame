import React, { Component } from "react";
import BetTable from "../BetTable";
import DiceCrab from "../DiceCrab";
import RewardPoints from "../../components/RewardPoints";
class CrabGame extends Component {
  render() {
    return (
      <div className="my-2">
        <div className="my-2 ">
          <RewardPoints />
        </div>
        <div className="row">
          <div className="col-9">
            <BetTable />
          </div>
          <div className="col-3 d-flex align-items-center">
            <DiceCrab />
          </div>
        </div>
      </div>
    );
  }
}

export default CrabGame;
