import { useState } from "react";
import { languages } from "./data/languages";
import "./App.css";
import Header from "./components/Header";
import Status from "./components/Status";
import Chips from "./components/Chips";
import Word from "./components/Word";
import Alphabet from "./components/Alphabet";

function App() {
  // State Values
  const [word, setWord] = useState("react");
  const [guessedLetters, setGuessedLetters] = useState([]);

  // Derived Values
  const wrongGuessCount = guessedLetters.filter(letter => !word.includes(letter)).length;
  const isGameWon = word.split("").every(letter => guessedLetters.includes(letter));
  const isGameLost = wrongGuessCount >= languages.length - 1;
  const isGameOver = isGameWon || isGameLost;

  // Static Values
  const letters = word.split("");

  function addGuessedLetter(letter) {
    setGuessedLetters(prevLetters => 
      prevLetters.includes(letter) ?
        prevLetters :
        [...prevLetters, letter]
    );
  }

  return (
    <>
      <Header />
      <Status 
        gameWon={isGameWon}
        gameLost={isGameLost}
      />
      <Chips 
        wrongGuessCount={wrongGuessCount}
      />
      <Word 
        word={letters}
        guessedLetters={guessedLetters} 
      />
      <Alphabet 
        onClick={addGuessedLetter}
        guessedLetters={guessedLetters}
        word={letters}
      />
      {isGameOver && <button className="new-game">New Game</button>}
    </>
  );
}

export default App;
