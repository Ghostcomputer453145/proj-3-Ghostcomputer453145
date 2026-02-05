import { useState } from "react";

const Flashcard = ({ question, answer, category }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flashcard-container" onClick={() => setFlipped(!flipped)}>
      <div className={`flashcard ${flipped ? "flipped" : ""}`}>
        <div className={`flashcard-face ${category}`}>
          {question}
        </div>
        <div className={`flashcard-face flashcard-back ${category}`}>
          {answer}
        </div>
      </div>
    </div>
  );
};

export default Flashcard;