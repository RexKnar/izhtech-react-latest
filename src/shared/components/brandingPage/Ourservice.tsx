import { motion } from "framer-motion"
import { fadeIn } from "../../animation/variants";

interface propValues{
  heading: string,
  content: string,
  placeholder?:any
}

export default function Ourservice({heading,content,placeholder}:propValues) {
  return (
    <section>
      <div className="container lg:mx-auto lg:px-16 px-2 py-10 mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 xl:gap-16 md:items-center lg:justify-center">

          {placeholder}
          
          <motion.div className="lg:w-3/6 md:px-14 lg:px-2" variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
          >
            <p className="text-xs font-medium tracking-wide"></p>
            <p className="xl:text-6xl text-4xl font-bold pb-2.5">
              { heading}
            </p>
            <p className="text-sm leading-7 tracking-wider text-justify"  >
             {content}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
