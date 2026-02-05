import { useState } from "react";

const Flashcard = ({ question, answer }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <div
        className="flashcard-container"
        onClick={() => setFlipped(!flipped)}
      >
        <div className={`flashcard ${flipped ? "flipped" : ""}`}>
          <div className="flashcard-face">
            {question}
          </div>
          <div className="flashcard-face flashcard-back">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;