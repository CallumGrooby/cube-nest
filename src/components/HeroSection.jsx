import React from "react";

export const HeroSection = () => {
  return (
    <section className="relative bg-background">
      <div className="relative mx-auto flex flex-col justify-center max-w-[700px] gap-2 font-bold text-6xl uppercase items-center min-h-[600px]">
        <h1 className="text-primary">Welcome To</h1>
        <div className="inline-flex gap-4">
          <h1 className="text-primary">Cube Nest</h1>
          <h1 className="mt-16 text-secondary">Modular</h1>
        </div>

        <h1 className="text-secondary">Living Units</h1>
      </div>

      <div
        className="
      absolute bottom-0 left-1/3 transform -translate-x-1/2 translate-y-1/2 rotate-45 z-10
      w-48 h-48 bg-inherit"
      ></div>
    </section>
  );
};
