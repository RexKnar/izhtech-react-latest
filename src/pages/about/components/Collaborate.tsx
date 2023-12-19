export default function Collaborate() {
    return (
        <section className="px-10 py-10 bg-black">
            <div className="flex flex-col justify-between w-full py-4 md:flex-row lg:flex-row">
                <div className="mb-4 md:w-1/2 lg:w-full">
                    <p className="pb-2 text-xs text-white">LET'S COLLABORATE</p>
                    <h1 className="pb-4 font-bold text-white text-md lg:text-3xl md:text-3xl sm:text-2xl">
                        Send us an email, <br />
                        to discuss a new project.
                    </h1>
                    <div className="border-t-2 border-neutral-800">
                        <p className="pt-4 pb-2 text-xs text-white">
                            We're a team of creatives who are excited about unique ideas and<br /> help digital and fin-tech companies to create amazing identity. </p>
                    </div>
                </div>
                <div className="flex lg:flex-row lg:w-1/4">
                    <button className="h-10 text-xs text-white rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-36 rounded-2l">Contact Us<span>{'->'}</span></button>
                </div>
            </div>
        </section>
    );
}