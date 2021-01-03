import React, { Component } from "react";
class AnimalGame extends Component {
  render() {
    return (
      <div className="card">
        <img
          src={this.props.img}
          className="card-img-top"
          alt="..."
          id="loading"
        />
      </div>
    );
  }
}

export default AnimalGame;
