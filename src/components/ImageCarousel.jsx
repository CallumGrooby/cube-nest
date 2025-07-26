import React, { useEffect, useState } from "react";
import phImage from "../assets/placeholder.webp";

import testImage from "../assets/Garden Pod.jpg";
import Button from "./Button";
// const Content = [
//   {
//     image: phImage,
//     title: "Unit",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices sollicitudin commodo. Cras luctus lectus nibh, ac porta magna accumsan tristique. ",
//     button: "test",
//   },
//   {
//     image: testImage,
//     title: "Unit",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices sollicitudin commodo. Cras luctus lectus nibh, ac porta magna accumsan tristique. ",
//     button: "test",
//   },
//   {
//     image: phImage,
//     title: "Unit",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices sollicitudin commodo. Cras luctus lectus nibh, ac porta magna accumsan tristique. ",
//     button: "test",
//   },
// ];

export const ImageCarousel = ({ contentData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    console.log(currentIndex);
  }, [currentIndex]);

  return (
    <div className="relative h-[800px] carousel">
      <div className="relative h-full w-full">
        {contentData.map((item, index) => {
          return (
            <div
              key={index}
              className={`
                flex justify-center items-center
                absolute transition-all duration-1000 ease-in-out 
                ${currentIndex == index ? "left-0" : "left-[-100%]"}
                h-full w-full object-cover
              `}
            >
              <img
                key={currentIndex}
                src={item.image}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t to-[rgba(0,0,0,0.4)] from-[rgba(0,0,0,0.5)] p-8">
                <article className="container mx-auto h-full flex flex-col justify-center items-start">
                  <h1 className="text-background text-5xl my-4">
                    {item.title}
                  </h1>
                  <p className="text-background text-2xl max-w-[800px] mb-16">
                    {item.text}
                  </p>

                  {item.button != null && (
                    <Button variant={"default"} size={"lg"} href={item.to}>
                      {item.button}
                    </Button>
                  )}
                </article>
              </div>
            </div>
          );
        })}

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-row gap-1">
          {/* If the content has more than 1 element show the buttons */}
          {contentData.length > 1 &&
            contentData.map((data, index) => {
              return (
                <Button
                  key={index}
                  variant={"round"}
                  size={"smRounded"}
                  onClick={() => handleDotClick(index)}
                  className={`${currentIndex == index ? "bg-secondary" : ""}`}
                ></Button>
              );
            })}
        </div>
      </div>

      <svg
        className="absolute right-0 bottom-0 fill-background"
        width="400"
        height="400"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 400H400V0L0 400Z" />
      </svg>
    </div>
  );
};
