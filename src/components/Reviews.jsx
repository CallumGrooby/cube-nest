import React from "react";
import { ReviewsData } from "../data/ReviewsData";
import { Pageination } from "../ultilies/Pageination";

export const Reviews = () => {
  return (
    <section className="container mx-auto">
      <Pageination
        className={""}
        variant={"default"}
        objects={ReviewsData}
        renderItem={(review) => (
          <div className="text-primary font-mavenPro">
            <h1 className="capitalize font-bold text-2xl">
              &quot;{review.title}&quot;
            </h1>
            <p>{review.text}</p>
            <div className="flex flex-col items-end">
              <h1 className="text-xl">{review.user}</h1>
              <div className="flex gap-2">
                <h1 className="text-base">{review.date}</h1>
                <ReviewStars numberOfStars={5}></ReviewStars>
              </div>
            </div>
          </div>
        )}
      />
    </section>
  );
};

const ReviewStars = ({ numberOfStars }) => {
  const stars = [];
  for (let i = 0; i < numberOfStars; i++) {
    stars.push(<h1 key={i}>★</h1>);
  }
  return <div className="flex text-orange-600">{stars}</div>;
};
