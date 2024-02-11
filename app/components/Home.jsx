"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./Style.css";

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    if (el.current) {
      const typed = new Typed(el.current, {
        strings: [
          "<span style='color: #FF6600;'>Y</span>our <span style='color: #FF0000;'>M</span>eeting <span style='color: #FFC300;'>H</span>ub!",
          "<span style='color: #FF6600;'>T</span>rans<span style='color: #FF0000;'>L</span>ingo.<span style='color: #FFC300;'>M</span>eet",
        ],
        typeSpeed: 50,
        loop: true,
      });

      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }
  }, []);

  return (
    <>
      <section className="HomeSection pt-24 px-6 flex flex-col-reverse lg:h-screen lg:-z-10 lg:sticky lg:top-0 lg:flex-row lg:items-center lg:justify-center lg:px-8">
        <div className="flex flex-col justify-center lg:w-[55vw] ">
          <h1 className=" text-2xl lg:text-5xl">
            Welcome to <span ref={el} />
          </h1>
          <h2 className="text-lg lg:text-2xl pb-4 lg:pb-10">
            <span className="text-[#FF6600]">C</span>onnect,{" "}
            <span className="text-[#FF0000]">C</span>ollaborate,{" "}
            <span className="text-[#FFC300]">C</span>onquer
          </h2>
          <p className="text-sm xl:text-lg pb-4 lg:w-[90%] text-justify lg:text-xl lg:pb-6">
            Revolutionize your meetings with our seamless platform designed for
            efficiency, collaboration, and real-time translation. Say goodbye to
            hassle and hello to productivity as you effortlessly communicate
            across languages!
          </p>
          <Link href="/get-started">
            <div className="bg-[#FF6600] w-max text-sm py-2 px-4 lg:text-lg rounded-full text-black font-bold hover:cursor-pointer active:scale-[.8]">
              <p>Get started</p>
            </div>
          </Link>
        </div>
        <div className="pb-10 lg:w-[40vw] flex items-start justify-center">
          <img
            src="/assets/Home.png"
            alt="Home.png"
            className="-z-10 homeIMG w-60 lg:w-80 xl:w-96 h-auto mt-8 lg:mt-0"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
