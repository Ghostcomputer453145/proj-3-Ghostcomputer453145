import "./App.css";
import { useState, useEffect } from "react";
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
  const [bgImage, setBgImage] = useState("/Trivia.png");
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
    setBgImage("/Trivia.png");
    setCardOrder(getThemeCards(theme));
  };
  const availableCards = cardOrder.filter(
    (card) => !mastered.includes(card)
  );
  const resetInput = () => {
    setGuess("");
    setFeedback("");
  };
  const nextCard = () => {
    setBgImage("/Trivia.png");
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
    setBgImage("/Trivia.png");
    if (current > 0) {
      setCurrent(current - 1);
      resetInput();
    }
  };
  const cleanString = (str) =>
    str.toLowerCase().replace(/[^a-z0-9]+/g, "").trim();
  const checkAnswer = () => {
    if (!guess || !availableCards.length) return;
    const cleanGuess = cleanString(guess);
    const cleanAnswer = cleanString(availableCards[current].answer);
    const correct =
      cleanAnswer.includes(cleanGuess) ||
      cleanGuess.includes(cleanAnswer);
    if (correct) {
      setFeedback("✅ Correct!");
      setBgImage("/Celebration.png");
      const newStreak = currentStreak + 1;
      setCurrentStreak(newStreak);
      if (newStreak > longestStreak) {
        setLongestStreak(newStreak);
      }
    } else {
      setFeedback("❌ Incorrect");
      setBgImage("/Wrong.png");
      setCurrentStreak(0);
    }
  };
  const shuffleCards = () => {
    setBgImage("/Trivia.png");
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
    <div
      className="App"
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1>Ultimate Mixed Trivia Flashcards Game!</h1>
      <p><strong>Name:</strong> Yumin Jang</p>
      <p><strong>Z Number:</strong> Z23655899</p>
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
          <p>Theme: {themeNames[selectedTheme]}</p>
          <p>Total Cards Remaining: {availableCards.length}</p>
        </>
      )}
      {!selectedTheme ? (
        <Flashcard
          question="Welcome!"
          answer="Pick a theme to start the game."
          category="start"
        />
      ) : !started ? (
        <>
          <Flashcard
            question="Start!"
            answer="Press 'Next Card' to begin."
            category="start"
          />
          <button onClick={nextCard}>Next Card</button>
        </>
      ) : availableCards.length === 0 ? (
        <Flashcard
          question="🎉 All Cards Mastered!"
          answer="Great job! Pick another theme to play again."
          category="end"
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
            <button onClick={checkAnswer}>Submit</button>
          </div>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "36px",
              color:
                feedback.includes("Correct")
                  ? "green"
                  : feedback.includes("Incorrect")
                  ? "red"
                  : "black",
            }}
          >
            {feedback}
          </p>
          <div>
            <button onClick={prevCard} disabled={current === 0}>
              Back
            </button>
            <button
              onClick={nextCard}
              disabled={current === availableCards.length - 1}
            >
              Next
            </button>
          </div>
          <div>
            <button onClick={shuffleCards}>Shuffle</button>
            <button onClick={markMastered}>Mark Mastered</button>
          </div>
          <p>Current Streak: {currentStreak}</p>
          <p>Longest Streak: {longestStreak}</p>
          <p>Mastered Cards: {mastered.length}</p>
        </>
      )}
    </div>
  );
}
export default App;