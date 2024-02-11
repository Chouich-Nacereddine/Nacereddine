"use client";
import { useEffect, useRef, useState } from "react";
import "./Style.css";
import Typed from "typed.js";

const About = () => {
  const el = useRef(null);
  const [showPopover, setShowPopover] = useState(false);

  useEffect(() => {
    if (el.current) {
      const typed = new Typed(el.current, {
        strings: ["offering a ...", " "],
        typeSpeed: 50,
        loop: true,
      });
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }
  }, []);

  const handlePopoverToggle = () => {
    setShowPopover(!showPopover);
  };

  return (
    <>
      
      <section className=" aboutSection mt-48 lg:mt-32 h-auto lg:h-[90vh] px-8 bg-[#1D1F21]" id="about">
      <h1 className="text-2xl lg:text-3xl pb-16 text-center pt-10 lg:pt-20 lg:pb-6">About us</h1>
      <div className="flex flex-col lg:flex-row lg:gap-20">
        <div className="w-full pb-10 lg:w-1/2 flex justify-center lg:justify-start items-center">
          <img src="/assets/About-us.png" alt="About-us.png" className="homeIMG w-3/4 lg:w-[35vw]" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-xl lg:text-2xl pb-4 lg:pb-6">
            <span className="text-[#FF6600]">W</span>ho{" "}
            <span className="text-[#FF0000]">A</span>re{" "}
            <span className="text-[#FFC300]">W</span>e?
          </h2>
          <p className="text-sm text-justify lg:pb-2 lg:text-lg pb-4  lg:w-3/4">
            I am a passionate Full Stack developer dedicated to innovation and crafting intuitive
            technological solutions. Our meeting platform revolutionizes real-time multilingual
            interaction. Designed with passion and developed by me, this powerful solution enables
            instant voice translation during your meetings. My goal is to break language barriers,
            <span ref={el} />
          </p>
          <div
            className="bg-[#FF6600] w-max inline-block py-2 px-4 lg:text-sm rounded-full text-black font-bold hover:cursor-pointer active:scale-[.8] relative"
            onMouseEnter={handlePopoverToggle}
            onMouseLeave={handlePopoverToggle}
          >
            <span>Read more</span>
            {showPopover && (
              <div className="absolute z-10 text-justify w-80 lg:z-10 lg:w-96 text-xs lg:text-sm text-white transition-opacity duration-300 bg-[#1D1F21] border border-[#FF6600] rounded-lg shadow-lg lg:shadow-none opacity-100 top-6 left-14 lg:-top-80 lg:left-auto lg:right-0">
                <div className="px-3 py-2 bg-black border-b border-[#FF6600] rounded-t-lg">
                  <h3 className="font-semibold text-gray-300">Who Are We?</h3>
                </div>
                <div className="px-3 py-2 text-justify">
                  <p>
                    ... offering a seamless experience where each participant can communicate in their
                    native language while fully understanding their counterparts. This platform, born
                    from hard work and a passion for global connectivity, aims to make international
                    exchanges as smooth as if they were conducted in a single common language. I take
                    pride in offering this innovative solution, opening new possibilities for
                    businesses, teams, and individuals worldwide.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
