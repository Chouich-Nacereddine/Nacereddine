"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import "boxicons";

const Home = () => {
  const el = useRef(null);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    if (el.current) {
      const typed = new Typed(el.current, {
        strings: [
          "<span style='color: #ff7961; font-weight: 600;'>N</span>acereddine <span style='color: #ff7961; font-weight: 600;'>C</span>houich.",
          "",
        ],
        typeSpeed: 100,
        loop: true,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <>
      <section className="lg:Home-bg-img flex flex-col-reverse mt-[10vh] lg:mt-0 lg:flex-row items-center justify-between h-screen ">
        <div className="relative lg:max-w-[55vw] max-w-[100vw] px-[8%] h-screen lg:items-start flex flex-col lg:justify-center items-center bg-opacity-10 bg-black lg:pt-0 pt-16 ">
          <div
            className="lg:text-4xl text-2xl tracking-wider overflow-hidden w-max "
            id="content"
          >
            <h1 className="flex ">
              Hi, I'm {" "}
              <span className="lg:hidden block">
                <span className="text-[#FF7961] font-semibold">N</span>
                acereddine{" "}
                <span className="text-[#FF7961] font-semibold">C</span>houich.
              </span>
              <span className="lg:block hidden">
                <span ref={el} />
              </span>
            </h1>
          </div>
          <div className="text-animated lg:text-4xl text-xl">
            <h3>FullStack Developer</h3>
          </div>
          <p className="lg:text-base text-xs text-justify w-[92%] mt-2 text-[#ededed] tracking-wide">
            I'm a FullStack Developer with a passion for crafting web solutions
            that blend creativity and functionality. With a strong foundation in
            both front-end and back-end development, I thrive on turning
            innovative ideas into seamless digital experiences. Let's build
            something amazing together.
          </p>

          <div className="flex items-center justify-start mt-4">
            <Link
              href="#Contact"
              className="flex items-center justify-center w-max h-max text-xl font-black"
            >
              <div className="btn">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span>Hire Me</span>
              </div>
            </Link>
          </div>
          <div className="absolute lg:bottom-10 bottom-[100%] flex justify-start gap-6 items-center">
            <Link href="">
              <span
                className="border-2 border-[#FF7961] p-1 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-[#FF7961]"
                onMouseEnter={() => setHover("instagram")}
                onMouseLeave={() => setHover(null)}
              >
                <box-icon
                  type="logo"
                  name="instagram"
                  color={hover === "instagram" ? "black" : "#FF7961"}
                  size="sm"
                ></box-icon>
              </span>
            </Link>
            <Link href="">
              <span
                className="border-2 border-[#FF7961] p-1 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-[#FF7961]"
                onMouseEnter={() => setHover("github")}
                onMouseLeave={() => setHover(null)}
              >
                <box-icon
                  name="github"
                  type="logo"
                  color={hover === "github" ? "black" : "#FF7961"}
                  size="sm"
                ></box-icon>
              </span>
            </Link>
            <Link href="">
              <span
                className="border-2 border-[#FF7961] p-1 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-[#FF7961]"
                onMouseEnter={() => setHover("linkedin")}
                onMouseLeave={() => setHover(null)}
              >
                <box-icon
                  name="linkedin"
                  type="logo"
                  color={hover === "linkedin" ? "black" : "#FF7961"}
                  size="sm"
                ></box-icon>
              </span>
            </Link>
          </div>
        </div>

        <div className="hidden w-[50vw] p-0 lg:flex items-center justify-center h-full pt-16 bg-opacity-10 bg-black">
          <img
            src="/assets/me4.png"
            alt="me"
            className=" lg:w-[100%] lg:bg-shadow lg:mr-[10%]"
          />
        </div>
        <img
          src="/assets/me6.png"
          alt="me"
          className="lg:hidden block w-[50vw]"
        />
      </section>
    </>
  );
};

export default Home;
