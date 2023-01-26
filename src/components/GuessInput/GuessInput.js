import React, { useState } from "react";

function GuessInput({ onGuess }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
    onGuess(input);
    setInput("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={input}
        pattern=".{5}"
        maxLength="5"
        onChange={(e) => setInput(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
