import Lottie from "lottie-react";
import dotsanimation from "./dotsanimation.json"
import BlogCard from '../../../shared/components/BlogCard';

export default function BlockList() {
    return (

        <section>

            <div className="flex-col justify-center gap-4 px-5 my-auto h-4/5 lg:flex lg:flex-row">
                <div className="lg:w-3/4 sm:w-[75%] sm:px-11  mx-auto">
                    <div className="flex flex-col h-full pb-5 ">
                        <p className="text-sm">FROM THE BLOG</p>
                        <h1 className="pt-4 text-5xl font-bold">
                            Quick and neat,
                            just like your work.
                        </h1>
                        <p className="pt-4 pb-4 text-lg">
                            Our app works for businesses of all sizes and shapes.<br />
                            Starting at just <b>$5 for an agent.</b>
                        </p>
                        <a href="/Read all Guides"
                            className="inline-block w-32 px-2 py-1 text-sm font-bold text-center text-black bg-white border-2 border-black rounded "
                        >Read all Guides</a>


<Lottie animationData={dotsanimation} loop={true} className="absolute lg:right-[-24rem] lg:w-[20%] lg:left-[46.5rem] lg:bottom-[-140rem] hidden lg:block " />

                    </div>
                </div>

                <div className="flex flex-col h-full pb-5 mx-auto lg:w-1/4 sm:w-full lg:ml-72">
                    <BlogCard />
                </div>
            </div>


            <div className="flex flex-col w-full gap-6 px-4 md:flex-row md:py-6 lg:flex-row lg:flex-wrap lg:justify-center">
                <div className="flex flex-col py-2 border-slate-600 md:flex-1 lg:w-1/4 ">
                    <BlogCard />

                </div>

                <div className="flex flex-col py-2 md:flex-1 lg:w-1/4 border-slate-600">
                    <BlogCard />

                </div>

                <div className="flex flex-col py-2 md:flex-1 lg:w-1/4 border-slate-600">
                    <BlogCard />
                </div>

            </div>
        </section>
    );
}
