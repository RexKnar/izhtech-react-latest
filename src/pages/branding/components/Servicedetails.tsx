import { motion } from "framer-motion"
import { fadeIn } from "../../../shared/animation/variants";  

export default function Servicedetails() {
  return (
    <section>
      <div className="container lg:mx-auto lg:px-16 px-2 py-10">
        <div className="flex flex-col lg:flex-row xl:gap-16 gap-8 md:items-center lg:justify-center">
          <div className="lg:w-2/6">
            <motion.img src="/images/branding/banner.jpg" alt="" variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            exit="hidden"  />
          </div>
          <motion.div className="lg:w-3/6 md:px-14 lg:px-2"  variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            exit="hidden">
            <p className="text-xs font-medium tracking-wide">IZH-TECH</p>
            <p className="xl:text-6xl text-4xl font-bold pb-2.5">
              Your Partner for Crafting Unforgettable Brand Identities
            </p>
            <p className="text-sm leading-7 tracking-wider text-justify">
              At Izh-Tech, we firmly believe that a robust brand forms the very
              heart of a successful business. Our conviction in this truth is
              what fuels our passion to provide a comprehensive array of
              branding and design services aimed at not just helping you
              establish your brand, but nurturing its growth over time.
            </p>
            <p className="tracking-wider font-bold text-sm py-4">Our Comprehensive Suite of Branding and Design Services</p>
            <p className="tracking-wider text-sm text-justify leading-7">
              Our commitment to your brand’s success is reflected in our
              wide-ranging suite of services. Here’s a closer look at what we
              offer:
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
