import React, { useState } from "react";
import { Link, Outlet, ScrollRestoration } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import Button from "./Button";
import { Footer } from "./Footer";

const Links = [
  {
    name: "Products",
    subNav: [
      { name: "Garden Units", to: "/products/garden" },
      { name: "Living Units", to: "/products/living" },
      { name: "Commercial Units", to: "/products/commercial" },
    ],
    to: "/",
  },
  { name: "About Us", to: "/about" },
  { name: "News & Updates", to: "/news" },
  { name: "Contact Us", to: "/contact" },
];

export const Navbar = () => {
  return (
    <>
      <ScrollRestoration />

      <LargeScreenNavBar />
      <SmallScreenNavBar />

      <Outlet />

      <Footer />
    </>
  );
};

const LargeScreenNavBar = () => {
  return (
    <div className="sticky top-0 border-b-2 border-secondary z-50 bg-background hidden md:block">
      <nav className="bg flex lg:flex lg:flex-row gap-4 container mx-auto my-8 z-50 flex-col items-center">
        <Link to={"/"}>
          <img src={Logo} alt="" />
        </Link>
        <NavigationLinks
          className={
            "flex flex-col md:flex-row gap-4 flex-grow-1 w-full justify-center items-center"
          }
        ></NavigationLinks>

        <Button className="w-full max-w-[240px]" variant={"default"} size="lg">
          Get A Quote
        </Button>
      </nav>
    </div>
  );
};

const SmallScreenNavBar = () => {
  const [openNavLinks, setNavLinksOpenStatus] = useState(false);

  return (
    <nav className="block md:hidden sticky top-0 border-b-2 border-secondary z-50 bg-background">
      <div className="flex flex-row justify-between p-8 items-center">
        <Link to={"/"}>
          <img src={Logo} alt="" />
        </Link>

        <svg
          onClick={() => setNavLinksOpenStatus(!openNavLinks)}
          className="stroke-primary hover:stroke-secondary cursor-pointer w-8 h-8"
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 6l16 0" />
          <path d="M4 12l16 0" />
          <path d="M4 18l16 0" />
        </svg>
      </div>

      <NavigationLinks
        className={`
          ${openNavLinks ? "flex" : "hidden"}
          flex-col md:flex-row gap-4 flex-grow-1 w-full justify-center items-center`}
      ></NavigationLinks>
    </nav>
  );
};

const NavigationLinks = ({ className }) => {
  return (
    <div className={className}>
      {Links.map((linkData, index) => {
        return (
          <React.Fragment key={index}>
            {linkData.subNav != null ? (
              <DropDownLink linkData={linkData} />
            ) : (
              <Button
                className={"flex flex-col justify-center max-w-fit w-full"}
                variant={"underline"}
                size={"auto"}
                href={linkData.to}
              >
                {linkData.name}
              </Button>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

const DropDownLink = ({ linkData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex justify-center" data-twe-dropdown-ref>
      <a
        className="text-primary flex justify-center items-center px-6 pb-2 pt-2.5 shadow-primary-3 transition duration-150 ease-in-out hover:shadow-primary-2"
        type="button"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
      >
        <Button
          className="w-full max-w-[240px] bg-background"
          variant={"underline"}
          size="lg"
        >
          {linkData.name}
        </Button>
        <span className="ms-2 w-2 [&>svg]:h-5 [&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </a>
      {isOpen && (
        <ul className="absolute z-[1000] float-left top-[60px] m-0 min-w-max list-none overflow-hidden rounded-lg shadow-lg">
          {linkData.subNav.map((link, index) => {
            return (
              <li
                className="h-full pb-4 bg-background"
                key={index}
                onClick={toggleDropdown}
              >
                <Button
                  className="w-full max-w-[240px] bg-background"
                  variant={"underline"}
                  size="lg"
                  href={link.to}
                >
                  {link.name}
                </Button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
