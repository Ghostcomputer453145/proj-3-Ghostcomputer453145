import "./App.css";
import { useState } from "react";
import cards from "./data/cards";
import Flashcard from "./components/Flashcard";

const themeNames = {
  languageLearning: "Language",
  firefighting: "Firefighting",
  computerScienceTrivia: "Computer Science",
  geographyQuiz: "Geography",
  fruitOrVegetable: "Fruits & Vegetables",
  headsUp: "Games",
  literallyAnything: "Random",
  guessTheCelebrity: "Celebrities",
  whatsThisDog: "Dogs",
  all: "All Themes",
};

function App() {
  const themes = Object.keys(cards);
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [history, setHistory] = useState([]);

  const themeCards =
    selectedTheme === "all"
      ? Object.values(cards).flat()
      : selectedTheme
      ? cards[selectedTheme]
      : [];

  const pickTheme = (theme) => {
    setSelectedTheme(theme);
    setStarted(false);
    setCurrent(0);
    setHistory([]);
  };

  const nextCard = () => {
    if (!started) {
      setStarted(true);
      return;
    }

    if (!themeCards.length) return;

    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * themeCards.length);
    } while (randomIndex === current);

    setHistory([...history, current]);
    setCurrent(randomIndex);
  };

  const prevCard = () => {
    if (history.length === 0) return;
    const last = history[history.length - 1];
    setHistory(history.slice(0, -1));
    setCurrent(last);
  };

  return (
    <div className="App">
      <h1>Ultimate Mixed Trivia Flashcards Game!</h1>

      <div className="theme-buttons">
        {themes.map((theme) => (
          <button key={theme} onClick={() => pickTheme(theme)}>
            {themeNames[theme]}
          </button>
        ))}
        <button onClick={() => pickTheme("all")}>{themeNames.all}</button>
      </div>

      {selectedTheme && (
        <>
          <p>
            Test your knowledge across{" "}
            {selectedTheme ? themeNames[selectedTheme] : ""}
          </p>
          <p>Total Cards: {themeCards.length}</p>
        </>
      )}

      {!selectedTheme ? (
        <Flashcard question="Welcome!" answer="Pick a theme to start the game." category="start" key="no-theme" />
      ) : (
        !started ? (
          <Flashcard question="Start!" answer={`Press the 'Next Card' button to begin the ${selectedTheme ? themeNames[selectedTheme] : "all themes"} game.`} category="start" key="start" />
        ) : (
          <Flashcard key={current} question={themeCards[current].question} answer={themeCards[current].answer} category={themeCards[current].category} />
        )
      )}

      <div>
        {started && <button onClick={prevCard}>Back Card</button>}
        {selectedTheme && <button onClick={nextCard}>Next Card</button>}
      </div>
    </div>
  );
}

export default App;