import { motion, useTime, useTransform } from "framer-motion";
import { fadeIn } from "../../../shared/animation/variants";
import {
  // BadgePercent,
  // Ratio,
  Slack,
  // Webhook,
} from "lucide-react";
import { useGetServicesListQuery } from "../../../lib/queries/services/useGetServicesListQuery";

export default function Feature() {
  const { data: servicesList} = useGetServicesListQuery();
  const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });

  return (
    <section>
      <div className="container flex flex-col-4 w-full py-8 mx-auto md:flex-row md:py-24 lg:flex-row lg:flex-wrap lg:justify-center">
        {servicesList?.map((item) => (
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

            <h2 className="pt-2 text-sm font-bold">{item.title}</h2>
            <p className="pt-2 text-xs text-center">
              {item.shortNote}
            </p>
          </motion.div>
        ))}
        {/* <motion.div
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

          <h2 className="pt-2 text-sm font-bold">serviceDetail.title</h2>
          <p className="pt-2 text-xs text-center">
            Craft resonant brand identities.
            <br /> Guide through elevated brand experiences.
          </p>
        </motion.div>
         */}
      </div>
    </section>
  );
}
