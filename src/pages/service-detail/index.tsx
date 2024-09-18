import { motion } from "framer-motion";
import ServiceHeader from "./components/ServiceHeader";
import { fadeIn } from "../../shared/animation/variants";

export default function ServiceDetail() {
  return (
    <section className="mx-auto overflow-hidden container-fluid ">
    <section className="px-5 mx-auto md:container ">
    
    <ServiceHeader />
    </section>
    <section>
      <div className="container px-2 py-10 mx-auto lg:mx-auto lg:px-16">
        <div className="flex flex-col gap-8 lg:flex-row xl:gap-16 md:items-center lg:justify-center">
          <div className="lg:w-2/6">
            <motion.img src="/images/branding/banner.jpg" alt="" className="rounded-xl" variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            exit="hidden"  />
          </div>
          <motion.div className="lg:w-3/6 md:px-14 lg:px-2"  variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            exit="hidden">
            <p className="text-xs font-medium tracking-wide">Izhtech </p>
            <p className="xl:text-6xl text-4xl font-bold pb-2.5">
         
            </p>
            <p className="text-sm leading-7 tracking-wider text-justify">

            </p>
            <p className="py-4 text-sm font-bold tracking-wider"></p>
            <p className="text-sm leading-7 tracking-wider text-justify">
              
            </p>
          </motion.div>
        </div>
      </div>
    </section>
        

      </section>
  );
}