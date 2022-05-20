import "./App.css";
import React from "react";
import Title from "./Components/Title";
import ProgressBar from "./Components/ProgressBar";
import WordBank from "./Components/WordBank";

function App() {
  const maxMistakes = 6;
  let NoOfWrong = 0;



	return (
  <div className="app">
    {/* Possible place to add code */}
    <Title/>
    <div className="mistake-counter">{NoOfWrong} / {maxMistakes}</div>
    <ProgressBar noOfMistakes = {NoOfWrong}></ProgressBar>
    <WordBank></WordBank>
  </div>
  );
}

export default App;
