"use client";

import "aos/dist/aos.css";
import AOS from "aos";
import { BsBalloonHeart, BsBalloonHeartFill } from "react-icons/bs";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Certifications from "../../public/tools/Certification.js";
import { FaLink } from "react-icons/fa6";

const Row = ({ certifications }) => {
  const goLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const goRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  if (!certifications) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={goLeft}
          size={30}
          className="text-black absolute bg-[bisque] rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 font-bold hidden group-hover:block left-0"
        />

        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide "
        >
          {certifications.map((Certif, index) => (
            <div
              key={index}
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[300px] inline-block cursor-pointer relative p-2"
            >
              <img
                data-aos="zoom-in-left"
                className="w-full h-auto block"
                src={`/certif/${Certif.title}.jpg`}
                alt={Certif?.title}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-[#ff7961]">
                <p className="whitespace-normal px-10 break-words text-xs md:tex-sm font-bold flex flex-col items-center justify-center h-full text-center">
                  {Certif?.title}
                  {Certif.from !== undefined ? (
                    <span className="text-gray-400">From: {Certif.from}</span>
                  ) : (
                    <span>
                      <a href={Certif.link} className="text-xl" target="_blank">
                        <FaLink />
                      </a>
                    </span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={goRight}
          size={30}
          className="text-black absolute bg-[bisque] rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 font-bold hidden group-hover:block right-0"
        />
      </div>
    </div>
  );
};

export default Row;
