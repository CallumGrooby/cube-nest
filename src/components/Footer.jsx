import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { CompanyInformation } from "../pages/ContactPage";

const Links = [
  { text: "CONTACT US", to: "/contact" },
  { text: "JOIN MAILING LIST", to: "/contact" },
  { text: "REQUEST BROCHURE", to: "/contact" },
  { text: "WORK FOR CUBE NEST ", to: "/careers" },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-background min-h-[600px] h-full ">
      <section className="relative min-h-[600px]  h-full container mx-auto p-8">
        <h1 className="uppercase text-5xl font-bold my-8">
          LETS WORK TOGETHER
        </h1>

        <section className="p-8 flex flex-col lg:flex-row gap-8 justify-between">
          <div className="flex flex-col gap-4 font-bold text-xl ">
            {Links.map((link, index) => {
              return (
                <Link
                  key={index}
                  to={link.to}
                  className="inline-flex gap-2 items-center "
                >
                  <span className="block w-10 h-10 bg-secondary rounded-full"></span>
                  <h1>{link.text}</h1>
                </Link>
              );
            })}
          </div>

          <section className="justify-self-end max-w-[400px] w-full flex flex-col gap-4 font-bold text-xl">
            <h1 className="font-bold uppercase">Cube Nest Ltd.</h1>
            <p>
              2 Windsor House <br /> Caldene Business Park <br />
              Hebden Bridge
              <br /> HX7 5QJ
            </p>

            <h1>
              <span className="font-bold text-secondary">T:</span> 07407673994
            </h1>
            <h1>
              <span className="font-bold text-secondary">E:</span>{" "}
              enquiries@cube-nest.co.uk
            </h1>
          </section>
        </section>

        <div
          className="lg:absolute lg:bottom-0 lg:left-1/2  lg:transform  lg:-translate-x-1/2  lg:-translate-y-1/2
         bg-background flex gap-2 p-2 rounded-full w-fit mx-auto "
        >
          <Button
            variant={"round"}
            size="lgRounded"
            href={"http://twitter.com"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-twitter-filled"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M14.058 3.41c-1.807 .767 -2.995 2.453 -3.056 4.38l-.002 .182l-.243 -.023c-2.392 -.269 -4.498 -1.512 -5.944 -3.531a1 1 0 0 0 -1.685 .092l-.097 .186l-.049 .099c-.719 1.485 -1.19 3.29 -1.017 5.203l.03 .273c.283 2.263 1.5 4.215 3.779 5.679l.173 .107l-.081 .043c-1.315 .663 -2.518 .952 -3.827 .9c-1.056 -.04 -1.446 1.372 -.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06 -1.18 7.152 -4.223 8.335 -8.433l.127 -.495c.238 -.993 .372 -2.006 .401 -3.024l.003 -.332l.393 -.779l.44 -.862l.214 -.434l.118 -.247c.265 -.565 .456 -1.033 .574 -1.43l.014 -.056l.008 -.018c.22 -.593 -.166 -1.358 -.941 -1.358l-.122 .007a.997 .997 0 0 0 -.231 .057l-.086 .038a7.46 7.46 0 0 1 -.88 .36l-.356 .115l-.271 .08l-.772 .214c-1.336 -1.118 -3.144 -1.254 -5.012 -.554l-.211 .084z"
                strokeWidth="0"
                fill="cuurentColor"
              />
            </svg>
          </Button>
          <Button
            variant={"round"}
            size="lgRounded"
            href={"http://linkedin.com"}
          ></Button>
          <Button
            variant={"round"}
            size="lgRounded"
            href={"http://facebook.com"}
          ></Button>
        </div>
      </section>
    </footer>
  );
};
