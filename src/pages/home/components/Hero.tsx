export default function Hero() {
  return (
    <section className="h-[90vh] heroSection py-20">
      <div className="flex-col justify-center gap-4 px-5 my-auto h-4/5 lg:flex lg:flex-row">
        <div className=" lg:w-4/6 sm:w-[75%] sm:px-11 lg:m-0 mx-auto">
          <div className="flex flex-col justify-end h-full pb-5 ">
            <p>
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
      </div>
    </section>
  );
}
