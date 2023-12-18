export default function PlatformInsights() {
    return (
        <section className="flex flex-col items-center gap-3 px-4 py-3 sm:flex-col md:flex-col lg:flex-row xl:flex-row">

            <div className="w-full lg:pl-24 lg:pt-12 sm:w-full md:w-1/2 lg:w-1/2 sm:pt-2 md:pt-2">
                <p className="text-xs">
                    CAPABILITIES </p>
                <h1 className="pt-2 text-3xl font-bold">We work in the fields <br/>
                    of UI/UX design, <br/>
                    interiors, photography  <br/>
                    and art direction.
                </h1>
            </div>
            <div className="flex-1 bg-transparent sm:w-1/2 md:w-full lg:w-full">
                <img src="images/Aboutpage/img/capabilities.png" alt="Example Image" className="w-full h-auto" />
            </div>
        </section>
    );
}
