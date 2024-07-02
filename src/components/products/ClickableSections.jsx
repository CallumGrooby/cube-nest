import React, { forwardRef, useState } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../ultilies/MergeCSS";

const SectionVariants = cva(
  "relative flex gap-8 flex-col md:flex-row lg:invisible; lg:absolute h-[580px] w-full",
  {
    variants: {
      variant: {
        default: "flex flex-col lg:flex-row font-mavenPro text-primary",
        imageAsBackground: "flex flex-col font-mavenPro text-primary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const ClickableSections = forwardRef(
  ({ className, variant, data, title, ...props }, ref) => {
    const [selectedSection, setSelectedSection] = useState(data[0].name);

    const handleChangeSelection = (sectionData) => {
      setSelectedSection(sectionData.name);
    };

    const renderComponent = () => {
      return data.map((sectionInfo, index) => {
        const commonClasses = cn(
          SectionVariants({ variant }),
          className,
          selectedSection === sectionInfo.name ? "lg:visible" : "lg:invisible"
        );

        switch (variant) {
          case "imageAsBackground":
            return (
              <article key={index} className={commonClasses}>
                <img
                  src={sectionInfo.image}
                  className="w-full h-full object-cover rounded-xl"
                  alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-t to-[rgba(0,0,0,0.4)] from-[rgba(0,0,0,0.9)] p-8 rounded-xl">
                  <article className="text-background font-mavenPro flex flex-col gap-4">
                    <h1 className="text-5xl capitalize">{sectionInfo.name}</h1>
                    <p className="max-w-[600px] w-full">
                      {sectionInfo.description}
                    </p>
                  </article>
                </div>
              </article>
            );

          case "default":
          default:
            return (
              <article key={index} className={commonClasses}>
                <div className="basis-1/3 text-primary flex flex-col justify-center">
                  <h1 className="font-bold text-xl uppercase">
                    {sectionInfo.name}
                  </h1>
                  <p>{sectionInfo.description}</p>
                </div>
                <div className="basis-2/3 h-[580px]">
                  <img
                    src={sectionInfo.image}
                    alt={sectionInfo.imageAlt}
                    className="object-cover w-full h-full rounded-xl"
                  />
                </div>
              </article>
            );
        }
      });
    };

    return (
      <section
        ref={ref}
        {...props}
        className={cn("container mx-auto", className)}
      >
        <header className="my-8">
          <h1 className="text-primary text-5xl uppercase text-center">
            {title}
          </h1>
        </header>
        <div className="relative flex flex-col gap-16 h-full min-h-[620px]">
          {renderComponent()}
          <SectionButtons
            buttonData={data}
            handleClick={handleChangeSelection}
            currentSection={selectedSection}
          />
        </div>
      </section>
    );
  }
);

const SectionButtons = ({ buttonData, handleClick, currentSection }) => {
  return (
    <div className="absolute bottom-0 w-full flex-row justify-between hidden lg:flex px-8">
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

ClickableSections.displayName = "Clickable Section";

export default ClickableSections;
