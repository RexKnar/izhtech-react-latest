import { PostModel } from "../../../lib/domains/post";
import { useGetPostQueryListQuery } from "../../../lib/queries/blog/useGetPostListQuery";
import BlogCard from "../../home/components/blog/BlogCard";

export  default function BlogsList(){
    const { data: blogList } = useGetPostQueryListQuery();

    return (
       <section>
        <div className="flex flex-col-3 w-full gap-6 px-4 md:flex-row md:py-6 lg:flex-row lg:flex-wrap lg:justify-center">
        {blogList?.map((item: PostModel,) => (
                        <div className=" h-full pb-5 mx-auto lg:w-1/4 sm:w-full ">
                    <BlogCard key={item.id} item={item} />
                    </div>
                ))}
        </div>
       </section>
    )
}