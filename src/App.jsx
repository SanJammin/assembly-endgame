import { useState } from "react";
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
      <Status />
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
    </>
  );
}

export default App;
