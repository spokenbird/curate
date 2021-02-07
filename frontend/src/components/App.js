import React, { Component } from "react";
import './App.css';
import Home from "./Home";


class App extends Component {

  render() {
    return (
        <div className="app container-fluid p-0 text-light">
            <Home />
        </div>
    );
  }
}

export default App;
