import { Card } from 'flowbite-react';
import BlogCard from '../../../shared/components/BlogCard';

export default function Cards() {
    return (

        <section className='py-8'>

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
                        <button className="w-32 px-2 py-1 text-sm font-bold text-black bg-white border border-2 border-black rounded">
                            Read all Guides
                        </button>
                    </div>
                </div>

                <div className="flex flex-col h-full mx-auto lg:w-1/4 sm:w-full lg:ml-72">
                    {/* <Card className="max-w-lg bg-gray-100 h-96">
                        <div className="flow-root">
                            <div className="py-3 border-gray-200 sm:py-4 dark:border-gray-700">
                                <div className="flex items-center mb-8 space-x-4">
                                    <div className="flex-shrink-0">
                                        <img
                                            alt="Neil image"
                                            src="/images/cardprofile/Avatar.png"
                                            className="rounded-full h-14 w-14"
                                        />
                                    </div>

                                    <div className="flex-1">
                                        <p className="text-black text-md ">Posted by</p>
                                        <p className="font-bold text-black text-md">Colin Lucido</p>
                                    </div>
                                    <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <line x1="13" y1="18" x2="19" y2="12" />
                                        <line x1="13" y1="6" x2="19" y2="12" />
                                    </svg>

                                    <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <line x1="5" y1="12" x2="11" y2="18" />
                                        <line x1="5" y1="12" x2="11" y2="6" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <p className="mb-2 text-sm font-medium text-black">Sep 26, 2021 · 9 min read</p>
                        <p className="justify-center mb-2 text-base text-xl font-bold text-black">
                            Booktips: eight tips for service design with
                            expert users.          </p>
                        <div className="flex flex-row gap-4">
                            <button className="items-center justify-center h-6 text-black bg-gray-200 rounded-lg w-28">
                                <div>
                                    <div className="text-sm">Case Study</div>
                                </div>
                            </button>
                            <button className="items-center justify-center h-6 text-black bg-gray-200 rounded-lg w-28">
                                <div>
                                    <div className="text-sm">Perspectives</div>
                                </div>
                            </button>
                        </div>
                    </Card> */}
                    <BlogCard />
                </div>
            </div>


            <div className="flex flex-col w-full gap-6 px-4 md:flex-row md:py-6 lg:flex-row lg:flex-wrap lg:justify-center">
                <div className="flex flex-col py-2 border-slate-600 md:flex-1 lg:w-1/4 ">

                    {/* <Card className="max-w-lg bg-gray-100 h-96">
                        <div className="flow-root">
                            <div className="py-3 border-gray-200 sm:py-4 dark:border-gray-700">
                                <div className="flex items-center mb-8 space-x-4">
                                    <div className="flex-shrink-0">
                                        <img
                                            alt="Neil image"
                                            src="/images/cardprofile/Avatar.png"
                                            className="rounded-full h-14 w-14"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-black text-md ">Posted by</p>
                                        <p className="font-bold text-black text-md">Colin Lucido</p>
                                    </div>
                                    <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <line x1="13" y1="18" x2="19" y2="12" />
                                        <line x1="13" y1="6" x2="19" y2="12" />
                                    </svg>

                                    <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <line x1="5" y1="12" x2="11" y2="18" />
                                        <line x1="5" y1="12" x2="11" y2="6" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <p className="mb-2 text-sm font-medium text-black">Sep 26, 2021 · 9 min read</p>
                        <p className="justify-center mb-2 text-base text-xl font-bold text-black">
                        Outdoor Work: a Designer’s Checklist for Every UX Project.        </p>
                        <div className="flex flex-row gap-4">
                            <button className="items-center justify-center h-6 text-black bg-gray-200 rounded-lg w-28">
                                <div>
                                    <div className="text-sm">Case Study</div>
                                </div>
                            </button>
                            <button className="items-center justify-center h-6 text-black bg-gray-200 rounded-lg w-28">
                                <div>
                                    <div className="text-sm">Perspectives</div>
                                </div>
                            </button>
                        </div>
                    </Card> */}
                      <BlogCard />

                </div>

                <div className="flex flex-col py-2 md:flex-1 lg:w-1/4 border-slate-600">

                    {/* <Card className="max-w-lg bg-gray-100 h-96">
                        <div className="flow-root">
                            <div className="py-3 border-gray-200 sm:py-4 dark:border-gray-700">
                                <div className="flex items-center mb-8 space-x-4">
                                    <div className="flex-shrink-0">
                                        <img
                                            alt="Neil image"
                                            src="/images/cardprofile/Avatar.png"
                                            className="rounded-full h-14 w-14"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-black text-md ">Posted by</p>
                                        <p className="font-bold text-black text-md">Colin Lucido</p>
                                    </div>
                                    <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <line x1="13" y1="18" x2="19" y2="12" />
                                        <line x1="13" y1="6" x2="19" y2="12" />
                                    </svg>

                                    <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <line x1="5" y1="12" x2="11" y2="18" />
                                        <line x1="5" y1="12" x2="11" y2="6" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <p className="mb-2 text-sm font-medium text-black">Sep 26, 2021 · 9 min read</p>
                        <p className="justify-center mb-2 text-base text-xl font-bold text-black">
                            Creativo Jóvenes: a Designer’s UI/UX Complete Checklist.        </p>
                        <div className="flex flex-row gap-4">
                            <button className="items-center justify-center h-6 text-black bg-gray-200 rounded-lg w-28">
                                <div>
                                    <div className="text-sm">Case Study</div>
                                </div>
                            </button>
                            <button className="items-center justify-center h-6 text-black bg-gray-200 rounded-lg w-28">
                                <div>
                                    <div className="text-sm">Perspectives</div>
                                </div>
                            </button>
                        </div>
                    </Card> */}
                      <BlogCard />

                </div>

                <div className="flex flex-col py-2 md:flex-1 lg:w-1/4 border-slate-600">

                    <Card className="max-w-lg bg-gray-100 h-96">
                        <div className="flow-root">
                            <div className="py-3 border-gray-200 sm:py-4 dark:border-gray-700">
                                <div className="flex items-center mb-8 space-x-4">
                                    <div className="flex-shrink-0">
                                        <img
                                            alt="Neil image"
                                            src="/images/cardprofile/Avatar.png"
                                            className="rounded-full h-14 w-14"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-black text-md ">Posted by</p>
                                        <p className="font-bold text-black text-md">Colin Lucido</p>
                                    </div>
                                    <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <line x1="13" y1="18" x2="19" y2="12" />
                                        <line x1="13" y1="6" x2="19" y2="12" />
                                    </svg>

                                    <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <line x1="5" y1="12" x2="11" y2="18" />
                                        <line x1="5" y1="12" x2="11" y2="6" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <p className="mb-2 text-sm font-medium text-black">Sep 26, 2021 · 9 min read</p>
                        <p className="justify-center mb-2 text-base text-xl font-bold text-black">
                            Definitive Guide to Make a Daily More Productive Working Flow.        </p>
                        <div className="flex flex-row gap-4">
                            <button className="items-center justify-center h-6 text-black bg-gray-200 rounded-lg w-28">
                                <div>
                                    <div className="text-sm">Case Study</div>
                                </div>
                            </button>
                            <button className="items-center justify-center h-6 text-black bg-gray-200 rounded-lg w-28">
                                <div>
                                    <div className="text-sm">Perspectives</div>
                                </div>
                            </button>
                        </div>
                    </Card>

                </div>

            </div>
        </section>
    );
}
