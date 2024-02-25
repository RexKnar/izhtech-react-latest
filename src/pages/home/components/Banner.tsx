import { motion } from "framer-motion";
import { fadeIn } from "../../../shared/animation/variants";
import MissionStatement from "./Missionstatement";
import CustomObject from "../../../shared/components/CustomObjects";

export default function banner() {
  return (
    <section className="px-10 py-20 bg-[#F5F7FF] rounded">
      <div className="flex-col justify-center gap-4 px-5 my-auto h-4/5 lg:flex lg:flex-row">
        <motion.div variants={fadeIn("right", 0.2)}
  initial="hidden"
  whileInView={"show"}
  exit={"hidden"}
  viewport={{ once: false, amount:0.1 }} className=" lg:w-4/6 sm:w-[75%] sm:pe-7 lg:m-0 mx-auto relative">
          <div className="relative flex flex-col justify-end h-full pb-5 ">
            <p className="z-10 text-xs">
              #Future-Proof Your Business
            </p>
            <CustomObject className="absolute top-0 " variants="orange-disk" />
            <h1 className="relative pt-4 font-bold text-md 2xl:text-7xl lg:text-4xl md:text-4xl sm:text-4xl">
            {/* <CustomObject className="absolute -z-10" variants="orange-disk" /> */}
            Innovate in Software and Excel in Digital
            </h1>
            <p className="z-10 pt-4 pb-4 text-xs">
            We are dedicated to advancing your business. Whether you're a growing startup, a traditional business adapting to digital transformation, or an individual entrepreneur, our tailored suite of services is strategically crafted to enhance your online visibility and elevate your digital presence.
            </p>
            <button className="w-32 px-2 py-1 text-xs font-bold text-black bg-white border border-black rounded">
              Explore More
            </button>
          </div>

        </motion.div>
        <motion.div variants={fadeIn("left", 0.2)}
  initial="hidden"
  whileInView={"show"}
  exit={"hidden"}
  viewport={{ once: false, amount:0.1 }} className="flex flex-col justify-end h-full pb-5 mx-auto my-auto lg:w-3/6 sm:w-full ">
          <img className=" sm:w-[50%] lg:w-[100%] lg:m-0 mx-auto h-auto" src="/images/bannar1/img.png" />
        </motion.div>
      </div>

      <MissionStatement />
    </section>
  );
}