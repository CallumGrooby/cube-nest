import React from "react";
import heroVideo from "../assets/Video.webp";

export const AboutUs = () => {
  return (
    <section>
      <HeroVideo />
      <GridSection />
    </section>
  );
};

const HeroVideo = () => {
  return (
    <div className="relative h-[900px] w-full font-mavenPro">
      <img src={heroVideo} className="w-full h-full object-cover" />
      <div
        className={`absolute inset-0 bg-gradient-to-t to-[rgba(0,0,0,0.4)] from-[rgba(0,0,0,0.6)]`}
      >
        <article className="container mx-auto flex flex-col justify-center h-full text-background">
          <div className="max-w-[60%] w-full flex flex-col gap-4">
            <h1 className="text-background text-5xl capitalize">
              Revolutionizing Modular Living
            </h1>
            <p className="text-lg">
              At Cube Nest, we blend innovative design with robust construction
              to create modular garden units that enhance your living and
              working spaces. Proudly designed and made in the UK, our products
              reflect the highest standards of quality, sustainability, and
              craftsmanship. Discover how our commitment to excellence sets us
              apart.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

const StoryData = {
  title: "Cube Nest’s Story",
  subheading: "Our Vision was always to make modular building better",
  content: [
    "The UK has a rich history of modular buildings, with many of us recalling the cold and noisy modular classrooms from our school days. At Cube Nest, we saw an opportunity to transform this concept. In 2010, our founders envisioned a new type of modular building—one that combines the practicality of modular construction with beautiful design. By using natural materials, we aimed to create warm, inviting spaces with the robustness of traditional buildings.",
    "Our principal designer spearheaded this transformation, overcoming numerous challenges to bring the first Cube Nest units to life. Since then, we have continuously refined our designs, adapting to new technologies and customer needs. Despite these changes, some things have remained constant: our core team, our commitment to quality, and our Yorkshire-based operations.",
    "Over the years, we have expanded our range of products and services, always staying true to our core values. Our modular units are designed to enhance your living or working space with minimal disruption, providing high-quality, aesthetically pleasing solutions that are quick and easy to install.",
    "At Cube Nest, we believe in doing modular differently—by focusing on innovative design, sustainability, and customer satisfaction. We are proud of how far we've come and excited for the future, as we continue to create better, more beautiful modular spaces for our clients.",
  ],
};

const GridSection = () => {
  return (
    <section className="container mx-auto flex flex-col font-mavenPro text-primary my-8">
      <header>
        <h1 className="text-5xl text-secondary">{StoryData.title}</h1>
        <p className="mt-2 mb-4 text-xl">{StoryData.subheading}</p>
      </header>

      <div className=" md:flex-row md:gap-4 flex flex-col gap-4">
        {/* Render first column */}
        <div className="basis-1/2 flex flex-col gap-4">
          {StoryData.content.slice(0, 2).map((paragraph, index) => (
            <p className="text-lg" key={index}>
              {paragraph}
            </p>
          ))}
        </div>
        {/* Render second column */}
        <div className="basis-1/2 flex flex-col gap-4">
          {StoryData.content
            .slice(2, StoryData.content.length)
            .map((paragraph, index) => (
              <p className="text-lg" key={index + 2}>
                {paragraph}
              </p>
            ))}
        </div>
      </div>
    </section>
  );
};
