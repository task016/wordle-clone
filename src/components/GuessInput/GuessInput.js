import React, { useState } from "react";

function GuessInput() {
  const [input, setInput] = useState("FS");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
    setInput("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={input}
        minLength="5"
        maxLength="5"
        onChange={(e) => setInput(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
