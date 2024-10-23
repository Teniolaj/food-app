import Image from "next/image";
import React from "react";

interface menu {
  img: string;
  title: string;
  description: string;
  price: string;
}

const MenuCard: React.FC<menu> = ({ img, title, description, price }) => {
  return (
    <div className="flex gap-2">
      <Image
        className="w-[80px] h-[80px]"
        src={img}
        width={80}
        height={80}
        alt={title}
      />
      <div className="space-y-2">
        <div>
            <h2>{title}</h2>
            <p className="text-gray-700 p-1">{description}</p>
        </div>
        <p className="text-accent">{price}</p>
      </div>
    </div>
  );
};

export default MenuCard;
