import "./App.css";
import { useState } from "react";
import cards from "./data/cards";
import Flashcard from "./components/Flashcard";

function App() {
  const [current, setCurrent] = useState(0);

  const nextCard = () => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    setCurrent(randomIndex);
  };

  return (
    <div className="App">
      <h1>Ultimate Mixed Trivia Flashcards Game!</h1>
      <p>Test your knowledge across languages, CS, geography, food, dogs, games, and more!</p>
      <p>Total Cards: {cards.length}</p>

      <Flashcard
        question={cards[current].question}
        answer={cards[current].answer}
      />

      <button onClick={nextCard}>Next Card</button>
    </div>
  );
}

export default App;