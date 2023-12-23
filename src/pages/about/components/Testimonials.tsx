export default function Testimonials() {
    return (
        <section className="flex flex-col px-4 py-10 text-black bg-black lg:gap-8 sm:flex-row sm:gap-20 lg:px-24">
            <div className="w-full sm:w-1/2">
                <h1 className="text-xs text-gray-200">TESTIMONIALS</h1>
                <h1 className="mt-3 text-2xl font-bold text-white border-t border-t-gray-700">
                    What our clients say
                    <br /> about our studio.
                </h1>
                <button className="h-6 mt-3 text-xs text-white rounded w-28 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2l">
                    More Reviews <span>{'->'}</span>
                </button>
            </div>
            <div className="w-full mt-4 sm:w-1/2">
                <button className="w-32 mb-2 text-xs font-normal text-gray-300 bg-gray-900 rounded focus:outline-none">
                    Customer Support
                </button>
                <p className="text-xs text-white">
                    "5 stars WordPress template! If anyone wants an example of what you can
                    do with this theme. I tell you what, there has never been an
                    issue that Cory from the colabrio support team hasn't been able
                    to solve for me."
                </p>
                <h1 className="mt-3 mb-1 text-xs font-bold text-white">Colin Lucido</h1>
                <h1 className="text-xs text-white">UI Designer · Interactive Media</h1>
            </div>
        </section>
    );
}
