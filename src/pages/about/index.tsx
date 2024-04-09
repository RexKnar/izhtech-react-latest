import Aboutus from "./components/Aboutus";
import Banner from "./components/Banner";
import Capabilities from "./components/Capabilities";

import Counts from "./components/Counts";
import Slider from "../home/components/Slider";
import { motion } from "framer-motion";
import { fadeIn } from "../../shared/animation/variants";
import CustomObject from "../../shared/components/CustomObjects";

export default function About() {
  return (
    <>
      <section className="mx-auto overflow-hidden container-fluid ">
        <section className="px-5 mx-auto md:container ">
        
          <Aboutus />
        </section>
        <section className="px-5 mx-auto md:container ">
       
          <Banner />
        </section>
        <section className="px-5 mx-auto md:container md:px-0">
         
          <Capabilities />
        </section>
        <section className="relative mx-auto mb-20 xl:px-20 container-fluid xl:container lg:pt-20 ">
          <Slider />
        </section>
        <section className="px-5 mx-auto md:container md:px-0">
          <motion.span
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <CustomObject
              className="absolute z-10 -left-8 -top-10"
              variants="line-purple-left"
            />
          </motion.span>
        </section>
        <section className="px-5 mx-auto md:container md:px-0">
          <Counts />
        </section>
       
      </section>
    </>
  );
}
