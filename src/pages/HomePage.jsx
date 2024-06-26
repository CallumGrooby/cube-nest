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
      <HeroSection />
      <ImageCarousel />
      <SplitSection content={AboutUsContent} />

      <Products />

      <SplitSection content={WhyUsContent} />
      <CompanyGrid />
      <Reviews />
    </>
  );
};
