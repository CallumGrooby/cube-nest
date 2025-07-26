import React, { useState } from "react";

export const FAQSection = ({ title, questions }) => {
  const midPoint = Math.ceil(questions.length / 2);

  const firstHalf = questions.slice(0, midPoint);
  const secondHalf = questions.slice(midPoint);

  return (
    <section className="container mx-auto flex flex-col gap-8 my-16 p-4 md:p-0">
      <header>
        <h1 className="text-5xl text-center text-primary mb-4">{title}</h1>
      </header>

      <section className="flex gap-4 flex-col md:flex-row">
        <div className="basis-1/2">
          {firstHalf.map((questionInfo, index) => {
            return <Question key={index} questionData={questionInfo} />;
          })}
        </div>

        <div className="basis-1/2">
          {secondHalf.map((questionInfo, index) => {
            return <Question key={index} questionData={questionInfo} />;
          })}
        </div>
      </section>
    </section>
  );
};

const Question = ({ questionData }) => {
  const [isAnswerShown, setShowAnswer] = useState(false);

  const handleShowAnswer = () => {
    setShowAnswer(!isAnswerShown);
  };

  return (
    <article
      onClick={handleShowAnswer}
      className="text-primary cursor-pointer inline-flex flex-col gap-2"
    >
      <h1 className="text-3xl hover-underline-animation cursor-pointer w-fit">
        {questionData.question}
      </h1>
      <p
        className={`my-4 text-2xl transition-all duration-700 ease-in-out overflow-hidden h-full  ${
          isAnswerShown ? "max-h-[200px]" : "max-h-0"
        }`}
      >
        {questionData.answer}
      </p>
    </article>
  );
};
