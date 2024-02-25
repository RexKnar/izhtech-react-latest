import { Card, Progress } from "flowbite-react";
import { motion } from "framer-motion";
import { BookPlus, QrCode } from "lucide-react";
import { fadeIn } from "../../../../shared/animation/variants";

export default function MobileAppService() {
  return (
    <div className="flex flex-row items-start flex-1 p-4">
      {/* Card */}
      <motion.div variants={fadeIn("right", 0.1)}
  initial="hidden"
  whileInView={"show"}
  viewport={{ once: false, amount:0.1 }}
  >
      <Card
        className="hidden max-w-sm shadow-none sm:block"
        imgAlt="img"
        imgSrc="/images/Ourservice/Img.png"
      >
        <div className="flex flex-col gap-2">
          <div className="text-base font-medium dark:text-white">
            Mobile App Development
          </div>
          <Progress
            progress={45}
            size="sm"
            className=" bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 h-2.5 rounded-full w-[50%] relative"
          />
        </div>
        <p className="font-normal text-gray-700 dark:text-gray-400">
        Mobile app development crafts intuitive interfaces, enhancing user experiences.
        </p>
      </Card>
      </motion.div>
      
      {/* Icon Column */}

      {/* Right */}
      <div className="flex-1 mt-4 sm:ml-4">
        <div className="flex flex-col w-full px-2 gap- lg:justify-center">
          <motion.div variants={fadeIn("right", 0.2)}
  initial="hidden"
  whileInView={"show"}
  viewport={{ once: false, amount:0.1 }} className="flex flex-col border-slate-600 md:flex-1 lg:w-full ">
            <span className="flex items-center justify-center w-12 h-12 mt-5 rounded-full bg-amber-300">
            
              <QrCode  className="mx-auto text-white " />
            </span>

            <h2 className="pt-2 text-sm font-bold ">
              1.  Digital Debt Management
            </h2>
            <p className="pt-2 pb-3 text-xs">
            Regain complete control over your digital debts with our straightforward solutions
            </p>
          </motion.div>

          <motion.div variants={fadeIn("right", 0.4)}
  initial="hidden"
  whileInView={"show"}
  viewport={{ once: false, amount:0.1 }} className="flex flex-col mt-4 md:flex-1 lg:w-full border-slate-600 sm:mt-0">
            <span className="flex items-center justify-center w-12 h-12 mt-5 bg-blue-500 rounded-full">
            <BookPlus  className="mx-auto text-white " />
            </span>

            <h2 className="pt-2 text-sm font-bold">
              2. Enhanced Digital Solutions
            </h2>
            <p className="pt-2 pb-3 text-xs">
            Simplify your tasks with our apps that boost efficiency, improve communication, and enhance customer engagement

            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
