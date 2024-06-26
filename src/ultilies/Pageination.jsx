import { cva } from "class-variance-authority";
import React, { useState } from "react";
import { cn } from "../ultilies/MergeCSS";
const PageVariants = cva("", {
  variants: {
    variant: {
      default: "flex flex-row gap-4",
    },
  },
});

export const Pageination = ({
  objects,
  objectsPerPage = 3,
  renderItem,
  className,
  variant,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(objects.length / objectsPerPage);

  const indexOfLastObject = Math.min(currentPage + 1) * objectsPerPage;
  const indexOfFirstObject = indexOfLastObject - objectsPerPage;

  const currentObjects = objects.slice(indexOfFirstObject, indexOfLastObject);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const PageinationButtons = Array.from({ length: totalPages }, (_, index) => (
    <div
      className="bg-gray-400 w-7 h-7 flex justify-center items-center"
      key={index}
      onClick={() => handlePageChange(index)}
    >
      {currentPage == index ? (
        <span className="block w-5 h-5 bg-blue-800" />
      ) : null}
    </div>
  ));

  return (
    <section className="container mx-auto">
      <div className={cn(PageVariants({ variant, className }))}>
        {currentObjects.map((object, index) => {
          return <article key={index}>{renderItem(object)}</article>;
        })}
      </div>

      <div className="flex flex-row gap-4 justify-center py-8">
        {PageinationButtons}
      </div>
    </section>
  );
};
