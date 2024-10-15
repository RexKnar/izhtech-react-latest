import { PostModel } from "../../../lib/domains/post";
import { useGetPostQueryListQuery } from "../../../lib/queries/blog/useGetPostListQuery";
import BlogCard from "../../home/components/blog/BlogCard";

export  default function BlogsList(){
    const { data: blogList } = useGetPostQueryListQuery();

    return (
       <section>
        <div className="z-40 flex justify-between w-full gap-2 p-4 mx-auto">
                  {/* <input type="text" placeholder="Search" className="w-1/4 h-10 px-5 text-sm text-black border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black" />
                  <div className="flex justify-end w-2/5 gap-2">
                  <select name="cars" id="cars" className="w-3/6 h-10 px-5 text-sm text-black border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black" >
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
  <Button className="mt-0 rounded-lg" variant="gradient" size="sm" >Filter</Button>
                  </div> */}
                  
                </div>
                {blogList && (
  <div className="flex flex-col w-full gap-6 px-4 md:flex-row md:flex-wrap md:gap-4 md:px-0">
    {/* Blog cards layout: 1 card per row on small screens, multiple cards per row on medium+ */}
    {blogList?.map((item: PostModel) => (
      <div key={item.id} className="w-9/12 pb-5 mx-auto sm:w-8/12 md:w-1/3 lg:w-1/4">
        <BlogCard item={item} />
      </div>
    ))}
  </div>
)}


        {blogList && (
          <div className="flex w-full gap-6 px-4 flex-col-3 md:flex-row md:py-6 lg:flex-row lg:flex-wrap lg:justify-center">
            <p>No Blogs Found</p>
          </div>
         )}
       </section>
    )
}