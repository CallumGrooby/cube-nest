import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../ultilies/MergeCSS";

const splitContentIntoColumns = (content, columns) => {
  const columnLength = Math.ceil(content.length / columns);
  return Array.from({ length: columns }, (_, index) =>
    content.slice(index * columnLength, (index + 1) * columnLength)
  );
};

const SectionVariants = cva("container mx-auto", {
  variants: {
    variant: {
      default: "flex flex-col lg:flex-row font-mavenPro text-primary my-16",
      twoColumn: "flex flex-col font-mavenPro text-primary my-16",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const ContentSection = React.forwardRef(
  ({ className, variant, data, ...props }, ref) => {
    const columns = 2;
    const contentColumns = splitContentIntoColumns(data.content, columns);

    const renderContent = () => {
      switch (variant) {
        case "twoColumn":
          return (
            <section className={cn(SectionVariants({ variant, className }))}>
              <header>
                <h1 className="text-5xl text-secondary">{data.title}</h1>
                <p className="mt-2 mb-4 text-xl">{data.subheading}</p>
              </header>

              <div className={`flex flex-col md:flex-row md:gap-4 gap-4`}>
                {contentColumns.map((column, columnIndex) => (
                  <div
                    className="basis-1/2 flex flex-col gap-4"
                    key={columnIndex}
                  >
                    {column.map((paragraph, index) => (
                      <p className="text-lg" key={index}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </section>
          );
        case "default":
        default:
          return (
            <div className={cn(SectionVariants({ variant, className }))}>
              <header className="basis-1/3">
                <h1 className="text-5xl text-secondary">{data.title}</h1>
                <p className="mt-2 mb-4 text-xl">{data.subheading}</p>
              </header>

              <div className="basis-4/6 flex flex-col gap-2">
                {data.content.map((content, index) => {
                  return <p key={index}>{content};</p>;
                })}
              </div>
            </div>
          );
      }
    };

    return (
      <section ref={ref} {...props}>
        {renderContent()}
      </section>
    );
  }
);

ContentSection.displayName = "Content";

export default ContentSection;
