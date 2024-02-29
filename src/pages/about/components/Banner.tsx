import { Progress } from "flowbite-react";
import PieScroll from "../../../shared/animation/PieScroll";
import { motion } from "framer-motion";
import { fadeIn } from "../../../shared/animation/variants";



export default function Banner() {
  return (
    <section className="flex gap-5 py-3 mx-auto ">
      <div className="gap-10 mx-auto lg:flex ">
        <motion.div variants={fadeIn("right", 0.1)}
  initial="hidden"
  whileInView={"show"}
  viewport={{ once: false, amount:0.1 }} className="relative bg-transparent lg:w-1/2">
   
          <img
            src="images/Aboutpage/img/banner.png"
            alt="Example Image"
            className="w-full h-auto"
          />
   
          <PieScroll
            svgClassName="-rotate-90 -translate-x-60 xl:w-[10vw] xl:h-[10vw] w-[20vw] h-[20vw] "
            ringColor="purple"
            parentClassName=" absolute z-10 xl:-bottom-20 -bottom-15 xl:left-20 -right-60 md:-right-40 xl:right-2 !-z-50"
          />

          {/* <CustomObject className="absolute z-10 -bottom-10 -left-32 !-z-50" variants="purple-dots"/> */}
        </motion.div>
   
   
        <motion.div variants={fadeIn("left", 0.1)}
  initial="hidden"
  whileInView={"show"}
  viewport={{ once: false, amount:0.1 }} className="flex-col justify-center gap-10 pt-5 lg:w-1/2 lg:flex">
          <div>
            <h1 className="pb-4 text-2xl font-bold ">
              Business Growth Solution
            </h1>
            <p className="text-justify sm:text-xs lg:text-sm md:text-sm">
              At IZHTech we help businesses grow. Whether you’re a startup,
              traditional business, or entrepreneur, our service enhance your
              digital presence From app development to branding and marketing,
              we customize solutions to fit your needs
            </p>
            <Progress
              progress={45}
              size="sm"
              className="bg-gradient-to-r mt-5 from-indigo-500 via-purple-500 to-pink-500 h-1 rounded-full w-[50%] relative"
            />
          </div>
   
          <div>
            <h1 className="pb-4 text-2xl font-bold">
              Customized Business Success
            </h1>
            <p className="text-justify sm:text-xs lg:text-sm md:text-sm">
              Get expert help for your business, whether it's in e-commerce or
              healthcare. We customize our services to fit your unique goals,
              always keeping you updated and making sure you see real results.
            </p>
            <Progress
              progress={45}
              size="sm"
              className="bg-gradient-to-r mt-5 from-indigo-500 via-purple-500 to-pink-500 h-1 rounded-full w-[50%] relative"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
