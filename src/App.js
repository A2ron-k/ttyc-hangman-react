import "./App.css";
import React from "react";
import Title from "./Components/Title";
import ProgressBar from "./Components/ProgressBar";
import WordBank from "./Components/WordBank";

function App() {
	return (
  <div className="app">
    {/* Possible place to add code */}
    <Title/>
    <ProgressBar></ProgressBar>
    <WordBank></WordBank>
  </div>
  );
}

export default App;
