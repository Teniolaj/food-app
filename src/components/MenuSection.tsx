import React from "react";
import Line from "./Line";
import Image from "next/image";
import MenuCard from "./MenuCard";

const menuData = [
    {
      img: "/cake.jpeg",
      title: "Delicious Cake",
      desc: "2x tuna sahimi, 1x noodles",
      price: "$29.50",
    },
    {
      img: "/pizza.jpg",
      title: "Italian Pizza",
      desc: "2x tuna sahimi, 1x noodles",
      price: "$29.50",
    },
    {
      img: "/pizza.jpg",
      title: "Italian Pizza",
      desc: "2x tuna sahimi, 1x noodles",
      price: "$29.50",
    },
    {
      img: "/pizza.jpg",
      title: "Italian Pizza",
      desc: "2x tuna sahimi, 1x noodles",
      price: "$29.50",
    },
    {
      img: "/pizza.jpg",
      title: "Italian Pizza",
      desc: "2x tuna sahimi, 1x noodles",
      price: "$29.50",
    },
    {
      img: "/pizza.jpg",
      title: "Italian Pizza",
      desc: "2x tuna sahimi, 1x noodles",
      price: "$29.50",
    },
    {
      img: "/pizza.jpg",
      title: "Italian Pizza",
      desc: "2x tuna sahimi, 1x noodles",
      price: "$29.50",
    },
    {
      img: "/pizza.jpg",
      title: "Italian Pizza",
      desc: "2x tuna sahimi, 1x noodles",
      price: "$29.50",
    },
];

const MenuSection = () => {
  return (
    <div className="container pt-36">
      <div className="space-y-4 text-center w-fit mx-auto">
        <h1 className="text-6xl sm:4xl font-bold">
          Our <span className="text-accent">Menu</span>
        </h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error <br />
          impedit doloribus consectetur?
        </p>
        <div className="w-fit mx-auto">
          <Line />
        </div>
      </div>

      <ul className="md:flex hidden gap-16 text-[14px] items-center mx-auto justify-center pt-10 font-bold">
        <li className="bg-accent p-1 text-white">Appetizers</li>
        <li>Breakfast</li>
        <li>Salads</li>
        <li>Meat & Fish</li>
        <li>Soup</li>
        <li>Desert</li>
        <li>Drinks</li>
      </ul>

      <div className="grid lg:grid-cols-[35%,1fr] gap-10 pt-10">
        <div className="w-fit mx-auto">
          <Image
            className="w-[100%] max-w-[400px] h-auto"
            src="/menu_left.png"
            width={500}
            height={500}
            alt="dish"
          />
        </div>

        <div className="grid w-fit mx-auto sm:grid-cols-2 gap-4">
            {menuData.map((menu, idx) => 
            <MenuCard key={idx} img={menu.img} title={menu.title} description={menu.desc} price={menu.price} />
            )}
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
