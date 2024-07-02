import { CompanyGrid } from "../components/CompanyGrid";
import { HeroSection } from "../components/HeroSection";
import { ImageCarousel } from "../components/ImageCarousel";
import { Reviews } from "../components/Reviews";
import { SplitSection } from "../components/SplitSection";
import { Products } from "../components/products/Products";

import { AboutUsContent, WhyUsContent } from "../data/AboutUsData";

export const Homepage = () => {
  return (
    <>
      <HeroSection
        mainTitle="Welcome To"
        subTitle1="Cube Nest"
        subTitle2="Modular"
        subTitle3="Living Units"
      />
      <ImageCarousel />
      <SplitSection content={AboutUsContent} />

      <Products />

      <SplitSection content={WhyUsContent} />
      <CompanyGrid />
      <Reviews />
    </>
  );
};
