import React from "react";

const content = {
  section: "About Us",
  title:
    "We can supply and install in a fraction of the time but with quality and craftsmanship built to last.",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices sollicitudin commodo. Cras luctus lectus nibh, ac porta magna accumsan tristique. Nullam facilisis sapien fringilla, sodales eros a, iaculis urna. Phasellus ultrices, mi ac aliquet viverra, eros nisi placerat mi, at efficitur dui risus pellentesque risus. Etiam nec sem felis. Vivamus aliquet justo nisl, nec fermentum mauris pharetra quis. Praesent gravida dignissim lectus, quis sodales nisi hendrerit ac. Phasellus elementum pretium nisl hendrerit iaculis. Duis scelerisque, mi id lacinia efficitur, nisi purus sollicitudin augue, sed lacinia risus mauris ac metus.",
};

export const SplitSection = ({ content }) => {
  return (
    <div className="bg-secondary text-background my-16">
      <section className="container mx-auto p-4 flex flex-col gap-4 lg:flex-row py-16">
        <div className="basis-1/3 text-2xl lg:text-5xl  uppercase">
          <h1>{content.section}</h1>
        </div>

        <div className="basis-8/12 flex flex-col gap-4">
          <h1 className="font-bold text-4xl leading-normal">{content.title}</h1>
          <p className="text-xl leading-relaxed font-medium">
            {content.content}
          </p>
        </div>
      </section>
    </div>
  );
};
