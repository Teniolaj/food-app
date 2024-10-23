import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="relative lg:min-h-screen pb-10 lg:pb-0">
      <Image
        className="lg:w-[580px] -z-10 absolute top-0 right-0 "
        src="/hero2.png"
        width={900}
        height={500}
        alt="hero"
      />
      <Navbar />

      <div className="container lg:h-[calc(100vh-120px)] grid items-center pt-4 lg:pt-0">
        <div className="space-y-4 bg-[#ffffff98] w-fit p-4">
            <p className="uppercase font-medium">wide option of choice </p>
            <h2 className="text-6xl sm:4xl font-bold">Delicious <span className="text-accent">Food</span></h2>
            <p>Delicious food color, aroma and taste. <br/> What are you waiting for?</p>
            <button className="rounded-3xl bg-accent text-white px-4 py-2">View More</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
