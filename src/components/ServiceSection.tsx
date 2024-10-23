import React from "react";
import Line from './Line';
import ServiceCard from "./ServiceCard";

const servicesData = [
  {
    img: "/services_1.png",
    title: "Professional Kitchen",
    description: "lorem ipsum dolor sit amet",
  },
  {
    img: "/services_2.png",
    title: "Delivery",
    description: "lorem ipsum dolor sit amet",
  },
  {
    img: "/services_3.png",
    title: "Wine List",
    description: "lorem ipsum dolor sit amet",
  },
  {
    img: "/services_4.png",
    title: "Free wifi",
    description: "lorem ipsum dolor sit amet",
  },
];

const ServiceSection = () => {
  return (
    <div className="container pt-40">
      <div className="space-y-4 text-center w-fit mx-auto">
        <h1 className="text-6xl sm:4xl font-bold">Choose Best <span className="text-accent">Service</span></h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error <br/>
          impedit doloribus consectetur?
        </p>
        <div className="w-fit mx-auto">
            <Line />
        </div>
      </div>

      <div className="grid gap-10 md:grid-cols-4 md:gap-4 pt-8">
        {servicesData.map((service, index) => 
        <ServiceCard key={index} img={service.img} title={service.title} description={service.description}/>
        )}
      </div>
    </div>
  );
};

export default ServiceSection;
