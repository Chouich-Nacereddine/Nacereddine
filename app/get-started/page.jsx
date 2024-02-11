"use client";
import { useState } from "react";
import "../components/Style.css";
import Sign_in from "./components/Sign_in";
import Sign_up from "./components/Sign_up";

const Get_started = () => {
  const [signStatus, setSignStatus] = useState("Sign up");
  const checked_CSS = "bg-[#FF6600] text-black";
  const inchecked_CSS = "text-white bg-gray-600 bg-opacity-25";

  return (
    <section className="HomeSection h-screen pt-4 px-14 lg:pt-20">
      <div className="lg:gap-16 h-full flex flex-col lg:flex-row justify-center lg:justify-between px-4 lg:px-14 items-center py-6">
        <div className=" hidden lg:w-[50vw] lg:flex lg:justify-center  lg:items-center">
          <img
            src="/assets/Get-started.png"
            alt="Get-started.png"
            className="w-80 lg:w-96 homeIMG"
          />
        </div>

        <div className="w-[75vw] lg:w-1/2 ">
          <h1 className="lg:pb-4 lg:h-auto text-xl pt-3 lg:transform lg:text-xl text-[#FF6600] lg:no-underline text-center">
            <ul className="flex justify-center ">
              <li
                className={` px-3 py-1 rounded-full cursor-pointer ${
                  signStatus === "Sign in" ? checked_CSS : inchecked_CSS
                }`}
                onClick={() => setSignStatus("Sign in")}
              >
                Sign in
              </li>
              <li
                className={` px-3 py-1 rounded-full cursor-pointer ${
                  signStatus === "Sign up" ? checked_CSS : inchecked_CSS
                }`}
                onClick={() => setSignStatus("Sign up")}
              >
                Sign up
              </li>
            </ul>
          </h1>
          <form className="mt-6 lg:mt-0 lg:border-l-2 lg:border-l-[#FF6600] lg:p-3 lg:mb-10 lg:bg-gray-600 lg:bg-opacity-25 rounded-lg ">
            {signStatus === "Sign up" ? <Sign_up /> : <Sign_in />}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Get_started;
