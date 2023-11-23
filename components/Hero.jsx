import React from "react";

function Hero() {
  return (
    <section className="max-w-screen-xl mx-auto px-5">
      <picture>
        <source media="(min-width: 650px)" srcSet="./images/bg.png" />
        <img src="./images/mobile-bg.png" className="w-full" />
      </picture>

      <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-10">
        <h2 className="text-black font-medium text-2xl sm:text-4xl lg:text-5xl">
          Simply Unique / <br className="hidden md:block" /> Simply Better
        </h2>
        <p className="text-neutral-500 text-lg">
          <span className="font-medium text-neutral-900 text-lg">
            Furniture{" "}
          </span>
          is a gift & decorations store based in HCMC,{" "}
          <br className="hidden sm:block" />
          Vietnam. Est since 2019.
        </p>
      </div>
    </section>
  );
}

export default Hero;
