
export default function PlatformInsights() {
    return (
      <section>
        <div className="relative flex-col px-5 my-auto h-4/5 lg:flex lg:flex-row">
        <div className="flex flex-col self-center h-full px-2 pb-5 mx-auto lg:w-3/6 sm:w-full">
        <img className="sm:w-[50%] lg:w-[80%] justify-center mx-auto h-auto" src="/images/platforminsights/img.png" alt="pic" />
        </div>
          <div className="lg:w-4/6 sm:w-[75%] sm:px-2 lg:px-2 mx-auto">
            <div className="flex flex-col justify-end h-full pb-1">
              <p className="text-xs">
                THE NUMBER ONE #DATATRACKING APP
              </p>
              <h1 className="pt-4 font-bold text-md lg:w-3/4 lg:text-3xl md:text-3xl sm:text-3xl">
                Keep pushing <br />
                forward. We've got <br />
                your back.
              </h1>
              <p className="pt-4 text-xs pb-">
                So how does it work? Let’s check our <b>Getting Started</b> <br />
                tutorial or contact us for a demo.
              </p>
              <div className="flex flex-col w-full gap-6 py-8 md:flex-row lg:flex-row lg:flex-wrap lg:justify-center">
                <div className="flex flex-col py-2 border-t border-slate-600 md:flex-1 lg:w-1/4">
                  <h2 className="pt-2 text-3xl font-bold">36 <span className="text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text">+</span></h2>
                  <p className="pt-2 pb-3 text-xs">designers <br /> and developers</p>
                </div>
                <div className="flex flex-col py-2 border-t md:flex-1 lg:w-1/4 border-slate-600">
                  <h2 className="pt-2 text-3xl font-bold">345 <span className="text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text">+</span></h2>
                  <p className="pt-2 pb-3 text-xs">live promo <br /> campaigns</p>
                </div>
                <div className="flex flex-col hidden py-2 border-t md:flex-1 lg:w-1/4 lg:flex"></div>
                <div className="flex flex-col hidden py-2 border-t md:flex-1 lg:w-1/4 lg:flex"></div>
              </div>
            </div>
          </div>

        </div>
      </section>
    );
  }
  