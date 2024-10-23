import Image from "next/image";
import React from "react";

const SurveySection = () => {
  return (
    <div className="container pt-36">
      <div className="grid lg:grid-cols-[50%,1fr] gap-10">
        <div>
          <Image
            className="w-[100%] h-auto lg:w-auto lg:h-[90vh]"
            src="/survey.png"
            width={1000}
            height={600}
            alt="survey image"
          />
        </div>

        <div className="self-center space-y-8">
          <h2 className="text-6xl sm:4xl font-bold">
            Survey <br /> About our <span className="text-accent">Food</span>
          </h2>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            nesciunt tempore reprehenderit repudiandae eos suscipit distinctio
            atque neque ex quo? Perspiciatis consequatur est at dolore labore
            ipsum doloribus fugit velit.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            eligendi quas odit. Qui dicta, maiores illo necessitatibus
            doloremque illum, doloribus odio possimus quam laudantium quis,
            dolores unde molestias voluptatibus excepturi!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SurveySection;
