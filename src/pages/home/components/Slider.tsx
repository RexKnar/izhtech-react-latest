export default function Slider() {
    return (
      <section className="grid w-full bg-white">
        <div className="flex flex-col w-full py-8 md:flex-row md:py-24 lg:flex-row lg:flex-wrap lg:justify-center">
          <div className="flex flex-col items-center py-2 md:flex-1 lg:w-1/4">
            <img src="/images/slider/spotify.png" alt="Image" className="w-auto h-8 mb-2" />
          </div>
          <div className="flex flex-col items-center py-2 md:flex-1 lg:w-1/4">
            <img src="/images/slider/walmart.png" alt="Image" className="w-auto h-8 mb-2" />
          </div>
          <div className="flex flex-col items-center py-2 md:flex-1 lg:w-1/4">
            <img src="/images/slider/amazon.png" alt="Image" className="w-auto h-8 mb-2" />
          </div>
          <div className="flex flex-col items-center py-2 md:flex-1 lg:w-1/4">
            <img src="/images/slider/intel.png" alt="Image" className="w-auto h-8 mb-2" />
          </div>
          <div className="flex flex-col items-center py-2 md:flex-1 lg:w-1/4">
            <img src="/images/slider/airbnb.png" alt="Image" className="w-auto h-8 mb-2" />
          </div>
          <div className="flex flex-col items-center py-2 md:flex-1 lg:w-1/4">
            <img src="/images/slider/linkedin.png" alt="Image" className="w-auto h-8 mb-2" />
          </div>
        </div>
      </section>
    );
  }
  