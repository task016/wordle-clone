import React from "react";

function GameOverBanner({ isWin, numOfGuesses, answer, onPlayAgain }) {
  const bannerClass = `banner ${isWin ? "happy" : "sad"}`;

  return (
    <div className={bannerClass}>
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
      <button onClick={onPlayAgain}>Play Again</button>
    </div>
  );
}

export default GameOverBanner;
