import { Link } from "react-router-dom";
import CustomObject from "../../../shared/components/CustomObjects";

export default function ourservices() {
    return (
        <section className="relative py-10 bg-transparent lg:py-15 ">
            <div className="flex-col justify-center gap-4 my-auto h-4/5 lg:flex lg:flex-row">
                <div className="w-full mx-auto ">
                    <div className="flex flex-col justify-end h-full pb-5 ">
                    <CustomObject className="absolute -z-10 " variants="green-disk" />
                        <h1 className="pt-4 font-bold text-md lg:w-3/4 2xl:text-7xl lg:text-4xl md:text-4xl sm:text-4xl">
                            Our Services
                        </h1>
                        <p className="pt-4 pb-4 text-xs">
                            Leave us a little info, and we’ll be in touch.
                        </p>
                        <Link
          to={{
            pathname: "/contact",
          }}
        >
          
                        <button className="w-24 px-2 py-1 text-xs font-bold text-white bg-black border border-black rounded">
                            Contact Us
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
            <CustomObject className="absolute z-10 opacity-25 top-10 xl:-right-32 z-1" variants="long-line-orange-left"/>
        </section>
    );
}