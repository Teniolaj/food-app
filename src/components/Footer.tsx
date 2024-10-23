import React from "react";

const Footer = () => {
  return (
    <div className="container pt-40">
      <div className="grid md:grid-cols-3 gap-16">
        <div className="space-y-4">
          <h2 className="text-xl font-bold">About us</h2>
          <p className="leading-[1.8]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga ab
            perspiciatis totam a veritatis rem dolores tenetur. Incidunt debitis
            sequi blanditiis adipisci inventore! Itaque molestiae totam,
            deserunt placeat beatae ducimus.
          </p>
        </div>

        <div className="space-y-4">
            <h2 className="text-xl font-bold">The Resturant</h2>

            <ul>
                <li>About us</li>
                <li>Chefs</li>
                <li>Events</li>
                <li>Contact</li>

            </ul>
        </div>

        <div>
            <div className="flex gap-8 text-accent text-2xl pt-16">
                {/* icons section for social media icons */}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
