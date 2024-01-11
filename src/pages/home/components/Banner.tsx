
export default function banner() {
  return (
    <section>
      <div className="flex-col justify-center gap-4 px-5 my-auto h-4/5 lg:flex lg:flex-row">
        <div className=" lg:w-4/6 sm:w-[75%] sm:px-11 lg:m-0 mx-auto relative">
          <div className="flex flex-col justify-end h-full pb-5 ">
            <p className="text-xs">
              #DATATRACKING APP
            </p>

            <h1 className="pt-4 font-bold text-md lg:w-3/4 2xl:text-7xl lg:text-4xl md:text-4xl sm:text-4xl">
              The app is great<br />
              for basic setup <br />
              and adjusts.
            </h1>
            <p className="pt-4 pb-4 text-xs">
              So how does it work? Let’s check our <b>Getting Started</b> <br />
              tutorial or contact us for a demo.
            </p>
            <button className="w-32 px-2 py-1 text-xs font-bold text-black bg-white border border-black rounded">
              Explore Features
            </button>
          </div>

        </div>
        <div className="flex flex-col justify-end h-full pb-5 mx-auto lg:w-3/6 sm:w-full ">
          <img className=" sm:w-[50%] lg:w-[75%] lg:m-0 mx-auto h-auto" src="/images/bannar1/img.png" />
        </div>
      </div>

      <div className="flex flex-col w-full gap-6 px-4 py-8 md:flex-row md:py-24 lg:flex-row lg:flex-wrap lg:justify-center">

        <div className="flex flex-col py-2 border-t border-slate-600 md:flex-1 lg:w-1/4 ">
          <img src="/images/bannar1/mission.png" alt="Image" className="w-8 h-8 mt-5" />
          <h2 className="pt-2 text-sm font-bold">Mission</h2>
          <p className="pt-2 pb-3 text-xs">Untangling Knots to give Clear Digital Solution</p>
          <button className="h-6 text-xs text-white bg-black rounded w-28 rounded-2l">
            Read More<span>{'->'}</span>
          </button>
        </div>

        <div className="flex flex-col py-2 border-t md:flex-1 lg:w-1/4 border-slate-600">
          <img src="/images/bannar1/vision.png" alt="Image" className="w-8 h-8 mt-5" />
          <h2 className="pt-2 text-sm font-bold">Vision</h2>
          <p className="pt-2 pb-3 text-xs">Make life simpler by providing complex tech in a simpler way.</p>
          <button className="h-6 text-xs text-white bg-black rounded w-28 rounded-2l">
            Read More<span>{'->'}</span>
          </button>
        </div>

        <div className="flex flex-col py-2 border-t md:flex-1 lg:w-1/4 border-slate-600">
          <img src="/images/bannar1/values.png" alt="Image" className="w-8 h-8 mt-5" />
          <h2 className="pt-2 text-sm font-bold">Values</h2>
          <p className="pt-2 pb-3 text-xs">Equally disciplined and relish work ethic.</p>
          <button className="h-6 text-xs text-white bg-black rounded w-28 rounded-2l">
            Read More<span>{'->'}</span>
          </button>
        </div>

      </div>
    </section>
  );
}