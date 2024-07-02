import React from "react";
import image from "../../assets/placeholder.webp";
import { Link, useParams } from "react-router-dom";

import { ProductCategories } from "../../data/ProductData";

export const Products = ({ products = ProductCategories }) => {
  return (
    <section className="container mx-auto  my-16">
      <header className="my-8">
        <h1 className="text-primary text-5xl uppercase text-center">
          Our Products
        </h1>
      </header>

      <div className="flex flex-row gap-4 my-8 m-h-[700px]">
        {products.map((productData, index) => {
          return (
            <div
              key={index}
              className=" relative basis-1/3 transition-all ease-in duration-300 hover:basis-2/3 h-[700px]"
            >
              <img
                src={productData.image}
                alt="background"
                className="w-full h-full object-cover rounded-xl"
              />

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t to-[rgba(0,0,0,0.4)] from-[rgba(0,0,0,0.9)] p-8  rounded-xl`}
              >
                <article>
                  <h1 className="text-background text-5xl capitalize">
                    {productData.name} Units
                  </h1>

                  <Link
                    to={
                      productData.to === null
                        ? `/product/${productData.id}`
                        : productData.to
                    }
                  >
                    {productData.button}
                  </Link>
                </article>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
