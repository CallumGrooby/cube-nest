import React, { useState } from "react";
import { Link, Outlet, ScrollRestoration } from "react-router-dom";
import Logo from "../assets/Logo.svg";

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
      <div className="border-b-2 border-secondary">
        <nav className="nav-bar container mx-auto flex min-h-[180px] items-center text-primary">
          <div className="basis-1/2 flex-grow flex justify-start items-center text-xl gap-8">
            {Links.map((link, index) => {
              return <NavigationLink key={index} linkData={link} />;
            })}
          </div>

          <div className="flex justify-center items-center">
            <img src={Logo} alt="" />
          </div>

          <div className="basis-1/2 flex justify-end items-center text-xl gap-8">
            <button className="uppercase hover:text-secondary">
              Get A Quote
            </button>
          </div>
        </nav>
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
};

const NavigationLink = ({ linkData }) => {
  if (linkData.subNav) {
    return <DropDownLink linkData={linkData} />;
  } else {
    return <SingleLink linkData={linkData}></SingleLink>;
  }
};

const SingleLink = ({ linkData }) => (
  <a href={linkData.to} className="hover:text-secondary">
    {linkData.name}
  </a>
);

const DropDownLink = ({ linkData }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div
      className="menu"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button>{linkData.name} ▼</button>
      {/* <DropdownMenu /> */}
      {isDropdownVisible && (
        <div id="dropdown" className="absolute py-4 flex flex-col gap-4 w-40">
          {linkData.subNav.map((link, index) => {
            return <SingleLink key={index} linkData={link}></SingleLink>;
          })}
        </div>
      )}
    </div>
  );
};
