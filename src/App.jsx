import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Status from "./components/Status";
import Chips from "./components/Chips";
import Word from "./components/Word";
import Alphabet from "./components/Alphabet";

function App() {
  const [word, setWord] = useState("react");

  const letters = word.split("");

  return (
    <>
      <Header />
      <Status />
      <Chips />
      <Word word={letters} />
      <Alphabet />
    </>
  );
}

export default App;
