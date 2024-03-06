"use client";

import Row from "./Row";
import Projects from "../../public/tools/Projects.js";
import { useEffect, useState } from "react";

const Portfolio = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <section className="h-max lg:px-[8%] " id="Portfolio">
      <h1
        className="lg:flex hidden justify-center items-center py-[5%] mt-20 w-full h-[10vh] text-4xl "
        data-aos="zoom-in-down"
      >
        <span className="text-[#ff7961]">P</span>ortfolio
      </h1>
      <span className="lg:block hidden">
        <Row certifications={Projects} />
      </span>
      {isClient && (
        <div className="lg:hidden flex flex-col">
          <h1 className="flex items-center justify-center mt-6  text-[#ffd299] font-semibold">
            Portfolio
          </h1>
          <div className="h-max w-full flex flex-wrap">
            {Projects.map((Project, index) => (
              <img
                key={index}
                className="w-1/2 p-4"
                src={`/certif/${Project.title}.jpg`}
                data-aos={(index + 1) % 2 === 0 ? "fade-left" : "fade-right"}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
