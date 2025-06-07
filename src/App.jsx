import { useState } from "react";
import { languages } from "./data/languages";
import { getRandomWord } from "./data/utils";
import "./App.css";
import Header from "./components/Header";
import Status from "./components/Status";
import Chips from "./components/Chips";
import Word from "./components/Word";
import Alphabet from "./components/Alphabet";

function App() {
  // State Values
  const [word, setWord] = useState(() => getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState([]);

  // Derived Values
  const numGuessesLeft = languages.length - 1;
  const wrongGuessCount = guessedLetters.filter(letter => !word.includes(letter)).length;
  const isGameWon = word.split("").every(letter => guessedLetters.includes(letter));
  const isGameLost = wrongGuessCount >= numGuessesLeft;
  const isGameOver = isGameWon || isGameLost;
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];

  // Static Values
  const letters = word.split("");

  function addGuessedLetter(letter) {
    setGuessedLetters(prevLetters => 
      prevLetters.includes(letter) ?
        prevLetters :
        [...prevLetters, letter]
    );
  }

  function handleClick() {
    setWord(() => getRandomWord());
    setGuessedLetters([]);
  }

  return (
    <>
      <Header />
      <Status 
        gameWon={isGameWon}
        gameLost={isGameLost}
        wrongGuessCount={wrongGuessCount}
      />
      <Chips 
        wrongGuessCount={wrongGuessCount}
      />
      <Word 
        word={letters}
        guessedLetters={guessedLetters} 
      />
      {/* Combined visually-hidden aria-live region for status updates */}
      <section 
        className="sr-only"
        aria-live="polite"
        role="status"
      >
        <p>
          {word.includes(lastGuessedLetter) ? 
            `Correct! The letter ${lastGuessedLetter} is in the word.` :
            `Sorry the letter ${lastGuessedLetter} is not in the word.`}
            You have {numGuessesLeft} guess{numGuessesLeft === 1 ? "" : "es"} left.
        </p>
        <p>
          Current word: {word.split("").map(letter => guessedLetters.includes(letter) ? letter + "." : "blank.").join(" ")}
        </p>
      </section>
      <Alphabet 
        onClick={addGuessedLetter}
        guessedLetters={guessedLetters}
        word={letters}
        gameOver={isGameOver}
      />
      {isGameOver && <button className="new-game" onClick={handleClick}>New Game</button>}
    </>
  );
}

export default App;
