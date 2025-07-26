import React from "react";
import heroVideo from "../assets/Video.webp";
import chasLogo from "../assets/CompanyLogos/About Us Logos/chas.png";
import fscLogo from "../assets/CompanyLogos/About Us Logos/fsc.png";
import isoLogo from "../assets/CompanyLogos/About Us Logos/iso.png";
import ricsLogo from "../assets/CompanyLogos/About Us Logos/rics.png";
import safeContractorLogo from "../assets/CompanyLogos/About Us Logos/safecontractor.png";

import ContentSection from "../components/ContentSection";
import ClickableSections from "../components/ClickableSections";

import Exterior from "../assets/QualitySection/Exterior.jpg";
import Heating from "../assets/QualitySection/Heating.jpg";
import Interior from "../assets/QualitySection/Interior.jpg";
import Structure from "../assets/QualitySection/Structure.jpg";
import Thermal from "../assets/QualitySection/Thermal.jpg";
import Windows from "../assets/QualitySection/Windows.jpg";

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

const ProductData = {
  title: "Built in the UK",
  subheading: "Proudly Designed and Made in Britain",
  content: [
    "At Cube Nest, we take great pride in our commitment to British craftsmanship. Every modular unit we produce is designed and manufactured in the UK, ensuring the highest standards of quality and precision. Our operations are based in Yorkshire, where we combine traditional skills with modern techniques to create products that are both beautiful and durable.",
    "By keeping our production local, we maintain complete control over every aspect of the manufacturing process. This not only allows us to uphold our stringent quality standards but also supports the local economy and reduces our environmental footprint. When you choose Cube Nest, you are investing in a product that embodies the best of British design and engineering.",
  ],
};

const TestData = [
  {
    name: "Project Management",
    description:
      "Your journey with Cube Nest begins with our experienced project managers. They are dedicated to guiding you through every stage, from initial specification to completion and handover. As your primary point of contact, they will coordinate with all team members to ensure a seamless experience. Our commitment to excellence is reflected in our ISO 9001 accreditation for outstanding management systems.",
    image: Structure,
    imageAlt: "",
  },
  {
    name: "Costing & Analysis",
    description:
      "We offer cost certainty and transparency for your project. Our quantity surveyors work closely with your project manager to ensure that costs are clear and kept on track. For all projects, big or small, we use specialized software to account for every component, ensuring financial accuracy and reliability.",
    image: Thermal,
    imageAlt: "",
  },
  {
    name: "Design Team",
    description:
      "Our design team, comprising architectural designers and CAD technicians, is integral to bringing your vision to life. They will translate your brief into detailed construction-ready drawings. Our experts in modular construction will work closely with you to develop your initial scheme and refine it through precise CAD modeling.",
    image: Exterior,
    imageAlt: "",
  },
  {
    name: "Production",
    description:
      "Our production team, consisting of skilled joiners, fabricators, and M&E contractors, has extensive experience in crafting every detail of your modular unit. They share a commitment to our exemplary health and safety standards, ensuring rigorous training and quality control in our workshop where your dream space becomes a reality.",
    image: Windows,
    imageAlt: "",
  },
  {
    name: "Site Team",
    description:
      "Our dedicated logistics and site teams handle the journey of your pre-fabricated components from our factory to your site. With CHAS and SafeContractor accreditation, our site management ensures a smooth delivery and installation process, maintaining our high standards for schedule, budget, and quality.",
    image: Heating,
    imageAlt: "",
  },
];

const Logos = [chasLogo, fscLogo, isoLogo, ricsLogo, safeContractorLogo];

export const AboutUs = () => {
  return (
    <section>
      <HeroVideo />
      <ContentSection variant={"twoColumn"} data={StoryData} />
      <LogoSection />
      <ContentSection data={ProductData} />
      <ClickableSections
        variant={"imageAsBackground"}
        title={""}
        data={TestData}
      />
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

const LogoSection = () => {
  return (
    <section className="container mx-auto">
      <div className="flex gap-4 justify-center">
        {Logos.map((logo, index) => {
          return (
            <div key={index} className="w-[180px] h-[120px]">
              <img
                src={logo}
                className="w-full h-full object-scale-down"
                alt=""
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
