import { motion } from "framer-motion";
import CustomObject from "../../../shared/components/CustomObjects";
import { fadeIn } from "../../../shared/animation/variants";

export default function Contactus() {
  return (
    <section className="relative px-5 py-10 bg-transparent lg:py-15">
            <motion.div variants={fadeIn("right", 0.1)}
              initial="hidden"
              whileInView={"show"}
              exit={"hidden"}
              viewport={{ once: false, amount: 0.1 }} className="flex-col justify-center gap-4 my-auto h-4/5 lg:flex lg:flex-row">
                <div className="w-full mx-auto ">
                    <div className="flex flex-col justify-end h-full pb-5 ">
                      
                    
                    <CustomObject
  className="absolute w-12 h-12 -z-1 -top-20 lg:-top-30 left-40 max-w-screen-2xl sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-60 lg:w-60"
  variants="teal-disk"
/>
                        <h1 className="pt-4 font-bold text-md lg:w-3/4 2xl:text-7xl lg:text-4xl md:text-4xl sm:text-4xl">
                            Contact Us
                        </h1>
                        <p className="pt-4 pb-4 text-xs">
                            Leave us a little info, and we’ll be in touch.
                        </p>
                        <button className="w-24 px-2 py-1 text-xs font-bold text-white bg-black border border-black rounded">
                            Contact Us
                        </button>
                    </div>
                </div>
            </motion.div>
            <div >
                        <CustomObject className="absolute z-10 opacity-25 top-10 -right-32 z-1" variants="long-line-teal-left"/>
                      </div>
            
        </section>
  );
}
