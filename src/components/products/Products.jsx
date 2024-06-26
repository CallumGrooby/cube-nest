import React from "react";
import image from "../../assets/placeholder.webp";

const ProductsData = [
  {
    productName: "Garden Pods",
    productImage: image,
  },
  {
    productName: "Garden Pods",
    productImage: image,
  },
  {
    productName: "Garden Pods",
    productImage: image,
  },
];

export const Products = () => {
  return (
    <section className="container mx-auto  my-16">
      <header className="my-8">
        <h1 className="text-primary text-5xl uppercase text-center">
          Our Products
        </h1>
      </header>

      <div className="flex flex-row gap-4 my-8">
        {ProductsData.map((productData, index) => {
          return (
            <div
              key={index}
              className=" relative basis-1/3 transition-all ease-in duration-300 hover:basis-2/3 min-h-[700px]"
            >
              <img
                src={productData.productImage}
                alt="background"
                className="w-full h-full object-cover"
              />

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t to-[rgba(0,0,0,0.4)] from-[rgba(0,0,0,0.9)] p-8`}
              >
                <article>
                  <h1 className="text-background text-5xl">
                    {productData.productName}
                  </h1>
                </article>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
