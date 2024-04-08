import { motion } from "framer-motion"
import { fadeIn } from "../../animation/variants";


type titleValue = {
  title:string
}


export default function Brandingheader({ title }: titleValue) {

  return (
    <motion.section className=" py-4 bg-transparent" variants={fadeIn("right", 0.3)}
      initial="hidden"
      whileInView="show"
      exit="hidden"
    >
      <div className="container lg:w-full sm:w-[75%] sm:px-14">
        <div className="flex flex-col justify-end h-full pb-5 ps-2">
          <p className="pt-4 font-semibold text-xs">Our Service</p>
          <h1 className="pt-2 font-bold lg:w-3/4 2xl:text-7xl lg:text-4xl md:text-4xl sm:text-4xl">
            {title}
          </h1>
        </div>
      </div>
    </motion.section>
  );
}
