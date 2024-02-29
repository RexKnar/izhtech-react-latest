import { motion, useTime, useTransform } from "framer-motion";
import { fadeIn } from "../../../shared/animation/variants";
import { Webhook } from "lucide-react";


export default function MissionStatement() {
  // const time = useTime();
  // const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });

  
  return (
    <div className="flex flex-col w-full gap-6 px-4 py-8 md:flex-row lg:flex-row lg:flex-wrap lg:justify-center">

        <motion.div variants={fadeIn("up", 0.2)}
  initial="hidden"
  whileInView={"show"}
  exit={"hidden"}
  viewport={{ once: false, amount:0.1 }} className="flex flex-col py-2 border-t border-slate-600 md:flex-1 lg:w-1/4 ">
    {/* <motion.span
            style={{ rotate }}
            className="flex items-center justify-center w-8 h-8 mt-5 bg-blue-300 rounded-full"
          >
            <Webhook className="mx-auto text-white " />
          </motion.span> */}
          <img src="/images/bannar1/mission.png" alt="Image" className="w-8 h-8 mt-5" />
          <h2 className="pt-2 text-sm font-bold">Mission</h2>
          <p className="pt-2 pb-3 text-xs">Simplify digital challenges and provide clear solutions.</p>
          <button className="h-6 text-xs text-white bg-black rounded w-28 rounded-2l">
            Know More<span></span>
          </button>
        </motion.div>

        <motion.div variants={fadeIn("up", 0.2)}
  initial="hidden"
  whileInView={"show"}
  exit={"hidden"}
  viewport={{ once: false, amount:0.1 }} className="flex flex-col py-2 border-t md:flex-1 lg:w-1/4 border-slate-600">
          <img src="/images/bannar1/vision.png" alt="Image" className="w-8 h-8 mt-5" />
          <h2 className="pt-2 text-sm font-bold">Vision</h2>
          <p className="pt-2 pb-3 text-xs">Simplifying life through user-friendly technology solutions.</p>
          <button className="h-6 text-xs text-white bg-black rounded w-28 rounded-2l">
            Know More<span></span>
          </button>
        </motion.div>

        <motion.div variants={fadeIn("up", 0.2)}
  initial="hidden"
  whileInView={"show"}
  exit={"hidden"}
  viewport={{ once: false, amount:0.1 }} className="flex flex-col py-2 border-t md:flex-1 lg:w-1/4 border-slate-600">
          <img src="/images/bannar1/values.png" alt="Image" className="w-8 h-8 mt-5" />
          <h2 className="pt-2 text-sm font-bold">Values</h2>
          <p className="pt-2 pb-3 text-xs">Embracing Equal Discipline and Cherishing Work Ethics.</p>
          <button className="h-6 text-xs text-white bg-black rounded w-28 rounded-2l">
            Know More<span></span>
          </button>
        </motion.div>

      </div>
  );
}