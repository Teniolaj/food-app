import Image from "next/image";
import React from "react";

interface Card {
  img: string;
  title: string;
  description: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ServiceCard: React.FC<Card> = ({ img, title, description }) => {
  return (
    <div className="space-y-3 text-center">
      <Image className="mx-auto" width={70} height={70} src={img} alt={title} />

      <div className="uppercase">{title}
        <div className="flex gap-2 w-fit mx-auto mt-2">
            <div className="h-[7px] w-[7px] rounded-full bg-accent" />
            <div className="h-[7px] w-[7px] rounded-full bg-accent" />
            <div className="h-[7px] w-[7px] rounded-full bg-accent" />

        </div>
      </div>

      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ServiceCard;
