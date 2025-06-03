import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Status from "./components/Status";
import Chips from "./components/Chips";

function App() {

  return (
    <>
      <Header />
      <Status />
      <Chips />
    </>
  );
}

export default App;
