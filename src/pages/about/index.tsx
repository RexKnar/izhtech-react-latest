import Aboutus from "./components/Aboutus";
import Banner from "./components/Banner";
import Capabilities from "./components/Capabilities";

import Counts from "./components/Counts";
import Slider from "../home/components/Slider";

import Testimonials from "./components/Testimonials";

export default function About() {
  return (
    <>
      <section className="mx-auto overflow-hidden container-fluid ">
        <section className="px-5 mx-auto md:container ">
        
          <Aboutus />
        </section>
        <section className="px-5 mx-auto md:container ">
       
          <Banner />
        </section>
        <section className="px-5 mx-auto md:container md:px-0">
         
          <Capabilities />
        </section>
        <section className="relative px-5 mx-auto mb-20 xl:px-20 container-fluid xl:container lg:pt-20">
          <Slider />
        </section>
        <section className="bg-black container-fluid">
          <Testimonials />
        </section>
       
        <section className="mx-auto md:px-0">
          <Counts />
        </section>
       
      </section>
    </>
  );
}
