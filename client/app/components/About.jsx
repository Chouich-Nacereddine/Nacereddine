"use client";

import { useState, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Certifications from "../../public/tools/Certification.js";
import Row from "./Row.jsx";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Skills");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section
      className="lg:min-h-screen h-max overflow-hidden lg:px-[8%] lg:pt-[8%] px-[8%]"
      id="About"
    >
      <h1
        className="flex justify-center items-center w-full h-[10vh] lg:text-4xl text-2xl"
        data-aos="zoom-in-down"
      >
        <span className="text-[#ff7961]">A</span>bout M
        <span className="text-[#ff7961]">e</span>
      </h1>
      <div className="flex items-start justify-center pt-10">
        <div className="lg:flex hidden h-auto w-max">
          <div className="relative">
            <img
              src="/assets/me4.png"
              className="w-[130vw]"
              data-aos="fade-up-right"
              alt=""
            />
          </div>
        </div>
        <div className="w-auto lg:pr-6 lg:pb-6 lg:pt-2 lg:border-[#ff7961] lg:rounded-r-3xl  lg:border-r-2 lg:border-b-2 lg:border-t-0 lg:border-l-0">
          <p
            className="lg:text-base text-center lg:text-justify text-xs"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Hello! I'm <span className="text-[#ff7961]">C</span>houich{" "}
            <span className="text-[#ff7961]">N</span>
            acereddine, a passionate full-stack developer with expertise in
            JavaScript, Java, Python and PHP. With a strong foundation in web
            development, I have dedicated myself to crafting engaging and
            interactive web experiences. Being Moroccan, I bring a unique
            perspective and a deep appreciation for coding. The world of web
            development captivates me because it allows me to see my code come
            to life in real-time. I find great joy in investing countless hours
            into coding and continuously improving websites. The ability to
            shape user experiences and create seamless digital solutions is what
            drives my passion. I am excited to showcase my skills and contribute
            to the ever-evolving field of web development.
          </p>

          <div className="flex lg:py-2 lg:mt-0 mt-10 gap-6 lg:text-[#ff7961] text-white lg:justify-start justify-center">
            <p
              className={`hover:text-[#ffd299] hover:font-semibold transition-colors duration-300 ${
                activeLink === "Skills" ? "text-[#ffd299] font-semibold" : ""
              }`}
              onClick={() => {
                setActiveLink("Skills");
                setIsOpen(!isOpen);
              }}
            >
              Skills
            </p>
          </div>
          <div className="h-auto w-full ">
            <div
              className={`flex gap-8 pt-8  ${
                activeLink === "Skills" ? " " : "hidden"
              }`}
            >
              <img
                src="/assets/html-5.png"
                className="lg:w-[5%] w-[4%]"
                alt=""
                data-aos="fade-up"
              />
              <img
                src="/assets/css-3.png"
                className="lg:w-[5%] w-[4%]"
                alt=""
                data-aos="fade-down"
              />
              <img
                src="/assets/sass.png"
                className="lg:w-[5%] w-[4%]"
                alt=""
                data-aos="fade-up"
              />
              <img
                src="/assets/js.png"
                className="lg:w-[5%] w-[4%]"
                alt=""
                data-aos="fade-down"
              />
              <img
                src="/assets/atom.png"
                className="lg:w-[5%] w-[4%]"
                alt=""
                data-aos="fade-up"
              />
              <img
                src="/assets/api.png"
                className="lg:w-[5%] w-[4%]"
                alt=""
                data-aos="fade-down"
              />
              <img
                src="/assets/nodejs.png"
                className="lg:w-[5%] w-[4%]"
                alt=""
                data-aos="fade-up"
              />
              <img
                src="/assets/php.png"
                className="lg:w-[5%] w-[4%]"
                alt=""
                data-aos="fade-down"
              />
              <img
                src="/assets/java.png"
                className="lg:w-[5%] w-[4%]"
                alt=""
                data-aos="fade-up"
              />
              <img
                src="/assets/mysql.png"
                className="lg:w-[5%] w-[4%]"
                alt=""
                data-aos="fade-down"
              />
            </div>

            {isClient && (
              <div className="lg:hidden flex flex-col">
                <h1 className="flex items-center justify-center mt-6  text-[#ffd299] font-semibold">
                  Certifications
                </h1>
                <div className="h-max w-full flex flex-wrap">
                  {Certifications.map((Certif, index) => (
                    <img
                      key={index}
                      className="w-1/2 p-4"
                      src={`/certif/${Certif.title}.jpg`}
                      data-aos={
                        (index + 1) % 2 === 0 ? "fade-left" : "fade-right"
                      }
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {isClient && (
        <div className="lg:block hidden">
          <h1
            className="lg:flex hidden justify-center items-center py-[8%] mt-20 w-full h-[10vh] text-4xl "
            data-aos="zoom-in-down"
          >
            <span className="text-[#ff7961]">C</span>ertifications
          </h1>
          <Row certifications={Certifications} ROWid="1"/>
        </div>
      )}
    </section>
  );
};

export default About;
