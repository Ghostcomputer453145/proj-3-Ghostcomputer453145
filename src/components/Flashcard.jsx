import { useState, useEffect } from "react";

const Flashcard = ({ question, answer, category, image }) => {
  const [flipped, setFlipped] = useState(false);
  useEffect(() => {
    setFlipped(false);
  }, [question]);
  return (
    <div
      className="flashcard-container"
      onClick={() => setFlipped(!flipped)}
    >
      <div className={`flashcard ${flipped ? "flipped" : ""}`}>
        <div className={`flashcard-face ${category}`}>
          <div>{question}</div>
        </div>
        <div
          className={`flashcard-face flashcard-back ${category}`}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ fontWeight: "bold" }}>{answer}</div>
          {image && (
            <img
              src={image}
              alt={answer}
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                objectFit: "contain",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Flashcard;