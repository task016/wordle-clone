import React, { useState } from "react";

import { range, sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
import GameOverBanner from "../GameOverBanner/GameOverBanner";
import VirtualKeyboard from "../VirtualKeyboard";

// Pick a random word on every pageload.
//const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
//console.info({ answer });

function Game() {
  const [answer, setAnswer] = useState(sample(WORDS));
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
    const nextGuesses = [...guesses];
    nextGuesses[numOfGuesses] = checkGuess(guess, answer);
    setGuesses(nextGuesses);
    setNumOfGuesses(numOfGuesses + 1);
  }

  function handlePlayAgain() {
    setAnswer(sample(WORDS));
    setGuesses(range(NUM_OF_GUESSES_ALLOWED).map((item) => ""));
    setNumOfGuesses(0);
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput onGuess={handleGuess} disabled={gameOver} />
      <VirtualKeyboard guesses={guesses} />
      {gameOver && (
        <GameOverBanner
          isWin={isWin}
          answer={answer}
          numOfGuesses={numOfGuesses}
          onPlayAgain={handlePlayAgain}
        />
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
