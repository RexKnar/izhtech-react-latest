import { Progress } from 'flowbite-react';

export default function Blogdetail() {
    return (
        <section className="py-4 bg-transparent">
            <div className="flex-col justify-center gap-4 px-5 my-auto h-4/5 lg:flex lg:flex-row">
                <div className=" lg:w-full sm:w-[75%] sm:px-11 mx-auto">
                    <div className="flex flex-col justify-end h-full pb-5 ">
                        <p className="pt-4 text-xs">
                            UI/UX, Strategy • 12 min read </p>
                        <h1 className="pt-2 font-bold text-md lg:w-3/4 2xl:text-5xl lg:text-4xl md:text-4xl sm:text-4xl">
                            Explore our new series <br /> on overcoming creative<br /> adversity.</h1>
                        <p className="pt-4 pb-4 text-xs">
                            Crafting the perfect palette with Material Design and Figma</p>

                        <div className="flow-root">
                            <div className="py-3 border-gray-200 sm:py-4 dark:border-gray-700">
                                <div className="flex items-center mb-8 space-x-4">
                                    <div className="flex-shrink-0">
                                        <img
                                            alt="Neil image"
                                            src="/images/cardprofile/Avatar.png"
                                            className="w-12 h-12 rounded-full"
                                        />
                                    </div>
                                    <div className="flex sm:flex-col md:flex-col">
                                        <div className="flex gap-4">
                                            <div className="">
                                                <p className="text-sm text-black sm:text-xs md:text-xs">Posted by</p>
                                                <p className="text-sm font-medium text-black sm:text-xs md:text-xs">Colin Lucido</p>
                                            </div>
                                            <div className="flex-2 sm:flex-1 md:flex-2">
                                                <p className="text-sm text-black sm:text-xs md:text-xs">Published</p>
                                                <p className="text-sm font-medium text-black sm:text-xs md:text-xs">May 03, 2021</p>
                                            </div>
                                            <div className="flex-4">
                                                <p className="text-sm text-black sm:text-xs md:text-xs">25 comments</p>
                                                <p className="text-sm font-medium text-black sm:text-xs md:text-xs">Join the Conversation</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="flex bg-center h-[35rem] w-full bg-[url('images/Aboutpage/img/counts/BLOG.png')]">
                <div className="container flex items-end justify-center md:justify-end"></div>
            </div>


            <div className='px-12 pt-6'>
                <p className="text-sm ">A cookie is a small text file stored via your browser onto your computer or mobile device.
                    Each cookie is unique to your browser and can be used by a website to improve the user experience, such as your
                    user preferences or the contents of your basket.</p>

                <p className="pt-3 text-sm">The example below makes CSS remove underline from link by adding text-decoration:none;. We set text-decoration values for each of the link states with CSS: only active and hover states have<br /> underlines:</p>

                <h2 className="pt-6 text-2xl font-bold">June design conferences</h2>
                <p className="pt-3 pb-3 text-sm">Happy to announce that we received a number of Gold, Silver and Bronze Clios for our work on Isle of Dogs, The Killing of a Sacred Deer,
                    The Death of Stalin, and It. It was an exciting night, hosted by Carlton from Fresh Prince (yes he did the dance), and
                    the team celebrated and danced all night. We are so proud of this honor and are looking forward to what’s next.</p>

                <p className='text-sm'>There are 4 link states: a:active, a:hover, a:visited, and a:link.<br />
                    To avoid behavior overlapping, these states should go in the following order:
                    a:hover should go after a:link and a:visited.<br />
                    a:active should go after a:hover.<br />
                    To style link, many CSS styling properties can be applied (e.g. CSS backgrounds, CSS color, CSS font-family, CSS text decoration, etc.).</p>

                <div className="pt-4 text-xs font-bold dark:text-white">Structured Media Insights</div>
                <div className="pt-2"><Progress progress={45} size="sm" className="bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 h-1.5 rounded-full w-[93%] relative" /></div>

                <h2 className="pt-6 text-2xl font-bold">February design conferences </h2>
                <p className="pt-3 pb-3 text-sm">While you may not be jet-setting to meet with fellow designers, that doesn’t mean you won’t explore or form meaningful
                    connections in 2021. Unlike last year’s on-the-fly iterations, the digital formats this year intentionally build community
                    and increase inclusivity. For example, many conferences are integrating interactive elements—including
                    live Q&A sessions and roundtables and chatrooms for mingling—as well as end-of-day extras, like post-conference Zoom yoga sessions. </p>
            </div>

            <div className="flex flex-col px-12 pt-4 md:flex-row">
                <div className="flex gap-4 ">
                    <div className="pb-2">
                        <p className="text-sm text-black">Tagged with:</p>
                    </div>
                    <div className="flex-2">
                        <button className="w-20 h-6 text-xs rounded text-slate-950 bg-slate-300 border-1">
                            Case Study
                        </button>
                    </div>
                    <div className="pr-4 flex-2">
                        <button className="w-20 h-6 text-xs rounded text-slate-950 bg-slate-300 border-1">
                            Marketing
                        </button>
                    </div>
                </div>
                <div className="flex gap-4 md:flex-1">
                    <div className="pl-16 lg:pl-1">
                        <button className="w-20 h-6 text-xs rounded text-slate-950 bg-slate-300 border-1">
                            Perspectives
                        </button>
                    </div>
                    <div className=" flex-2">
                        <button className="w-20 h-6 text-xs rounded text-slate-950 bg-slate-300 border-1">
                            Inspirations
                        </button>
                    </div>
                </div>
            </div>


            <div className='px-1 py-10 lg:px-12'>
                <div className=" bg-slate-100">
                    <div className="py-3 border-gray-200 sm:py-4 dark:border-gray-700">
                        <div className="flex items-center px-6 mb-8 space-x-4">
                            <div className="flex-shrink-0">
                                <img
                                    alt="Neil image"
                                    src="/images/cardprofile/Avatar.png"
                                    className="w-12 h-12 rounded-full"
                                />
                            </div>
                            <div>
                                <div>
                                    <p className="text-sm font-medium text-black">Colin Lucido</p>
                                    <p className='pt-1 text-sm'>UI Designer · Interactive Media</p>
                                    <p className='pt-1 text-sm '>Digital content wrangler | UX enthusiast | Recovering educator | Shameless nerd & GIF connoisseur | Hockey fan | Oxford comma or death.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section>

    );
}
