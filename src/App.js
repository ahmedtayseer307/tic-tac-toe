import React from "react";
import "./App.css";
import Board from "./component/Board";
import Heading from "./component/Heading";

function App(){
  return(
    <div className="playground">
      <Heading />
      <Board />
    </div>
  );
}

export default App;