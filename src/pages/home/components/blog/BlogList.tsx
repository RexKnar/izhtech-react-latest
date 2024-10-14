import Lottie from "lottie-react";
import dotsanimation from "../dotsanimation.json"
import BlogCard from './BlogCard';
import { useGetPostQueryListQuery } from "../../../../lib/queries/blog/useGetPostListQuery";
import { PostModel } from "../../../../lib/domains/post";

export default function BlogList() {
    const { data: blogList } = useGetPostQueryListQuery();
    return (

        <section>
{ blogList && blogList.length > 0 && (
            <><div className="flex flex-col flex-wrap justify-center gap-4 px-1 my-auto h-4/5 lg:flex lg:flex-row">
                    <div className="lg:w-2/4 sm:w-[75%] sm:px-11  mx-auto">
                        <div className="flex flex-col h-full pb-5 ">
                            <p className="text-sm">FROM THE BLOG</p>
                            <h1 className="pt-4 text-5xl font-bold">
                                Quick and neat,
                                just like our work.
                            </h1>
                            <br />
                            <a href="/blog"
                                className="inline-block w-32 px-2 py-1 text-sm font-bold text-center text-black bg-white border-2 border-black rounded "
                            >Read all</a>


                            <Lottie animationData={dotsanimation} loop={true} className="absolute lg:right-[-24rem] lg:w-[20%] lg:left-[46.5rem] lg:bottom-[-140rem] hidden lg:block " />

                        </div>
                    </div>


                    {blogList?.map((item: PostModel) => (
                        <div className="h-full pb-5 mx-auto lg:w-1/4 sm:w-full">
                            <BlogCard key={item.id} item={item} />
                        </div>
                    ))}

                </div><div className="flex w-full gap-6 px-4 flex-col-3 md:flex-row md:py-6 lg:flex-row lg:flex-wrap lg:justify-center">

                    </div></>)}
        </section>
    );
}
