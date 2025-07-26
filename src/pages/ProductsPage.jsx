import React from "react";
import { HeroSection } from "../components/HeroSection";
import { ImageCarousel } from "../components/ImageCarousel";
import { useParams } from "react-router-dom";

import ProductData, { ProductData as products } from "../data/ProductData";
import { Products } from "../components/products/Products";
import ClickableSections from "../components/ClickableSections";

import Exterior from "../assets/QualitySection/Exterior.jpg";
import Heating from "../assets/QualitySection/Heating.jpg";
import Interior from "../assets/QualitySection/Interior.jpg";
import Structure from "../assets/QualitySection/Structure.jpg";
import Thermal from "../assets/QualitySection/Thermal.jpg";
import Windows from "../assets/QualitySection/Windows.jpg";
import Button from "../components/Button";

import gardenUnit from "../assets/Lite Pod/Image1.webp";
import livingUnit from "../assets/QualitySection/Structure.jpg";
import commericalUnit from "../assets/Commerical.webp";

const Data = [
  {
    name: "Structure",
    description:
      "Our pods are constructed with a robust framework that guarantees stability and durability. Utilizing precision engineering and high-quality materials, each pod is built to withstand the test of time, providing a solid foundation for your garden office or business premises.",
    image: Structure,
    imageAlt: "",
  },
  {
    name: "Thermal & acoustics",
    description:
      "Experience unparalleled comfort with our advanced thermal and acoustic insulation. Our pods are designed to maintain optimal temperature and soundproofing, ensuring a peaceful and efficient environment regardless of external conditions.",
    image: Thermal,
    imageAlt: "",
  },
  {
    name: "Exterior finishes",
    description:
      "Choose from a variety of premium exterior finishes that blend seamlessly with your surroundings. From sleek, modern cladding to natural wood options, our finishes are not only aesthetically pleasing but also weather-resistant and low-maintenance.",
    image: Exterior,
    imageAlt: "",
  },
  {
    name: "Windows & Doors",
    description:
      "Enhance your pod's natural light and accessibility with our high-quality windows and doors. Crafted for energy efficiency and security, our stylish designs provide a perfect balance of form and function, elevating the overall look and feel of your space.",
    image: Windows,
    imageAlt: "",
  },
  {
    name: "Heating, cooling & lighting",
    description:
      "Stay comfortable all year round with our state-of-the-art heating, cooling, and lighting solutions. Our energy-efficient systems ensure a pleasant indoor climate and optimal illumination, tailored to meet your specific needs and preferences.",
    image: Heating,
    imageAlt: "",
  },
  {
    name: "Interior finishes",
    description:
      "The interior finishes of our pods are a testament to our commitment to quality and style. With a range of customizable options, from sleek modern designs to warm, inviting textures, each pod is designed to reflect your unique taste while providing a functional and beautiful space.",
    image: Interior,
    imageAlt: "",
  },
];

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
        subTitle3={`${productsType} UNITS`}
      />

      <ImageCarousel contentData={carouselContent} />
      <Products products={result} />
      <ContactSection />

      <ClickableSections
        variant={"default"}
        title={"Quality Built In"}
        data={Data}
      />
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

        <Button
          className="mt-16"
          variant={"white"}
          size={"lg"}
          href={"/contact"}
        >
          Get In Touch
        </Button>
      </section>
    </div>
  );
};
