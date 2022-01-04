import React, { useState } from "react";
import "./styles.css";
import Question from "./Question";
import data from "./data";

export default function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <div className="App">
      <h1>review card</h1>
      <Question />
    </div>
  );
}
