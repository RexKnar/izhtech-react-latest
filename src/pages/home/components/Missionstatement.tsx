import { motion } from "framer-motion";
import { fadeIn } from "../../../shared/animation/variants";
import { LinkButton } from "../../../shared/components/buttons/LinkButton";

export default function MissionStatement() {
  // const time = useTime();
  // const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });

  return (
    <div className="flex flex-col w-full gap-6 px-4 py-8 md:flex-row lg:flex-row lg:flex-wrap lg:justify-center">
     

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        exit={"hidden"}
        viewport={{ once: false, amount: 0.1 }}
        className="flex justify-around py-2 border-t md:flex-1 lg:w-1/4 border-slate-600 md:flex-col"
      >
        <div className="flex flex-col justify-center order-2 md:order-1">
          <img
            src="/images/bannar1/vision.png"
            alt="Image"
            className="w-20 h-20 mt-5 md:w-8 md:h-8"
          />
        </div>
        <div className="w-1/2 md:w-full md:order-2">
          <h2 className="pt-2 text-lg font-bold">Vision</h2>
          <p className="pt-2 pb-3 text-md">
            Simplifying life through user-friendly technology solutions.
          </p>
          <LinkButton
            href={"/about"}
            size={"xs"}
            className="w-32 px-2 text-white bg-black "
          >
            Explore More
          </LinkButton>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        exit={"hidden"}
        viewport={{ once: false, amount: 0.1 }}
        className="flex justify-around py-2 border-t md:flex-1 lg:w-1/4 border-slate-600 md:flex-col"
        >
          <div className="flex flex-col justify-center order-2 md:order-1">
        <img
          src="/images/bannar1/mission.png"
          alt="Image"
           className="w-20 h-20 mt-5 md:w-8 md:h-8"
        />
        </div>
        <div className="order-1 w-1/2 md:w-full md:order-2">
        <h2 className="pt-2 text-lg font-bold">Mission</h2>
        <p className="pt-2 pb-3 text-md">
          Simplify digital challenges and provide clear solutions.
        </p>
        <LinkButton
          href={"/about"}
          size={"xs"}
          className="w-32 px-2 text-white bg-black "
        >
          Explore More
        </LinkButton>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        exit={"hidden"}
        viewport={{ once: false, amount: 0.1 }}
        className="flex justify-around py-2 border-t md:flex-1 lg:w-1/4 border-slate-600 md:flex-col"
      >
        <div className="flex flex-col justify-center order-2 md:order-1">
          <img
            src="/images/bannar1/values.png"
            alt="Image"
            className="w-20 h-20 mt-5 md:w-8 md:h-8"
          />
        </div>
        <div className="order-1 w-1/2 md:w-full md:order-2">
          <h2 className="pt-2 text-lg font-bold">Values</h2>
          <p className="pt-2 pb-3 text-md">
            Embracing Equal Discipline and Cherishing Work Ethics.
          </p>
          <LinkButton
            href={"/about"}
            size={"xs"}
            className="w-32 px-2 text-white bg-black "
          >
            Explore More
          </LinkButton>
        </div>
      </motion.div>
    </div>
  );
}
