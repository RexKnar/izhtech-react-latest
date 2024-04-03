import { motion } from "framer-motion"
import { fadeIn } from "../../../shared/animation/variants";

export default function Ourservice2() {
  return (
    <section>
      <div className="container lg:mx-auto lg:px-16 px-2 py-10 bg-teal-50">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 xl:gap-16 md:items-center lg:justify-center">
         
          <motion.div className="lg:w-3/6 md:px-14 lg:px-2" variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
          >
            <p className="text-xs font-medium tracking-wide">OUR SERVICES</p>
            <p className="xl:text-6xl text-4xl font-bold pb-2.5">
              Tailor-Made Solutions for Every Business
            </p>
            <p className="text-sm leading-7 tracking-wider text-justify"  >
              Whether you’re a burgeoning startup endeavouring to carve out your
              brand’s presence or a well-established enterprise seeking to
              invigorate your image, we’re here to provide tailor-made branding
              solutions tailored to your company’s specific requisites. Our
              commitment is to work closely with you, ensuring that your brand
              mirrors your values, aspirations, and vision.
            </p>
          </motion.div>

          <div className="lg:w-2/6">
            <motion.img src="/images/branding/OurService.jpg" alt=""  variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            exit="hidden" />
          </div>
        </div>
      </div>
    </section>
  );
}
