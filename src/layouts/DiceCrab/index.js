import React, { Component } from "react";
import AnimalGame from "../../components/AnimalGame";
class DiceCrab extends Component {
  render() {
    return (
      <div className="text-center">
        <div className="col-3 mx-auto">
          <AnimalGame />
        </div>
        <div className="col-3 my-2 mx-auto">
          <AnimalGame />
        </div>
        <div className="col-3 mx-auto">
          <AnimalGame />
        </div>
        <button className="btn btn-success my-2">Xốc</button>
      </div>
    );
  }
}

export default DiceCrab;
