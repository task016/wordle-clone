import React from "react";
import Guess from "../Guess/Guess";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess, index) => (
        <Guess key={index} guess={guess} />
      ))}
    </div>
  );
}

export default GuessResults;
