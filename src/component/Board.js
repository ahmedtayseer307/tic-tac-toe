import React, { useState } from "react";
import Card from "./Card";
import "./Board.css";

const Bord = () => {
  const defaultBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  const [values, togglevalues] = useState(defaultBoard);
  const [turn, changeTurn] = useState(true);
  const [disable, toggledisable] = useState(false);
  const [winmessage, setmessage] = useState("");

  const win = (i) => {
    let char = turn ? "X" : "O";
    // 3amodi
    if ( values[i] === char && values[(i + 3) % 9] === char && values[(i + 6) % 9] === char ) {
      return true;
    }
    // afoq
    let weight = i > 2 ? 3 : 0;
    weight = i > 5 ? 6 : weight;
    if ( values[(i % 3) + weight] === char && values[((i + 1) % 3) + weight] === char && values[((i + 2) % 3) + weight] === char ) {
      return true;
    }
    // maeil
    if (values[0] === char && values[4] === char && values[8] === char) {
      return true;
    }
    if (values[2] === char && values[4] === char && values[6] === char) {
      return true;
    }
    return false;
  };

  const onClickCard = (i) => {
    if (disable) {
      return;
    }
    let data = values;
    if (turn && values[i] === " ") {
      data[i] = "X";
    } else if (values[i] === " ") {
      data[i] = "O";
    } else {
      return;
    }
    togglevalues(data);
    changeTurn(!turn);
    if (!values.includes(" ")) {
      setmessage(`DRAW`);
    }
    if (win(i)) {
      toggledisable(true);
      setmessage(`${turn ? "X" : "O"} IS THE WINNER`);
    }
  };

  const resetHandler = () => {
    toggledisable(false);
    togglevalues(defaultBoard);
    setmessage("");
  };

  return (
    <div className="Board">
      {values.map((val, i) => (
        <span
          key={i}
          onClick={() => {
            onClickCard(i);
          }}
        >
          <Card character={val} />
        </span>
      ))}
      <h1 className={!turn ? "blueSign winMessage" : "redSign winMessage"}>
        {winmessage}
      </h1>
      <br/>
      
      <button onClick={resetHandler} className="btn">
        Reset
      </button>
    </div>
  );
};

export default Bord;