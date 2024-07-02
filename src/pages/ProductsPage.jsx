import React from "react";
import { HeroSection } from "../components/HeroSection";
import { ImageCarousel } from "../components/ImageCarousel";
import { useParams } from "react-router-dom";

import ProductData, { ProductData as products } from "../data/ProductData";
import { Products } from "../components/products/Products";
import { QualitySection } from "../components/products/QualitySection";

export const ProductsPage = () => {
  const { productsType } = useParams();
  console.log(productsType);

  const result = ProductData.filter((product) => product.type == productsType);
  console.log(result);

  return (
    <>
      <HeroSection
        mainTitle={"FIND OUR"}
        subTitle1={"CUBE NEST"}
        subTitle2={"MODULAR"}
        subTitle3={"GARDEN UNITS"}
      />

      <ImageCarousel />
      <Products products={result} />
      <ContactSection />

      <QualitySection />
    </>
  );
};

const ContactSection = () => {
  return (
    <div className="bg-secondary h-[420px] text-background">
      <section className="container mx-auto flex flex-col gap-4 items-center justify-center h-full">
        <h1 className="font-bold text-4xl">Designed by us, made for you</h1>
        <p>
          Creating a better work life balance is simpler than you think. From
          foundation to completed building in a matter of days.
        </p>
        <button className="mt-16">Get In Touch</button>
      </section>
    </div>
  );
};
