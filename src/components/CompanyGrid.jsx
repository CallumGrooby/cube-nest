import React from "react";
import CompanyLogo1 from "../assets/CompanyLogos/CompanyLogo1.webp";
import CompanyLogo2 from "../assets/CompanyLogos/CompanyLogo2.webp";
import CompanyLogo3 from "../assets/CompanyLogos/CompanyLogo3.webp";
import CompanyLogo4 from "../assets/CompanyLogos/CompanyLogo4.webp";
import CompanyLogo5 from "../assets/CompanyLogos/CompanyLogo5.webp";
import CompanyLogo6 from "../assets/CompanyLogos/CompanyLogo6.webp";
import CompanyLogo7 from "../assets/CompanyLogos/CompanyLogo7.webp";
import CompanyLogo8 from "../assets/CompanyLogos/CompanyLogo8.webp";
import CompanyLogo9 from "../assets/CompanyLogos/CompanyLogo9.webp";
import CompanyLogo10 from "../assets/CompanyLogos/CompanyLogo10.webp";
import CompanyLogo11 from "../assets/CompanyLogos/CompanyLogo11.webp";
import CompanyLogo12 from "../assets/CompanyLogos/CompanyLogo12.webp";
import CompanyLogo13 from "../assets/CompanyLogos/CompanyLogo13.webp";
import CompanyLogo14 from "../assets/CompanyLogos/CompanyLogo14.webp";
import CompanyLogo15 from "../assets/CompanyLogos/CompanyLogo15.webp";
import CompanyLogo16 from "../assets/CompanyLogos/CompanyLogo16.webp";
import CompanyLogo17 from "../assets/CompanyLogos/CompanyLogo17.webp";
import CompanyLogo18 from "../assets/CompanyLogos/CompanyLogo18.webp";
import CompanyLogo19 from "../assets/CompanyLogos/CompanyLogo19.webp";
import CompanyLogo20 from "../assets/CompanyLogos/CompanyLogo20.webp";
import CompanyLogo21 from "../assets/CompanyLogos/CompanyLogo21.webp";
import CompanyLogo22 from "../assets/CompanyLogos/CompanyLogo22.webp";
import CompanyLogo23 from "../assets/CompanyLogos/CompanyLogo23.svg";
import CompanyLogo24 from "../assets/CompanyLogos/CompanyLogo24.svg";

const CompanyLogos = [
  { alt: "Croxley Park", image: CompanyLogo1 },
  { alt: "Grangewood", image: CompanyLogo2 },
  { alt: "Hilton", image: CompanyLogo3 },
  { alt: "Gloucestershire", image: CompanyLogo4 },
  { alt: "Walterlilly", image: CompanyLogo5 },
  { alt: "Astra Zeneca", image: CompanyLogo6 },
  { alt: "Loch Lomond & the Trossachs National park", image: CompanyLogo7 },
  { alt: "University Of Exeter", image: CompanyLogo8 },
  { alt: "Mitshubishi", image: CompanyLogo9 },
  { alt: "Hackney", image: CompanyLogo10 },
  { alt: "BAE Systems", image: CompanyLogo11 },
  { alt: "Workman", image: CompanyLogo12 },
  { alt: "Ardmore", image: CompanyLogo13 },
  { alt: "Martime and Coastguard Agency", image: CompanyLogo14 },
  { alt: "Unilever", image: CompanyLogo15 },
  { alt: "Glaxo Smith Kline", image: CompanyLogo16 },
  { alt: "National Trust", image: CompanyLogo17 },
  { alt: "Stowe", image: CompanyLogo18 },
  { alt: "Porsche", image: CompanyLogo19 },
  { alt: "Morgan Sindall", image: CompanyLogo20 },
  { alt: "Dalziel & Pow", image: CompanyLogo21 },
  { alt: "Willmot Dixon", image: CompanyLogo22 },
  { alt: "East Leigh", image: CompanyLogo23 },
  { alt: "JLR", image: CompanyLogo24 },
];

export const CompanyGrid = () => {
  return (
    <section className="max-w-[1920px] mx-auto my-16">
      <header>
        <h1 className="text-5xl text-center text-primary mb-4">
          Leading companies choose
          <span className="mx-2 font-bold uppercase text-secondary">
            CUBE NEST
          </span>
        </h1>
      </header>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {CompanyLogos.map((logo, index) => {
          return <img key={index} src={logo.image} alt={logo.alt} />;
        })}
      </div>
    </section>
  );
};
