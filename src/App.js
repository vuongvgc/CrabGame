import React, { Component } from "react";
import Home from "./pages/Home";
import "./styles/style.css";

class App extends Component {
  render() {
    return (
      <div className="bg-secondary">
        <Home />
      </div>
    );
  }
}

export default App;
