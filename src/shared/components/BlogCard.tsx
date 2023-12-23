import { Card } from "flowbite-react";

export default function BlogCard()
{
    return (
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
</Card>)
}