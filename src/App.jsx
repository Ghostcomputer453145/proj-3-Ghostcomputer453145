import "./App.css";
import { useState } from "react";
import cards from "./data/cards";
import Flashcard from "./components/Flashcard";

const allCards = Object.values(cards).flat();

function App() {
  const [current, setCurrent] = useState(0);

  const nextCard = () => {
    const randomIndex = Math.floor(Math.random() * allCards.length);
    setCurrent(randomIndex);
  };

  return (
    <div className="App">
      <h1>Ultimate Mixed Trivia Flashcards Game!</h1>
      <p>Test your knowledge across languages, CS, geography, food, dogs, games, and more!</p>
      <p>Total Cards: {allCards.length}</p>

      <Flashcard
        question={allCards[current].question}
        answer={allCards[current].answer}
      />

      <button onClick={nextCard}>Next Card</button>
    </div>
  );
}

export default App;