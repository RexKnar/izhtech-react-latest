import { motion } from "framer-motion";
import { fadeIn } from "../../../shared/animation/variants";
import MissionStatement from "./Missionstatement";
import CustomObject from "../../../shared/components/CustomObjects";
import { Link } from "react-router-dom";
import { Slack } from "lucide-react";

export default function banner() {
  return (
    <section className="lg:px-10 pb-20 pt-28 bg-[#F5F7FF] rounded">
      <div className="flex-col justify-center gap-4 px-5 my-auto h-4/5 lg:flex lg:flex-row">
        <motion.div variants={fadeIn("right", 0.2)}
  initial="hidden"
  whileInView={"show"}
  exit={"hidden"}
  viewport={{ once: false, amount:0.1 }} className=" lg:w-4/6 sm:w-[75%] sm:pe-7 lg:m-0 mx-auto relative">
          <div className="relative flex flex-col justify-end h-full pb-5 ">
            <p className="z-10 text-xs">
              #Grow_Your_Business
            </p>
            <CustomObject className="absolute top-0 " variants="orange-disk" />
            <h1 className="relative pt-4 text-4xl font-bold 2xl:text-7xl lg:text-4xl md:text-4xl sm:text-4xl">
            Innovate in Software and Excel in Digital
            </h1>
            <p className="z-10 pt-4 pb-4 text-xs text-justify">
            We are dedicated to advancing your business. Whether you're a growing startup, a traditional business adapting to digital transformation, or an individual entrepreneur, our tailored suite of services is strategically crafted to enhance your online visibility and elevate your digital presence.
            </p>
            <Link to={'/about'} className="w-32 px-2 py-1 text-xs font-bold text-black border-2 border-black rounded">
              Explore More
            
            </Link>
          </div>

        </motion.div>
        <motion.div variants={fadeIn("left", 0.2)}
  initial="hidden"
  whileInView={"show"}
  exit={"hidden"}
  viewport={{ once: false, amount:0.1 }} className="relative flex flex-col justify-end h-full pb-5 mx-auto my-auto lg:w-3/6 sm:w-full ">
    <CustomObject
          className="absolute -left-28 w-100 h-80 -z-1 -top-20 lg:-top-20 max-w-screen-2xl"
          variants="blue-short-line-left"
        />
        <span
            
            className="absolute z-50 flex items-center justify-center w-8 h-8 mx-auto mt-5 bg-green-300 rounded-full"
          >
            <Slack className="mx-auto text-white " />
          </span>
          <img className=" sm:w-[50%] lg:w-[100%] z-10 lg:m-0 mx-auto h-auto" src="/images/bannar1/img.png" />
        </motion.div>
      </div>

      <MissionStatement />
    </section>
  );
}