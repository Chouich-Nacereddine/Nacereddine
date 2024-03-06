"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import "aos/dist/aos.css";
import AOS from "aos";
import Typed from "typed.js";

const Home = () => {
  const el = useRef(null);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

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
      <section className="lg:bg-home-bg-img lg:bg-no-repeat lg:bg-right-19vh lg:bg-60 flex flex-col-reverse mt-[10vh] lg:mt-0 lg:flex-row items-center justify-between h-screen ">
        <div className="relative lg:max-w-[55vw] max-w-[100vw] px-[8%] h-screen lg:items-start flex flex-col lg:justify-center items-center bg-opacity-10 bg-black lg:pt-0 pt-16 ">
          <div
            className="lg:text-4xl text-2xl tracking-wider overflow-hidden w-max "
            id="content"
          >
            <h1 className="flex" data-aos="fade-up">
              Hi, I'm&nbsp;
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
          <p
            data-aos="zoom-in"
            data-aos-delay="200"
            className="lg:text-base text-xs lg:text-justify text-center w-full mt-2 text-[#ededed] tracking-wide"
          >
            I'm a FullStack Developer with a passion for crafting web solutions
            that blend creativity and functionality. With a strong foundation in
            both front-end and back-end development, I thrive on turning
            innovative ideas into seamless digital experiences. Let's build
            something amazing together.
          </p>

          <div
            className="flex items-center justify-start mt-4"
            data-aos="fade-right"
          >
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
          <div className="absolute lg:left-auto left-[10%] lg:bottom-10 bottom-[100%] flex lg:justify-start gap-6 lg:items-center">
            <Link
              href="https://www.instagram.com/nacer_edd/?igsh=ZHY2bnB1d2puMWMy&utm_source=qr"
              target="_blanc"
            >
              <span
                className="border-2 border-[#FF7961] p-1 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-[#FF7961]"
                onMouseEnter={() => setHover("instagram")}
                onMouseLeave={() => setHover(null)}
              >
                <FaInstagram
                  type="logo"
                  name="instagram"
                  color={hover === "instagram" ? "black" : "#FF7961"}
                  className="w-6 h-6"
                />
              </span>
            </Link>
            <Link href="https://github.com/Chouich-Nacereddine" target="_blanc">
              <span
                className="border-2 border-[#FF7961] p-1 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-[#FF7961]"
                onMouseEnter={() => setHover("github")}
                onMouseLeave={() => setHover(null)}
              >
                <FaGithub
                  name="github"
                  type="logo"
                  color={hover === "github" ? "black" : "#FF7961"}
                  className="h-6 w-6"
                />
              </span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/nacreddine-chouich/"
              target="_blanc"
            >
              <span
                className="border-2 border-[#FF7961] p-1 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-[#FF7961]"
                onMouseEnter={() => setHover("linkedin")}
                onMouseLeave={() => setHover(null)}
              >
                <FaLinkedinIn
                  name="linkedin"
                  type="logo"
                  color={hover === "linkedin" ? "black" : "#FF7961"}
                  className="h-6 w-6"
                />
              </span>
            </Link>
          </div>
        </div>

        <div className="hidden w-[50vw] p-0 lg:flex items-center justify-center h-full pt-16 bg-opacity-10 bg-black">
          <img
            data-aos="fade-down-left"
            src="/assets/me4.png"
            alt="me"
            className=" lg:w-[100%] lg:mr-[10%]"
          />
        </div>
        <img
          data-aos="fade-up"
          src="/assets/me6.png"
          alt="me"
          className="lg:hidden block w-[50vw]"
        />
      </section>
    </>
  );
};

export default Home;
