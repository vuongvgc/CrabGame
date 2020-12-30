import React, { Component } from "react";
import Header from "../../layouts/Header";
import CrabGame from "../../layouts/CrabGame";
class Home extends Component {
  render() {
    return (
      <div className="container fw-bold">
        <Header />
        <CrabGame />
      </div>
    );
  }
}

export default Home;
