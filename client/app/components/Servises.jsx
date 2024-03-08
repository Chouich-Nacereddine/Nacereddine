import { FaNodeJs, FaReact } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";
import { PiRoadHorizonLight } from "react-icons/pi";
import { SiExpress, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import "aos/dist/aos.css";
import AOS from "aos";

const Servises = () => {
  return (
    <section className="h-max px-[8%] overflow-hidden pb-10" id="Portfolio">
      <h1
        className="lg:flex hidden justify-center items-center py-[5%] mt-20 w-full h-[10vh] text-4xl "
        data-aos="zoom-in-down"
      >
        <span className="text-[#ff7961]">S</span> ervice
      </h1>
      <h1 className="lg:hidden flex items-center justify-center mt-6 text-2xl font-semibold py-10">
        <span className="text-[#ff7961]">S</span> ervice
      </h1>
      <div className="flex justify-between">
        <div className="one-service" data-aos="flip-left">
          <div className="services-card">
            <div className="services-circle"></div>
            <div className="services-circle"></div>
            <div className="services-card-inner">
              <span>Frontend development</span>
              <span className="flex text-[#ff7961] font-semibold gap-2">
                <FaReact />
                <SiNextdotjs />
                <SiTailwindcss />
              </span>
            </div>
          </div>
        </div>

        <div className="one-service" data-aos="flip-left">
          <div className="services-card">
            <div className="services-circle"></div>
            <div className="services-circle"></div>
            <div className="services-card-inner">
              <span>FullStack development</span>
              <span className="flex text-[#ff7961] font-semibold gap-2">
                <FaNodeJs />
                <SiExpress />
              </span>
            </div>
            <div className="back-content"></div>
          </div>
        </div>

        <div className="one-service" data-aos="flip-right">
          <div className="services-card">
            <div className="services-circle"></div>
            <div className="services-circle"></div>
            <div className="services-card-inner">
              <span className="px-3">Web Consultant</span>
              <span className="flex text-[#ff7961] font-semibold gap-2">
                <MdSupportAgent />
                <PiRoadHorizonLight />
              </span>
            </div>
            <div className="back-content"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servises;
