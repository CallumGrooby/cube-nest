import React, { useState } from "react";

const LivingPodQuestions = [
  {
    question: "What is a Living Pod?",
    answer:
      "A Living Pod is a versatile, self-contained living space designed for comfort and functionality. It can serve as an additional living area, guest accommodation, or a rental unit, seamlessly integrated into your garden.",
  },
  {
    question: "Do I need planning permission for a Living Pod?",
    answer:
      "Planning permission is typically not required for our Living Pods, provided they meet certain criteria. However, we recommend checking with your local planning authority to confirm specific requirements.",
  },
  {
    question: "What sizes are available for Living Pods?",
    answer:
      "Living Pods come in various sizes to suit different needs. Available sizes include:\n- W 9.08m x D 4.39m x H 2.7m\n- W 10.08m x D 4.39m x H 2.7m\n- W 11.08m x D 4.39m x H 2.7m (*as shown)\n- W 12.08m x D 4.39m x H 2.7m\n- W 13.08m x D 4.39m x H 2.7m",
  },
  {
    question: "Can I customize the interior of my Living Pod?",
    answer:
      "Yes, our Living Pods can be customized to your specifications. We offer a range of options for kitchens, bathrooms, and living areas to ensure your pod meets your needs and preferences.",
  },
  {
    question: "What materials are used in the construction of Living Pods?",
    answer:
      "Our Living Pods are constructed with solid engineered structural FSC timber and steel frameworks. They feature high-performance insulation, thermally modified timber cladding, and premium real wood flooring for a durable and luxurious finish.",
  },
  {
    question: "How energy-efficient are Living Pods?",
    answer:
      "Living Pods are designed with high levels of natural thermal and acoustic insulation, energy-efficient glazing, and digitally controlled underfloor heating to ensure they are comfortable and efficient year-round.",
  },
  {
    question: "What maintenance is required for a Living Pod?",
    answer:
      "Living Pods are designed for low maintenance. The thermally modified timber cladding requires minimal upkeep, and the high-quality materials used throughout ensure longevity and durability.",
  },
  {
    question: "Can Living Pods be used year-round?",
    answer:
      "Yes, Living Pods are suitable for year-round use. They are designed with high levels of insulation and energy-efficient heating systems to ensure comfort in all seasons.",
  },
];

export const FAQSection = ({ title, questions = LivingPodQuestions }) => {
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
