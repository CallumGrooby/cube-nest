import React, { useState } from "react";

import Exterior from "../../assets/QualitySection/Exterior.jpg";
import Heating from "../../assets/QualitySection/Heating.jpg";
import Interior from "../../assets/QualitySection/Interior.jpg";
import Structure from "../../assets/QualitySection/Structure.jpg";
import Thermal from "../../assets/QualitySection/Thermal.jpg";
import Windows from "../../assets/QualitySection/Windows.jpg";

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

export const QualitySection = () => {
  const [selectedSection, setSelectedSection] = useState(Data[0].name);

  const handleChangeSelection = (sectionData) => {
    setSelectedSection(sectionData.name);
  };

  return (
    <section className="container mx-auto my-16">
      <header className="my-8">
        <h1 className="text-primary text-5xl uppercase text-center">
          Quality Built In
        </h1>
      </header>

      <div className="relative flex flex-col gap-16 h-full min-h-[620px]">
        {Data.map((sectionInfo, index) => {
          return (
            <article
              key={index}
              className={`flex gap-8 
                flex-col   
                md:flex-row
                lg:${
                  selectedSection == sectionInfo.name ? "visible" : "invisible"
                }
                lg:invisible;
                lg:absolute
                
                `}
            >
              <div className="basis-1/3 text-primary flex flex-col justify-center">
                <h1 className="font-bold text-xl uppercase">
                  {sectionInfo.name}
                </h1>
                <p>{sectionInfo.description}</p>
              </div>

              <div className="basis-2/3 h-[580px] ">
                <img
                  src={sectionInfo.image}
                  alt={sectionInfo.imageAlt}
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
            </article>
          );
        })}

        <SectionButtons
          buttonData={Data}
          handleClick={handleChangeSelection}
          currentSection={selectedSection}
        />
      </div>
    </section>
  );
};

const SectionButtons = ({ buttonData, handleClick, currentSection }) => {
  return (
    <div className="absolute bottom-0 w-full flex-row justify-between hidden lg:flex">
      {buttonData.map((data, index) => {
        const isSelected = currentSection === data.name;
        return (
          <div key={index} onClick={() => handleClick(data)}>
            <h1
              className={`
              font-semibold text-primary hover:text-secondary 
              transition-all duration-300 hover-underline-animation
              ${isSelected ? "text-secondary selected-underline" : ""}`}
            >
              {data.name}
            </h1>
          </div>
        );
      })}
    </div>
  );
};
