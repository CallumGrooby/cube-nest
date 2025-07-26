import React from "react";
import image from "../assets/placeholder.webp";

export const ImageGrid = ({ image1, image2, image3, image4 }) => {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 border min-h-[490px]">
          <img src={image1} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="row-span-2 border">
          <img src={image2} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="border aspect-square">
          <img src={image3} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="border aspect-square">
          <img src={image4} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
};
