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

  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState("");

  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  const [mastered, setMastered] = useState([]);
  const [cardOrder, setCardOrder] = useState([]);

  const getThemeCards = (theme) => {
    return theme === "all"
      ? Object.values(cards).flat()
      : cards[theme];
  };

  const pickTheme = (theme) => {
    setSelectedTheme(theme);
    setStarted(false);
    setCurrent(0);
    setGuess("");
    setFeedback("");
    setCurrentStreak(0);
    setLongestStreak(0);
    setMastered([]);

    setCardOrder(getThemeCards(theme));
  };

  const availableCards = cardOrder.filter(
    (card) => !mastered.includes(card)
  );

  const nextCard = () => {
    if (!started) {
      setStarted(true);
      return;
    }

    if (current < availableCards.length - 1) {
      setCurrent(current + 1);
      resetInput();
    }
  };

  const prevCard = () => {
    if (current > 0) {
      setCurrent(current - 1);
      resetInput();
    }
  };

  const resetInput = () => {
    setGuess("");
    setFeedback("");
  };

  const cleanString = (str) => 
    str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "")
      .trim();

    const checkAnswer = () => {
      if (!guess) return;
      const cleanGuess = cleanString(guess);
      const cleanAnswer = cleanString(availableCards[current].answer);
      const correct = cleanAnswer.includes(cleanGuess) || cleanGuess.includes(cleanAnswer);
      
      if (correct) {
        setFeedback("✅ Correct!");
        const newStreak = currentStreak + 1;
        setCurrentStreak(newStreak);
        if (newStreak > longestStreak) {
          setLongestStreak(newStreak);
        }
      } else {
        setFeedback("❌ Incorrect");
        setCurrentStreak(0);
      }
    };

  const shuffleCards = () => {
    const shuffled = [...availableCards].sort(
      () => Math.random() - 0.5
    );

    setCardOrder(shuffled);
    setCurrent(0);
    resetInput();
  };

  const markMastered = () => {
    const updated = [...mastered, availableCards[current]];
    setMastered(updated);
      if (current > 0) {
    setCurrent(current - 1);
  } else {
    setCurrent(0);
  }
    resetInput();
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
        <button onClick={() => pickTheme("all")}>
          {themeNames.all}
        </button>
      </div>

      {selectedTheme && (
        <>
          <p>
            Test your knowledge across{" "}
            {themeNames[selectedTheme]}
          </p>
          <p>Total Cards: {availableCards.length}</p>
        </>
      )}

      {!selectedTheme ? (
        <Flashcard
          question="Welcome!"
          answer="Pick a theme to start the game."
          category="start"
          key="no-theme"
        />
      ) : !started ? (
        <>
          <Flashcard
          question="Start!"
          answer={`Press the 'Next Card' button to begin the ${
            themeNames[selectedTheme]
          } game.`}
          category="start"
          key="start"
        />

        <button onClick={nextCard}>
          Next Card
        </button>
        </>

      ) : availableCards.length === 0 ? (
        <Flashcard
          question="🎉 All Cards Mastered!"
          answer="Great job! You mastered all the cards in this theme. Pick another theme to play again."
          category="end"
          key="end"
        />
      ) : (
        <>
          <Flashcard
            key={current}
            question={availableCards[current].question}
            answer={availableCards[current].answer}
            category={availableCards[current].category}
            image={availableCards[current].image}
          />

          <div>
            <input
              type="text"
              placeholder="Enter your guess"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
            />
            <button onClick={checkAnswer}>
              Submit
            </button>
          </div>

          <p
            style={{
              fontWeight: "bold",
              fontSize: "36px",
              textTransform: "uppercase",
              color: feedback.includes("Correct") 
              ? "green" 
              : feedback.includes("Incorrect")
              ? "red"
              : "black",
            }}
          >
          {feedback}
          </p>

          <div>
            <button
              onClick={prevCard}
              disabled={current === 0}
            >
              Back Card
            </button>

            <button
              onClick={nextCard}
              disabled={
                current === availableCards.length - 1
              }
            >
              Next Card
            </button>
          </div>

          <div>
            <button onClick={shuffleCards}>
              Shuffle
            </button>

            <button onClick={markMastered}>
              Mark Mastered
            </button>
          </div>

          <p>Current Streak: {currentStreak}</p>
          <p>Longest Streak: {longestStreak}</p>
          <p>Mastered Cards: {mastered.length}</p>
          <div>
            <h3>Mastered List:</h3>
            {mastered.map((card, index) => (
              <p key={index}>{card.question}</p>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;