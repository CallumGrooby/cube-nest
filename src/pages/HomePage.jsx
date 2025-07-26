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
    text: "Garden Pods are versatile outdoor spaces designed to enhance your garden, offering functionality as a home office, studio, retreat, or entertainment area while blending seamlessly with natural surroundings.",
    button: "Find Out More",
  },
  {
    image: livingUnit,
    title: "Living Units",
    text: "Living Pods provide sustainable and efficient living solutions, ideal for eco-conscious individuals seeking compact yet comfortable residential spaces with minimal environmental impact.",
    button: "Find Out More",
  },
  {
    image: commericalUnit,
    title: "Commerical Units",
    text: "Commercial Pods are modular buildings tailored for business needs, offering flexible and customizable spaces such as offices, meeting rooms, marketing suites, or visitor centers, designed to optimize functionality and enhance professional environments.",
    button: "Find Out More",
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
