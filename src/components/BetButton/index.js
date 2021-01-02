import React, { Component } from "react";
import { addPoint, subPoint } from "../../actions";
import { connect } from "react-redux";
class BetButton extends Component {
  render() {
    // console.log(this.props);
    const { point, id } = this.props;
    return (
      <div className="py-1">
        <p>
          Cược:
          <button
            className="btn btn-success text-center"
            onClick={() => this.props.addPoint(id)}
          >
            +
          </button>
          <span className="mx-2 text-success">{point}</span>
          <button
            className="btn btn-success"
            onClick={() => this.props.subPoint(id)}
          >
            -
          </button>
        </p>
      </div>
    );
  }
}
export default connect(null, { addPoint, subPoint })(BetButton);
