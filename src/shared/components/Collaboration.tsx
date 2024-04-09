import { Link } from "react-router-dom";

export default function Collaboration() {
    return (
        
            <><div className="flex flex-col justify-between w-full py-4 border-b-2 md:flex-row lg:flex-row border-neutral-800 ">
            <div className="mb-4 md:w-1/2 lg:w-full">
                <p className="pb-2 text-xs text-white">LET'S COLLABORATE</p>
                <h1 className="pb-4 font-bold text-white text-md lg:text-3xl md:text-3xl sm:text-2xl">
                    Send us an email, <br />
                    to discuss a new project.
                </h1>

            </div>
            <div className="flex justify-end lg:flex-row lg:w-1/4">
            <Link
          to={{
            pathname: "/contact",
          }}
        >
          <button className="h-10 text-xs text-white rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-36 rounded-2l">Contact Us<span>{'->'}</span></button> </Link>
            </div>
        </div><div>
                <div>
                    <p className="pt-4 pb-2 text-xs text-white">
                        We're a team of creatives who are excited about unique ideas and<br /> help digital and fin-tech companies to create amazing identity. </p>
                </div>
            </div></>
      
    );
}