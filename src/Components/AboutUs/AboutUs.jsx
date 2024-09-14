import React from "react";
import { FaUser } from "react-icons/fa";

const BgStyle = {
  backgroundImage: `url(${"https://i.ibb.co/L0TLZNV/polygon.png"})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  position: "relative",
};

const AboutUs = ({ handlePopup }) => {
  return (
    <div style={BgStyle} className="py-14">
      <div className="container minn-h-[500px] relative z-10">
        <h1
          data-aos="fade"
          className="pb-20 tracking-wider text-4xl font-semibold text-white text-center"
        >
          About Us
        </h1>
        <div
          data-aos="fade"
          data-aos-delay="300"
          className="bg-white/80 p-10 my-10"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, ab
          molestiae fugit vel nemo et ut provident maxime ipsam iste iure, optio
          voluptates adipisci dolorem saepe consectetur voluptatibus quaerat? Ea
          veritatis velit ratione eligendi minus qui in amet hic voluptatem
          commodi, doloribus quaerat asperiores, quia enim aliquid? Excepturi
          incidunt, repellendus inventore modi doloribus et quos dolorem odit
          laudantium ullam. Aperiam maxime nulla sed sint odio exercitationem
          quos. Exercitationem, temporibus dolores facilis neque quidem ab.
          Mollitia consequatur quas impedit ea eligendi! Sed consectetur sunt
          culpa labore, nemo assumenda asperiores iure repellat dolorem impedit
          quas repellendus aspernatur facere praesentium sit dolores
          consequaturs.
          <div className="pt-10 flex justify-center">
            <button
              onClick={handlePopup}
              className="flex justify-center items-center gap-2 duration-300 bg-primary text-xl h-[40px] text-white px-5 py-2 hover:scale-105"
            >
              <FaUser />
              My Account
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-full">
        <img
          src="https://i.ibb.co/0cm4Wtw/vector-wave.png"
          alt=""
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default AboutUs;
