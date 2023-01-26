import React, { useState } from "react";

import { range, sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
import Banner from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState(
    range(NUM_OF_GUESSES_ALLOWED).map((item) => "")
  );

  const [numOfGuesses, setNumOfGuesses] = useState(0);

  let isWin = false;

  if (numOfGuesses > 0) {
    isWin = guesses[numOfGuesses - 1].every(
      (item) => item.status === "correct"
    );
  }

  const gameOver = numOfGuesses === NUM_OF_GUESSES_ALLOWED || isWin;

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
      <GuessInput onGuess={handleGuess} disabled={gameOver} />
      {gameOver && (
        <Banner variant={isWin ? "happy" : "sad"}>
          {isWin ? (
            <p>
              <strong>Congratulations!</strong> Got it in
              <strong> {numOfGuesses} guesses</strong>.
            </p>
          ) : (
            <p>
              Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
          )}
        </Banner>
      )}
    </>
  );
}

export default Game;

/*
<div class="happy banner">
  <p>
    <strong>Congratulations!</strong> Got it in
    <strong>3 guesses</strong>.
  </p>
</div>

<div class="sad banner">
  <p>Sorry, the correct answer is <strong>LEARN</strong>.</p>
</div>
*/
