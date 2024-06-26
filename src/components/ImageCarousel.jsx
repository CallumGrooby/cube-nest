import React, { useEffect, useState } from "react";
import phImage from "../assets/placeholder.webp";

import testImage from "../assets/Garden Pod.jpg";
const Content = [
  {
    image: phImage,
    title: "Unit",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices sollicitudin commodo. Cras luctus lectus nibh, ac porta magna accumsan tristique. ",
    button: "test",
  },
  {
    image: testImage,
    title: "Unit",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices sollicitudin commodo. Cras luctus lectus nibh, ac porta magna accumsan tristique. ",
    button: "test",
  },
  {
    image: phImage,
    title: "Unit",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices sollicitudin commodo. Cras luctus lectus nibh, ac porta magna accumsan tristique. ",
    button: "test",
  },
];

export const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === Content.length ? 0 : prevIndex + 1
    );

    //if the previous index +1 is equal to the images.length reset the index to 0, else add one
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? Content.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    console.log(currentIndex);
  }, [currentIndex]);

  return (
    <div className="relative h-[800px] carousel">
      <div className="relative h-full w-full">
        {Content.map((item, index) => {
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
            </div>
          );
        })}

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-row gap-1">
          {Content.map((data, index) => {
            return (
              <Button
                key={index}
                data={index}
                handleClick={handleDotClick}
                currentIndex={currentIndex}
              />
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

const Button = ({ data, handleClick, currentIndex }) => {
  return (
    <button
      className={` z-10
        h-4 w-4 rounded-full
        ${currentIndex === data ? "bg-white" : "bg-black"}`}
      onClick={() => handleClick(data)}
    ></button>
  );
};
