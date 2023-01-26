import React from "react";

function VirtualKeyboard({ guesses }) {
  const keyboardKeys = {
    Q: "",
    W: "",
    E: "",
    R: "",
    T: "",
    Y: "",
    U: "",
    I: "",
    O: "",
    P: "",
    A: "",
    S: "",
    D: "",
    F: "",
    G: "",
    H: "",
    J: "",
    K: "",
    L: "",
    Z: "",
    X: "",
    C: "",
    V: "",
    B: "",
    N: "",
    M: "",
  };

  guesses.forEach((guess) => {
    if (!guess) return;

    guess.forEach((item) => {
      switch (item.status) {
        case "correct":
          keyboardKeys[item.letter] = item.status;
          break;
        case "incorrect":
          keyboardKeys[item.letter] = item.status;
          break;
        case "misplaced":
          if (keyboardKeys[item.letter] !== "correct")
            keyboardKeys[item.letter] = item.status;
          break;
        default:
          keyboardKeys[item.letter] = "";
      }
    });
  });

  const keysByRow = [
    Object.entries(keyboardKeys).slice(0, 10),
    Object.entries(keyboardKeys).slice(10, 19),
    Object.entries(keyboardKeys).slice(19, 26),
  ];

  return (
    <div className="virtual-keyboard">
      {keysByRow.map((keyRow, index) => (
        <div key={index} className="virtual-keyboard-row">
          {keyRow.map(([key, status]) => (
            <span key={key} className={`virtual-keyboard-key ${status}`}>
              {key}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default VirtualKeyboard;
