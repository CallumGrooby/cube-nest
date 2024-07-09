import React from "react";
import image from "../../assets/placeholder.webp";
import { Link, useParams } from "react-router-dom";

import { ProductCategories } from "../../data/ProductData";
import Button from "../Button";

export const Products = ({ products = ProductCategories }) => {
  const isGreaterThanThree = products.length > 3;

  return (
    <section className="container mx-auto  my-16">
      <header className="my-8">
        <h1 className="text-primary text-5xl uppercase text-center">
          Our Products
        </h1>
      </header>

      <div
        className={`gap-4 my-8 m-h-[700px]
        ${
          isGreaterThanThree
            ? `flex flex-col w-full`
            : `flex flex-col md:flex-row w-full`
        }
       `}
      >
        {products.map((productData, index) => {
          return (
            <ProductElement
              key={index}
              productData={productData}
              elementsIsGreaterThanThree={isGreaterThanThree}
            />
          );
        })}
      </div>
    </section>
  );
};

const ProductElement = ({ productData, elementsIsGreaterThanThree }) => {
  return (
    <div
      className={`relative transition-all ease-in duration-300
    ${
      elementsIsGreaterThanThree
        ? "lg:max-h-[600px] max-h-[400px] h-full  w-full"
        : "max-h-[700px] h-full"
    }
     basis-1/3  md:hover:basis-2/3`}
    >
      <img
        src={productData.image}
        alt="background"
        className={`
          ${
            elementsIsGreaterThanThree
              ? "lg:max-h-[600px] max-h-[400px] h-full w-full"
              : "h-[640px]"
          }
          w-full object-cover rounded-xl max-w-none`}
      />

      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t to-[rgba(0,0,0,0.4)] from-[rgba(0,0,0,0.9)] p-8  rounded-xl`}
      >
        <article className="h-full flex flex-col items-start">
          <h1 className="text-background text-5xl capitalize">
            {productData.name}
          </h1>

          <Button
            className="mt-auto"
            href={
              productData.to === null
                ? `/product/${productData.id}`
                : productData.to
            }
          >
            {productData.button}
          </Button>
        </article>
      </div>
    </div>
  );
};
