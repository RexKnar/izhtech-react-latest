// import { Accordion } from "flowbite-react";
import { ServiceBlockList, ServiceBlockProps } from "./types/services";
import { fadeIn } from "../animation/variants";
import { motion } from "framer-motion";
import Counter from "../animation/Counter";
import AccordionPage from "./Accordion";
import { Link } from "react-router-dom";

export default function TextFirstServiceBlock(props: ServiceBlockProps) {
  return (
    <section className="container">
      <div className="flex flex-col items-center gap-4 sm:flex-col md:flex-col lg:flex-row xl:flex-row lg:gap-20">
        <motion.div  variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              exit={"hidden"}
              viewport={{ once: false, amount: 0.1 }} style={{ backgroundImage: `url('${props.imageSrc}')` }} className={`w-[100%] flex bg-center h-[20rem] lg:w-1/2  lg:h-[30rem] order-1 lg:order-2 bg-no-repeat `}>
                
          {/* className={`flex bg-center h-[20rem] lg:w-1/2  lg:h-[30rem] order-1 lg:order-2 bg-no-repeat ${props.imageSrc ? `bg-[url('${props.imageSrc}')]"` : `images/servicepage/img.png`
              }`}> */}
          <div className="flex items-end self-end justify-end hidden">
            <div className="grid justify-center p-6 text-white bg-indigo-950 md:pr-32">
              <div className="flex items-center ">
                <img
                  src="images/servicepage/Icon2.png"
                  alt="Example Image"
                  className="w-8 h-8"
                />
                <h1 className="text-3xl font-bold lg:text-4xl"> <Counter value={35} direction="up" />+</h1>
              </div>
              <p className="pt-2 text-xs">designers and developers</p>
            </div>
            <div className="grid justify-center p-6 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 md:pr-32">
              <div className="flex items-center ">
                <img
                  src="images/servicepage/Icon1.png"
                  alt="Example Image"
                  className="w-8 h-8"
                />
                <h1 className="text-3xl font-bold lg:text-4xl"> <Counter value={28} direction="up" />+</h1>
              </div>
              <p className="pt-2 text-xs">awards for digital innovation</p>
            </div>
          </div>
        </motion.div>
        <motion.div  variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              exit={"hidden"}
              viewport={{ once: false, amount: 0.1 }} className="flex flex-col order-2 w-full md:flex-1 lg:w-1/2 lg:w-1/4 lg:order-1">
          <p className="pb-2 text-xs">OUR SERVICES</p>
          <h1 className="pb-2 text-3xl font-bold"> {props.serviceName}</h1>
          <p className="pb-6 text-xs">{props.description}</p>
          {/* <Accordion className="border-none outline-none">
            {props.listItem.map((item: ServiceBlockList) => {
              return (
                <Accordion.Panel>
                  <Accordion.Title className="text-black ">
                    <span className="flex items-center">
                      <img
                        src="/images/process/Vector.png"
                        alt="image"
                        className="w-4 h-4 mr-2"
                      />
                      {item.title}
                    </span>
                  </Accordion.Title>
                  <Accordion.Content>
                    <p className="text-xs text-black">{item.description}</p>
                  </Accordion.Content>
                </Accordion.Panel>
              );
            })}
          </Accordion> */}

          
{props.listItem.map((item: ServiceBlockList) => {
            return <AccordionPage header={item.title} content={item.description} />
          })}
          <Link to={`${props.link}`} className="flex items-center justify-center h-8 mt-4 text-xs font-bold text-white rounded bg-indigo-950 w-28 border-1 ">
            Learn more {"->"}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
