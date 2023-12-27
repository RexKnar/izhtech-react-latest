export default function Contactus() {
  return (
    <section className="py-4 bg-transparent">
      <div className="flex-col justify-center gap-4 px-5 my-auto h-4/5 lg:flex lg:flex-row">
        <div className=" lg:w-full sm:w-[75%] sm:px-11 mx-auto">
          <div className="flex flex-col justify-end h-full pb-5 ">
            <h1 className="pt-4 font-bold text-md lg:w-3/4 2xl:text-7xl lg:text-4xl md:text-4xl sm:text-4xl">
              Contact Us
            </h1>
            <p className="pt-4 pb-4 text-xs">
              Leave us a little info, and we’ll be in touch.
            </p>
            <button className="w-24 px-2 py-1 text-xs font-bold text-white bg-black border border-black rounded">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
