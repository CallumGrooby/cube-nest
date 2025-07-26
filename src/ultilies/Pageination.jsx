import { cva } from "class-variance-authority";
import React, { useState } from "react";
import { cn } from "../ultilies/MergeCSS";
import Button from "../components/Button";
const PageVariants = cva("", {
  variants: {
    variant: {
      default: "flex flex-col md:flex-row gap-4 p-4 justify-center",
      grid: "my-16 container mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ",
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
    <Button
      key={index}
      variant={"round"}
      size={"smRounded"}
      onClick={() => handlePageChange(index)}
      className={`${currentPage == index ? "bg-secondary" : ""}`}
    ></Button>
  ));

  return (
    <section className="container mx-auto">
      <div className={cn(PageVariants({ variant, className }))}>
        {currentObjects.map((object, index) => {
          return (
            <article className="basis-1/3" key={index}>
              {renderItem(object)}
            </article>
          );
        })}
      </div>

      <div className="flex flex-row gap-2 justify-center py-8">
        {PageinationButtons}
      </div>
    </section>
  );
};
