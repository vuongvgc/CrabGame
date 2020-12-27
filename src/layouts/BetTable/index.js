import React, { Component } from "react";
import CardGame from "../../components/CardGame";
class BetTable extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-4">
          <CardGame />
        </div>
        <div className="col-4">
          <CardGame />
        </div>
        <div className="col-4">
          <CardGame />
        </div>
        <div className="col-4">
          <CardGame />
        </div>
        <div className="col-4">
          <CardGame />
        </div>
        <div className="col-4">
          <CardGame />
        </div>
      </div>
    );
  }
}

export default BetTable;
