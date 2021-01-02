import React, { Component } from "react";

class BetButton extends Component {
  render() {
    return (
      <div className="py-1">
        <p>
          Cược:
          <button className="btn btn-success text-center">+</button>
          <span className="mx-2 text-success">{this.props.point}</span>
          <button className="btn btn-success">-</button>
        </p>
      </div>
    );
  }
}

export default BetButton;
