import { CompanyGrid } from "../components/CompanyGrid";
import { HeroSection } from "../components/HeroSection";
import { ImageCarousel } from "../components/ImageCarousel";
import { Reviews } from "../components/Reviews";
import { SplitSection } from "../components/SplitSection";
import { Products } from "../components/products/Products";

import { AboutUsContent, WhyUsContent } from "../data/AboutUsData";
import { ProductCategories } from "../data/ProductData";
import phImage from "../assets/placeholder.webp";

import gardenUnit from "../assets/Lite Pod/Image1.webp";
import livingUnit from "../assets/QualitySection/Structure.jpg";
import commericalUnit from "../assets/Commerical.webp";

const carouselContent = [
  {
    image: gardenUnit,
    title: "Garden Units",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices sollicitudin commodo. Cras luctus lectus nibh, ac porta magna accumsan tristique. ",
    button: "test",
  },
  {
    image: livingUnit,
    title: "Living Units",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices sollicitudin commodo. Cras luctus lectus nibh, ac porta magna accumsan tristique. ",
    button: "test",
  },
  {
    image: commericalUnit,
    title: "Commerical Units",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices sollicitudin commodo. Cras luctus lectus nibh, ac porta magna accumsan tristique. ",
    button: "test",
  },
];

export const Homepage = () => {
  return (
    <>
      <HeroSection
        mainTitle="Welcome To"
        subTitle1="Cube Nest"
        subTitle2="Modular"
        subTitle3="Living Units"
      />
      <ImageCarousel contentData={carouselContent} />
      <SplitSection content={AboutUsContent} />

      <Products products={ProductCategories} />

      <SplitSection content={WhyUsContent} />
      <CompanyGrid />
      <Reviews />
    </>
  );
};
