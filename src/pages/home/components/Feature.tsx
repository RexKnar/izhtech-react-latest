import { motion, useTime, useTransform } from "framer-motion";
import { fadeIn } from "../../../shared/animation/variants";
import {
  BadgePercent,
  Ratio,
  Slack,
  Webhook,
} from "lucide-react";

export default function Feature() {
  const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });

  return (
    <section>
      <div className="container flex flex-col w-full py-8 mx-auto md:flex-row md:py-24 lg:flex-row lg:flex-wrap lg:justify-center">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="flex flex-col items-center py-2 md:flex-1 lg:w-1/4 hover:cursor-pointer"
        >
           

            
          <motion.span
            style={{ rotate }}
            className="flex items-center justify-center w-8 h-8 mt-5 bg-green-300 rounded-full"
          >
            <Slack className="mx-auto text-white " />
          </motion.span>

          <h2 className="pt-2 text-sm font-bold">Branding</h2>
          <p className="pt-2 text-xs text-center">
            Craft resonant brand identities.
            <br /> Guide through elevated brand experiences.
          </p>
        </motion.div>
        {/* </motion.div> */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="flex flex-col items-center py-2 md:flex-1 lg:w-1/4 hover:cursor-pointer"
        >
          <motion.span
            style={{ rotate }}
            className="flex items-center justify-center w-8 h-8 mt-5 rounded-full bg-amber-300"
          >
            <BadgePercent className="mx-auto text-white " />
          </motion.span>
         
          <h2 className="pt-2 text-sm font-bold">Digital Marketing</h2>
          <p className="pt-2 text-xs text-center">
            Elevate site appeal, enhance visibility, <br />
            generate leads with digital mastery.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="flex flex-col items-center py-2 md:flex-1 lg:w-1/4 hover:cursor-pointer"
        >
          <motion.span
            style={{ rotate }}
            className="flex items-center justify-center w-8 h-8 mt-5 bg-blue-300 rounded-full"
          >
            <Webhook className="mx-auto text-white " />
          </motion.span>

          <h2 className="pt-2 text-sm font-bold">Web Application</h2>
          <p className="pt-2 text-xs text-center">
            Lead in digital solutions.
            <br /> Rewards drive continuous enterprise improvement.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="flex flex-col items-center py-2 md:flex-1 lg:w-1/4 hover:cursor-pointer"
        >
          <motion.span
            style={{ rotate }}
            className="flex items-center justify-center w-8 h-8 mt-5 bg-purple-300 rounded-full"
          >
            <Ratio className="mx-auto text-white " />
          </motion.span>
          <h2 className="pt-2 text-sm font-bold">Mobile App</h2>
          <p className="pt-2 text-xs text-center">
            Master digital debts. Apps boost efficiency,<br/> elevate communication,
            engage customers.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
