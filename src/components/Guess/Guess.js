import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  const letters = guess ? guess.split("") : range(5);

  return (
    <p className="guess">
      {letters.map((letter, index) => (
        <span className="cell" key={index}>
          {guess && letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
