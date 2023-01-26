import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  const letters = guess || range(5);

  return (
    <p className="guess">
      {letters.map((item, index) => (
        <span className={`cell ${guess && item.status}`} key={index}>
          {guess && item.letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
