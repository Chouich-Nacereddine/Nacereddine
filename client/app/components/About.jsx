"use client";

import { useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Certifications from "../../public/tools/Certification.js";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Skills");
  const [activeCertif, setActiveCertif] = useState("");

  return (
    <section className="lg:h-screen h-max overflow-hidden lg:p-[8%] px-[8%]" id="About">
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
            <p
              className={`hover:text-[#ffd299] hover:font-semibold transition-colors duration-300 ${
                activeLink === "Certifications"
                  ? "text-[#ffd299] font-semibold"
                  : ""
              }`}
            >
              <button
                id="dropdownDefaultButton"
                className="lg:flex lg:items-center hidden"
                type="button"
                onClick={() => {
                  setIsOpen(!isOpen);
                  setActiveLink("Certifications");
                  setActiveCertif("");
                }}
              >
                Certifications{" "}
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {isOpen && activeLink === "Certifications" && (
                <div
                  id="dropdown"
                  className="z-10 bg-[#1d1c1c] w-[55vw] mt-4 p-4 rounded-lg h-36 overflow-y-auto scrollbar-custom "
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    {Certifications.map((Certif, index) => (
                      <li
                        key={index}
                        className="flex gap-2 p-2 hover:cursor-pointer hover:text-[#ffd299] hover:font-semibold transition-colors duration-300"
                        onClick={() => {
                          setIsOpen(!isOpen);
                          setActiveCertif(Certif.title);
                        }}
                      >
                        <span className="bullet text-[#ff7961]">&#8226;</span>{" "}
                        <h1>{Certif.title}</h1>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </p>
          </div>
          <div className="h-auto w-full">
            <div
              className={`flex gap-8 pt-8  ${
                activeLink === "Skills" ? " " : "hidden"
              }`}
            >
              <img
                src="/assets/html-5.png"
                className="w-[5%]"
                alt=""
                data-aos="fade-up"
              />
              <img
                src="/assets/css-3.png"
                className="w-[5%]"
                alt=""
                data-aos="fade-down"
              />
              <img
                src="/assets/sass.png"
                className="w-[5%]"
                alt=""
                data-aos="fade-up"
              />
              <img
                src="/assets/js.png"
                className="w-[5%]"
                alt=""
                data-aos="fade-down"
              />
              <img
                src="/assets/atom.png"
                className="w-[5%]"
                alt=""
                data-aos="fade-up"
              />
              <img
                src="/assets/api.png"
                className="w-[5%]"
                alt=""
                data-aos="fade-down"
              />
              <img
                src="/assets/nodejs.png"
                className="w-[5%]"
                alt=""
                data-aos="fade-up"
              />
              <img
                src="/assets/php.png"
                className="w-[5%]"
                alt=""
                data-aos="fade-down"
              />
              <img
                src="/assets/java.png"
                className="w-[5%]"
                alt=""
                data-aos="fade-up"
              />
              <img
                src="/assets/mysql.png"
                className="w-[5%]"
                alt=""
                data-aos="fade-down"
              />
            </div>
            <div className="lg:hidden flex flex-col">
              <h1 className="flex items-center justify-center mt-6 pr-4 text-[#ffd299] font-semibold">
                Certifications
              </h1>
              <div className="h-max w-full flex flex-wrap">
                {Certifications.map((Certif, index) => (
 
                    <iframe
                      className="w-1/2 p-4"
                      src={`/certif/${Certif.title}.pdf`}
                      frameborder="0"
                      data-aos={
                        (index + 1) % 2 === 0 ? "fade-left" : "fade-right"
                      }
                    ></iframe>
                ))}
              </div>
            </div>

            <div
              className={`gap-8 hidden ${
                activeLink === "Certifications" ? "lg:flex" : "lg:hidden"
              }`}
            >
              <span className="flex justify-between items-center w-full">
                <span className="flex flex-col">
                  <h1 className="text-base text-[#ffd299]">{activeCertif}</h1>
                  {(() => {
                    const foundCertif = Certifications.find(
                      (Certif) => Certif.title === activeCertif
                    );
                    if (foundCertif) {
                      return (
                        <div>
                          <h2 className="flex" data-aos="fade-right">
                            <span className="text-[#ff7961]">From:</span> &nbsp;
                            {foundCertif.from}
                          </h2>
                        </div>
                      );
                    } else {
                      return <h2></h2>;
                    }
                  })()}
                </span>
                <iframe
                  className={`block ${activeCertif === "" ? "hidden" : ""}`}
                  src={`/certif/${activeCertif}.pdf`}
                  frameborder="0"
                  data-aos="fade-right"
                ></iframe>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
