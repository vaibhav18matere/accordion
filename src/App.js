import React, { useState } from "react";
import "./styles.css";
import Question from "./Question";
import data from "./data";

export default function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <div className="container">
      <h3>Simple question and answers about login</h3>
      <section className="info">
        {questions.map((question) => {
          return <Question key={questions.id} {...questions} />;
        })}
      </section>
    </div>
  );
}
