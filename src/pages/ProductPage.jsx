import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductData } from "../data/ProductData";

import image from "../assets/placeholder.webp";
import { ImageGrid } from "../components/ImageGrid";
import { FAQSection } from "../components/products/FAQSection";
import {
  CommercialPodQuestions,
  GardenPodQuestions,
  LivingPodQuestions,
} from "../data/ProductQuestions";
import Button from "../components/Button";

export const ProductPage = () => {
  const { productId } = useParams();

  const result = ProductData.find((product) => product.id == productId);
  console.log(result);

  const FAQTitle = () => {
    let tempTitle;
    console.log(result.type);
    if (result.type == "garden") {
      tempTitle = "Learn more about our innovative Garden Pods.";
    }
    if (result.type == "living") {
      tempTitle = "Discover the possibilities with our versatile Living Pods.";
    }
    if (result.type == "commercial") {
      tempTitle = "Commerial Pods";
    }

    console.log(tempTitle);

    return tempTitle;
  };

  const FaqQuestions = () => {
    let tempQuestions;
    if (result.type == "garden") {
      tempQuestions = GardenPodQuestions;
    }
    if (result.type == "living") {
      tempQuestions = LivingPodQuestions;
    }
    if (result.type == "commercial") {
      tempQuestions = CommercialPodQuestions;
    }
    return tempQuestions;
  };

  return (
    <>
      <section>
        <div className="max-w-[1920px] w-full h-[500px] md:h-[600px] lg:h-[900px] mx-auto">
          {result && (
            <img className="w-full h-full object-cover" src={result.image} />
          )}
        </div>

        <ProductInfo product={result} />
        <ImageGrid
          image1={result.productImages[0]}
          image2={result.productImages[1]}
          image3={result.productImages[2]}
          image4={result.productImages[3]}
        />

        <FAQSection title={FAQTitle()} questions={FaqQuestions()} />
      </section>
    </>
  );
};

const ProductInfo = ({ product }) => {
  const [clickedItem, setClickedItem] = useState("Summary");

  const handleClick = (item) => {
    setClickedItem(item);
  };

  return (
    <section className="container mx-auto flex flex-col p-4 md:flex-row gap-8 text-primary">
      <article className="basis-1/2 p-4 flex flex-col gap-8">
        <div>
          <h1 className="font-semibold text-3xl">{product.name}</h1>
          <p className="my-2 text-xl">{product.shortDescription}</p>
        </div>

        <h1 className="font-semibold text-2xl">£{product.price} + VAT</h1>

        <div>
          <h1 className="font-semibold text-xl mb-2">Available Sizes</h1>
          <div className="inline-flex flex-col gap-2">
            {product.sizes.map((size, index) => (
              <h1 key={index} className="flex gap-2 text-lg items-center">
                <span className="block bg-secondary w-8 h-8" />
                {size}
              </h1>
            ))}
          </div>
        </div>

        <Button>Make A Enquiry</Button>
      </article>

      <article className="basis-1/2 p-4 text-justify">
        <Header clickedItem={clickedItem} handleClick={handleClick} />

        {clickedItem == "Summary" && (
          <div className="p-4 text-lg flex flex-col gap-2">
            {product.summary.map((paragraph, index) => {
              return <p key={index}>{paragraph}</p>;
            })}
          </div>
        )}

        {clickedItem == "Features" && (
          <ul className="p-4 text-lg flex flex-col gap-2">
            {product.features.map((paragraph, index) => {
              return (
                <li className="list-disc ml-2" key={index}>
                  {paragraph}
                </li>
              );
            })}
          </ul>
        )}
      </article>
    </section>
  );
};

const Header = ({ clickedItem, handleClick }) => {
  const tabs = ["Summary", "Features"];

  return (
    <header className="flex justify-around font-semibold text-xl mb-2">
      {tabs.map((tabData, index) => (
        <h1
          key={index}
          className={`hover-underline-animation  hover:text-secondary cursor-pointer ${
            clickedItem == tabData ? "selected-underline" : ""
          }`}
          onClick={() => handleClick(tabData)}
        >
          {tabData}
        </h1>
      ))}
    </header>
  );
};
