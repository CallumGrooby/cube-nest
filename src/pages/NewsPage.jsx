import React from "react";
import { HeroSection } from "../components/HeroSection";
import heroImage from "../assets/Lite Pod/Image1.webp";
import { ImageCarousel } from "../components/ImageCarousel";

import { NewsData } from "../data/NewsData.js";
import { Pageination } from "../ultilies/Pageination.jsx";
import { Link, Outlet } from "react-router-dom";

const carouselContent = [
  {
    image: heroImage,
    title: "Latest News & Updates from Cube Nest",
    text: "Stay informed with the latest news and updates from Cube Nest. From innovative product launches and design awards we keep you up-to-date with everything happening in our world.  ",
    button: null,
  },
];

export const NewsPage = () => {
  return (
    <>
      <ImageCarousel contentData={carouselContent} />

      <NewsSection />

      <Outlet />
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
    <Link className="cursor-pointer" to={`article/${articleData.id}`}>
      <article className="basis-1/3  font-mavenPro text-primary h-full overflow-hidden">
        <div className=" w-full max-h-[200px] 2xl:max-h-[320px]  h-full">
          <img
            className="w-full h-full object-cover"
            src={articleData.image}
            alt={""}
          />
        </div>
        <h1 className=" text-secondary text-2xl ">{articleData.title}</h1>
        <h2 className="text-sm">{articleData.date}</h2>

        <div className="max-h-[50px] h-full text-clip">
          {articleData.text.map((text, index) => {
            return (
              <p className="text-base" key={index}>
                {text}
              </p>
            );
          })}
        </div>
      </article>
    </Link>
  );
};
