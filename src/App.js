import React from "react";
import Milestone from "./components/Milestone.js";
import Token from "./components/Token.js";
import Assets from "./components/Assets.js";
import Growth from "./components/Growth.js";

import "./App.css";
import "./input.css";

class App extends React.Component {
  render() {
    return (
      <div class="bg-fixed">
        <Milestone />
        <Growth />
        <Token />
        <Assets />
      </div>
    );
  }
}

export default App;
