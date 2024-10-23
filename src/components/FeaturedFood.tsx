import React from "react";
import Line from "./Line";
import Image from "next/image";

const FeaturedFood = () => {
  return (
    <div className="container space-y-10 lg:pt-30 pt-10 ">
      <h1 className="text-6xl sm:4xl font-bold">
        Our <br /> Featured <span className="text-accent">Food</span>
      </h1>
      <p className=" max-w-[500px] font-[14px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor,
        nunc id consectetur bibendum, purus ipsum tincidunt velit, vel dictum
        neque dolor non velit.
      </p>
      <Line />
      <div className="grid md:grid-cols-[1fr,37%,1fr] gap-16 mt-10">
        <div className="w-fit self-end mx-auto">
          <Image
            className="w-[100%] max-w-[400px] h-auto shadow-2xl sm:max-w-full"
            src="/grid_1.png"
            width={300}
            height={600}
            alt=""
          />
          <div className="space-y-4">
            <Line />
            <h2 className="font-bold text-xl">Shrimp Salad</h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae dolorum nihil voluptatum inventore.
            </p>
          </div>
        </div>

        <div className="w-fit self-end mx-auto">
          <Image
            className="w-[100%] max-w-[400px] h-auto shadow-2xl sm:max-w-full"
            src="/grid_2.png"
            width={300}
            height={900}
            alt=""
          />
          <div className="space-y-4">
            <Line />
            <h2 className="font-bold text-xl">Baked apples</h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae dolorum nihil voluptatum inventore.
            </p>
          </div>
        </div>

        <div className="w-fit self-end mx-auto">
          <Image
            className="w-[100%] max-w-[400px] h-auto shadow-2xl sm:max-w-full"
            src="/grid_3.png"
            width={300}
            height={600}
            alt=""
          />
          <div className="space-y-4">
            <Line />
            <h2 className="font-bold text-xl">Cherries chicken</h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae dolorum nihil voluptatum inventore.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedFood;
