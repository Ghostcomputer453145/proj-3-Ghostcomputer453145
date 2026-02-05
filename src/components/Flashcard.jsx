import { useState } from "react";

const Flashcard = ({ question, answer, category, image }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flashcard-container" onClick={() => setFlipped(!flipped)}>
      <div className={`flashcard ${flipped ? "flipped" : ""}`}>
        <div className={`flashcard-face ${category}`}>
          <div>{question}</div>
        </div>

        <div
          className={`flashcard-face flashcard-back ${category}`}
          style={
            image
              ? {
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "20px",
                }
              : {}
          }
        >
          <div style={{ fontSize: "24px", fontWeight: "bold" }}>{answer}</div>
          {image && (
            <img
              src={image}
              alt={answer}
              style={{
                maxHeight: "150px",
                maxWidth: "100%",
                marginTop: "10px",
                alignSelf: "center",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Flashcard;