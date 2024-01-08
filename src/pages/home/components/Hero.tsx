import Lottie from "lottie-react";
import circle from "./circle.json";
import dot from "./dot.json";

export default function Hero() {
  return (
    <section className="h-[calc(100vh-70px)] heroSection py-[200px] container mx-auto flex gap-5 overflow-hidden">
      <div className="flex items-end ">
      <div className="flex flex-col gap-2 justify-end ">
            <p className="text-[#0C1C28]">
              Looking to enhance your online presence? We offer top-notch
              digital growth services to help your your brand stand out in the
              digital world
            </p>
            <h1 className="text-3xl font-bold 2xl:text-7xl lg:text-4xl md:text-4xl sm:text-4xl font-['Space_Grotesk']">
              Elevate your Online presence
            </h1>
          </div>
      </div>
      <div className="flex flex-col justify-end h-full pb-5 mx-auto lg:w-3/6 sm:w-full relative">
          <img className="sm:w-[50%] lg:w-[100%] lg:m-0 mx-auto h-auto" src="/images/hero/bg-1.png" />
          {/* <img src="/images/hero/bottom-dots.png" className="absolute bottom-[-30rem] w-[75%] left-[5rem]"/> */}
          <Lottie animationData={dot} loop={true} className="absolute bottom-[-14rem] w-[75%] left-[5rem]"/>
          
        </div>
      {/* <div className="flex-col justify-center gap-4 px-5 my-auto lg:flex lg:flex-row">
        <div className=" lg:w-4/6 sm:w-[75%] sm:px-11 lg:m-0 mx-auto">
          <div className="flex flex-col justify-end h-full pb-5 gap-1 ">
            <p className="text-[#0C1C28]">
              Looking to enhance your online presence? We offer top-notch
              digital growth services to help your your brand stand out in the
              digital world
            </p>
            <h1 className="text-3xl font-bold lg:w-3/4 2xl:text-7xl lg:text-4xl md:text-4xl sm:text-4xl">
              Elevate your Online presence
            </h1>
          </div>
        </div>
        <div className="flex flex-col justify-end h-full pb-5 mx-auto lg:w-3/6 sm:w-full ">
          <img className=" sm:w-[50%] lg:w-[75%] lg:m-0 mx-auto h-auto" src="/images/hero/bg-1.png" />
        </div>
        <div className="fixed right-0 flex-col items-end justify-center hidden transform rotate-90 -translate-y-1/2 lg:flex top-1/2">
          <div className="h-[1vw] flex justify-start">
            <h3 className="my-auto font-semibold">
              Follow Us -<a href="">/Bg.</a>
              <a href="">/Ig</a>
              <a href="">/Tw</a>
            </h3>
          </div>
        </div>
      </div> */}
      <Lottie animationData={circle} loop={true} className="absolute top-[-9rem] right-[-9rem] z-[-1]"/>
    </section>
  );
}
