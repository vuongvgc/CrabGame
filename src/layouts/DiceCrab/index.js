import React, { Component } from "react";
import AnimalGame from "../../components/AnimalGame";
class DiceCrab extends Component {
  render() {
    return (
      <div>
        <AnimalGame />
        <AnimalGame />
        <AnimalGame />
        <button className="btn btn-success">Xốc</button>
      </div>
    );
  }
}

export default DiceCrab;
