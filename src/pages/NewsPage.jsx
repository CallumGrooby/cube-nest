import React from "react";
import { HeroSection } from "../components/HeroSection";
import heroImage from "../assets/Lite Pod/Image1.webp";
import { ImageCarousel } from "../components/ImageCarousel";

import { NewsData } from "../data/NewsData.js";
import { Pageination } from "../ultilies/Pageination.jsx";

const carouselContent = [
  {
    image: heroImage,
    title: "Garden Units",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices sollicitudin commodo. Cras luctus lectus nibh, ac porta magna accumsan tristique. ",
    button: null,
  },
];

export const NewsPage = () => {
  return (
    <>
      <ImageCarousel contentData={carouselContent} />

      <NewsSection />
    </>
  );
};

const NewsSection = () => {
  return (
    <Pageination
      className={""}
      variant={"grid"}
      objects={NewsData}
      objectsPerPage={6}
      renderItem={(data) => <NewsArticle articleData={data}></NewsArticle>}
    />
  );
};

const NewsArticle = ({ articleData }) => {
  return (
    <article className="basis-1/3  font-mavenPro text-primary h-full overflow-hidden">
      <div className=" w-full max-h-[320px] h-full">
        <img
          className="w-full h-full object-cover"
          src={articleData.image}
          alt={""}
        />
      </div>
      <h1 className=" text-secondary text-2xl ">{articleData.title}</h1>
      <h2 className="text-sm">{articleData.date}</h2>
      {articleData.text.map((text, index) => {
        return <p key={index}>{text}</p>;
      })}
    </article>
  );
};
