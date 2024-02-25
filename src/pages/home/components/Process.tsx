import { Accordion } from 'flowbite-react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../shared/animation/variants';
import CustomObject from '../../../shared/components/CustomObjects';

export default function Process() {
  return (
    <div className='py-10'>
      <div className="relative flex-col gap-4 py-10 h-4/5 lg:flex lg:flex-row">
        <div className="lg:w-3/4 sm:w-[75%]">
          <div className="flex flex-col h-full py-5 pl-5 ">
          
           <motion.div variants={fadeIn("right", 0.2)}
  initial="hidden"
  whileInView={"show"}
  exit={"hidden"}
  viewport={{ once: false, amount:0.1 }}> <p className="z-10 text-xs">OUR PROCESS</p>
  <CustomObject className="absolute -z-10 " variants="green-disk" />
            <h1 className="py-2 text-4xl font-bold">
            Digital Triumph Assurance
            </h1>
            <p className="pt-4 pb-4 text-xs">
            How we get things done<br />
            </p>
            
</motion.div>
            <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            exit={"hidden"}
            viewport={{ once: false, amount:0.1 }}
              className="absolute right-0 bg-right bg-no-repeat bg-cover top-6 bottom-5 left-72"
              style={{ backgroundImage: "url('images/img/Group11.png')" }}
            ></motion.div>

          </div>
        </div>
      </div>



      <div className="flex flex-col w-full py-4 md:gap-8 md:flex-row lg:flex-row lg:flex-wrap lg:justify-center">

        <div className="flex flex-col md:flex-1 lg:w-1/4">

          <Accordion collapseAll className="border-none outline-none">
          <motion.span variants={fadeIn("up", 0.1)}
  initial="hidden"
  whileInView={"show"}
  exit={"hidden"}
  viewport={{ once: false, amount:0.1 }} className="flex items-center">
            <Accordion.Panel>
              <Accordion.Title className="text-black ">
                <span className="flex items-center">
                  <img src="/images/process/Vector.png" alt="image" className="w-4 h-4 mr-2" />
                  Putting You First
                </span>
              </Accordion.Title>
              <Accordion.Content >
                <p className="text-xs text-black ">
                We start by getting to know you and your needs. We focus on what matters to you as our client. Our aim is to suggest practical, scalable solutions that match your vision.
                </p>
                

              </Accordion.Content>
            </Accordion.Panel>
            </motion.span>
         <motion.span variants={fadeIn("up", 0.2)}
  initial="hidden"
  whileInView={"show"}
  exit={"hidden"}
  viewport={{ once: false, amount:0.1 }} className="flex items-center">   <Accordion.Panel>
              <Accordion.Title className="text-black ">
                <span className="flex items-center">
                  <img src="/images/process/Vector.png" alt="image" className="w-4 h-4 mr-2" />
                  Crafting Visual Blueprints
                </span>
              </Accordion.Title>
              <Accordion.Content>
                <p className="text-black ">
                Our screen mockups make ideas real. These designs show a preview of what's coming, giving you a clear look at the future.
                </p>
                

              </Accordion.Content>
            </Accordion.Panel> </motion.span>
          <motion.span variants={fadeIn("up", 0.4)}
  initial="hidden"
  whileInView={"show"}
  exit={"hidden"}
  viewport={{ once: false, amount:0.1 }} className="flex items-center">  <Accordion.Panel>
              <Accordion.Title className="text-black ">
                <span className="flex items-center">
                  <img src="/images/process/Vector.png" alt="image" className="w-4 h-4 mr-2" />
                  Artistry Meets Utility
                </span>
              </Accordion.Title>
              <Accordion.Content>
                <p className="text-black ">
                We blend creativity and functionality in our designs to elevate aesthetics, highlighting key elements for maximum impact .
                </p>
                

              </Accordion.Content>
            </Accordion.Panel> </motion.span>
          </Accordion>
        </div>


        <div className="flex flex-col md:flex-1 lg:w-1/4">

          <Accordion collapseAll className="border-none outline-none">
           <motion.span variants={fadeIn("up", 0.1)}
  initial="hidden"
  whileInView={"show"}
  exit={"hidden"}
  viewport={{ once: false, amount:0.1 }} className="flex items-center"> <Accordion.Panel>
              <Accordion.Title className="text-black ">
                <span className="flex items-center">
                  <img src="/images/process/Vector.png" alt="image" className="w-4 h-4 mr-2" />
                  Simplify and Elegance in Development
                </span>
              </Accordion.Title>
              <Accordion.Content>
                <p className="text-xs text-black">
                It powers digital innovation, transforming ideas into practical solutions for users and businesses. Our developer-friendly approach ensures smooth customer experiences, driven by these forces.</p>
                

              </Accordion.Content>
            </Accordion.Panel> </motion.span>
           <motion.span variants={fadeIn("up", 0.2)}
  initial="hidden"
  whileInView={"show"}
  exit={"hidden"}
  viewport={{ once: false, amount:0.1 }} className="flex items-center"> <Accordion.Panel>
              <Accordion.Title className="text-black ">
                <span className="flex items-center">
                  <img src="/images/process/Vector.png" alt="image" className="w-4 h-4 mr-2" />
                  Meticulous Testing for Perfection
                </span>
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-black dark:text-black">
                We thoroughly test at every level—unit, integration, user acceptance—strengthening the software's reliability and performance to ensure it stands strong.
                </p>
               

              </Accordion.Content>
            </Accordion.Panel> </motion.span>
           <motion.span variants={fadeIn("up", 0.4)}
  initial="hidden"
  whileInView={"show"}
  exit={"hidden"}
  viewport={{ once: false, amount:0.1 }} className="flex items-center"> <Accordion.Panel>
              <Accordion.Title className="text-black ">
                <span className="flex items-center">
                  <img src="/images/process/Vector.png" alt="image" className="w-4 h-4 mr-2" />
                  Unveiling Excellence
                </span>
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-black">
                It's the ‘big reveal’. We prepare by setting up servers, optimizing databases, and ensuring a flawless live performance. It's the moment when your vision becomes reality.
                </p>
              

              </Accordion.Content>
            </Accordion.Panel> </motion.span>
          </Accordion>

        </div>
      </div>
    </div>
  );
}
