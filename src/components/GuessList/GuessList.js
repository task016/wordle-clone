import React from "react";

function GuessList({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((item) => (
        <p className="guess" key={item.id}>
          {item.guess}
        </p>
      ))}
    </div>
  );
}

export default GuessList;
