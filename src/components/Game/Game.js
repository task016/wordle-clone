import React, { useState } from "react";

import { range, sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState(
    range(NUM_OF_GUESSES_ALLOWED).map((item) => "")
  );

  const [numOfGuesses, setNumOfGuesses] = useState(0);

  function handleGuess(guess) {
    if (numOfGuesses >= NUM_OF_GUESSES_ALLOWED) {
      window.alert("You reached maximum number of guesses allowed");
      return;
    }
    const nextGuesses = [...guesses];
    nextGuesses[numOfGuesses] = checkGuess(guess, answer);
    setGuesses(nextGuesses);
    setNumOfGuesses(numOfGuesses + 1);
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput onGuess={handleGuess} />
    </>
  );
}

export default Game;
