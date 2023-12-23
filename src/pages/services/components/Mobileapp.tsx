import { Accordion } from 'flowbite-react';

export default function mobileapp() {
    return (
        <section className="px-6 py-4">
            <div className="flex flex-col items-center gap-4 sm:flex-col md:flex-col lg:flex-row xl:flex-row lg:gap-28">
            <div className="flex bg-transparent sm:w-1/2 md:w-full lg:w-1/2">
                <img src="images/servicepage/img.png" alt="Example Image" className="w-full h-auto" />
            </div>
                <div className="flex flex-col md:flex-1 lg:w-1/4">
                    <p className="pb-2 text-xs">OUR SERVICES</p>
                    <h1 className="pb-2 text-3xl font-bold"> Mobile App.</h1>
                    <p className="pb-6 text-xs">Reduction in operating costs for the whole product team which creates <br />amazing UI/UX experiences, by crafting top-notch user experience of<br /> funny the century rather.</p>
                    <Accordion className="border-none outline-none">
                        <Accordion.Panel>
                            <Accordion.Title className="text-black ">
                                <span className="flex items-center">
                                    <img src="/images/process/Vector.png" alt="image" className="w-4 h-4 mr-2" />
                                    Website & Mobile App Design
                                </span>
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="text-xs text-black">
                                    We have created a full stack structure for our working workflow <br /> processes, were from the funny the century initial all the madness. </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title className="text-black ">
                                <span className="flex items-center">
                                    <img src="/images/process/Vector.png" alt="image" className="w-4 h-4 mr-2" />
                                    Motion Graphics & Animation
                                </span>
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-black dark:text-black">
                                    content
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <button className="h-8 mt-4 text-xs font-bold text-white rounded bg-indigo-950 w-28 border-1">
                            Learn more {"->"}
                        </button>
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
