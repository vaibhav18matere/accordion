import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  return (
    <article className="question">
      <header>
        <AiOutlinePlus />
        <h4>{title}</h4>
        <button className="btn">Btn</button>
        <AiOutlineMinus />
      </header>
      <p>{info}</p>
    </article>
  );
};

export default Question;
