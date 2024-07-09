import { APIProvider, Map } from "@vis.gl/react-google-maps";
import React from "react";
import Button from "../components/Button";

export const ContactPage = () => {
  return (
    <section className="font-mavenPro">
      <header className="container mx-auto text-primary text-5xl uppercase my-16">
        <h1>Contact Us</h1>
      </header>

      <div className="container mx-auto flex flex-col  lg:grid lg:grid-cols-2 lg:gap-4 gap-8">
        <ContactForm />
        <CompanyInformation />
      </div>

      <div className="max-w-[1920px] mx-auto h-[500px] my-16">
        <CompanyMap />
      </div>
    </section>
  );
};

const ContactForm = () => {
  const APIKey = import.meta.env.VITE_GET_FORM_API_KEY;

  return (
    <section className="">
      <form
        action={`https://getform.io/f/${APIKey}`}
        method="POST"
        className="flex flex-col"
      >
        <InputField
          placeholder={"Enter your full name"}
          type={"text"}
          name={"name"}
          title={"Full Name"}
        />

        <InputField
          placeholder={"Enter your email address"}
          type={"text"}
          name={"email"}
          title={"Email Address"}
        />

        <InputField
          placeholder={"Enter your message"}
          type={"text"}
          name={"message"}
          title={"Message"}
          isTextArea={true}
        />

        <Button type="submit">Get In Touch</Button>
      </form>
    </section>
  );
};

const InputField = ({ placeholder, type, name, title, isTextArea = false }) => {
  return (
    <div className="my-2 flex flex-col gap-1">
      <span className="font-mavenPro text-lg">{title}</span>
      {!isTextArea && (
        <input
          className="rounded-xl pl-2 p-1"
          type={type}
          name={name}
          placeholder={placeholder}
        />
      )}
      {isTextArea && (
        <textarea
          className="rounded-xl pl-2 p-1"
          name={name}
          placeholder={placeholder}
          rows="6"
        />
      )}
    </div>
  );
};

export const CompanyInformation = () => {
  return (
    <section className="justify-self-end max-w-[400px] w-full flex flex-col gap-2 text-primary">
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
  );
};

const CompanyMap = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const mapId = import.meta.env.VITE_PUBLIC_MAP_ID;
  const position = { lat: 53.04017413848148, lng: 0.13614986830940962 };

  return (
    <APIProvider apiKey={apiKey}>
      <div className="h-full w-full flex-grow">
        <Map defaultZoom={16} defaultCenter={position} mapId={mapId}></Map>
      </div>
    </APIProvider>
  );
};
