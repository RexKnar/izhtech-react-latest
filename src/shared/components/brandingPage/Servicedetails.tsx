import { motion } from "framer-motion"
import { fadeIn } from "../../animation/variants";  

interface propValues{
  header: string,
  company_details: string,
  commitment: string
  commit_heading: string
  izhtech:string
}

export default function Servicedetails({izhtech,header,company_details,commitment,commit_heading}:propValues) {
  return (
    <section>
      <div className="container lg:mx-auto lg:px-16 px-2 py-10 mx-auto">
        <div className="flex flex-col lg:flex-row xl:gap-16 gap-8 md:items-center lg:justify-center">
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
            <p className="text-xs font-medium tracking-wide">{ izhtech}</p>
            <p className="xl:text-6xl text-4xl font-bold pb-2.5">
          {header}
            </p>
            <p className="text-sm leading-7 tracking-wider text-justify">
{company_details}
            </p>
            <p className="tracking-wider font-bold text-sm py-4">{ commit_heading}</p>
            <p className="tracking-wider text-sm text-justify leading-7">
              {commitment}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
