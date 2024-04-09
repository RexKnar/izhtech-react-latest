import { motion } from "framer-motion";
import CustomObject from "../../../shared/components/CustomObjects";
import { fadeIn } from "../../../shared/animation/variants";

export default function PlatformInsights() {
  return (
    <section className="flex gap-5 px-4 py-3 mx-auto row">
      <div className="flex flex-col w-full gap-10 mx-auto lg:flex-row">
        <motion.div variants={fadeIn("right", 0.3)}
  initial="hidden"
  whileInView={"show"}
  viewport={{ once: false, amount:0.1 }} className="flex flex-col justify-center lg:w-1/2">
          <CustomObject className="absolute -z-10" variants="green-disk" />
          <p className="text-xs">CAPABILITIES </p>
          <h1 className="pt-2 text-3xl font-bold ">
            Versatile expertise, tailored strategies, and innovative solutions
            for transparent, impactful outcomes
          </h1>
        </motion.div>
        <motion.div variants={fadeIn("left", 0.3)}
  initial="hidden"
  whileInView={"show"}
  viewport={{ once: false, amount:0.1 }} className="relative lg:w-1/2">
          {/* <CustomObject
            className="absolute z-10 -bottom-20 -right-20 "
            variants="blue-dots"
          /> */}
          <img
            src="images/Aboutpage/img/capabilities.png"
            alt="Example Image"
            className="relative z-20 w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
