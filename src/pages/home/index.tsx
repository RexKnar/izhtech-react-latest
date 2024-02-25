import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Partnercompany from "./components/partnercompany";
import Banner from "./components/Banner";
import Ourservice from "./components/Ourservice";
import Process from "./components/Process";
import Slider from "./components/Slider";
import CustomObject from "../../shared/components/CustomObjects";
import NewsLetter from "./components/NewsLetter";
import { fadeIn } from "../../shared/animation/variants";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
     
        <section className=" pt-6 lg:h-[calc(80vh-70px)] ">
          <Hero />
          
        </section>

        <section className="grid w-full bg-teal-50">
          <Feature />
        </section>

        <section className="container grid w-full mx-auto bg-white">
          <Partnercompany />
        </section>

        <section className="mx-auto xl:px-20 container-fluid xl:container">
          <Banner />
        </section>

        <section className="flex items-center justify-center py-4 bg-white">
          <NewsLetter />
        </section>

        {/* <section className="py-4 bg-gray-100">
       <Platforminsights />
       </section> */}

        {/* <section className='container px-20 py-8 mx-auto'>
       <BlogList />
       </section> */}

        <section className="mx-auto bg-gray-100 xl:px-20 container-fluid xl:container ">
          <Ourservice />
        </section>

        <section className="mx-auto xl:px-20 container-fluid xl:container">
          <Process />
        </section>

        <section className="relative mx-auto mb-10 xl:px-20 container-fluid xl:container ">
          <Slider />
          <motion.span
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
          >
            <CustomObject
              className="absolute z-10 -left-8 -top-10"
              variants="line-purple-left"
            />
          </motion.span>
        </section>
        <section className="px-6">
          {/* <div className="flex flex-col justify-between w-full py-4 md:flex-row lg:flex-row">

  <div className="mb-4 md:w-1/2 lg:w-1/4 md:mb-0 lg:mb-0">
    <div className="">
      <h1 className="font-bold text-md lg:text-3xl md:text-3xl sm:text-2xl">
        Get started with<br />
        our service today.
      </h1>
      <p className="pt-4 pb-2 text-xs">
        The app helps teams create, track, and deliver faster.
      </p>
    </div>
  </div>

  <div className=" lg:w-1/4">
    <div className="max-w-sm">
      <div className="flex lg:flex-row">
        <TextInput
          className="w-full mb-2 border-transparent md:w-46 text-slate-800"
          id="email"
          type="email"
          placeholder="you@admin.com"
          required
        />
        <Button
          className="w-auto h-10 text-white bg-gray-800 lg:w-32"
          size="xs"
        >
          Get a Demo
        </Button>
      </div>

      <p className="pt-4 pb-2 text-xs text-slate-950">
        Already using our service?<b> Sign In</b>
      </p>
    </div>
  </div>

</div> */}



<div className="fixed right-0 flex-col items-end justify-center hidden transform rotate-90 -translate-y-1/2 lg:flex top-1/2">
          <div className="h-[1vw] flex justify-start">
            <h3 className="my-auto font-semibold">
              Follow Us -<a href="">/Bg.</a>
              <a href="">/Ig</a>
              <a href="">/Tw</a>
            </h3>
          </div>
        </div>

        </section>
     
    </>
  );
}
