import { useState } from "react";

const Flashcard = ({ question, answer }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flashcard" onClick={() => setFlipped(!flipped)}>
      <h2>{flipped ? answer : question}</h2>
    </div>
  );
};

export default Flashcard;