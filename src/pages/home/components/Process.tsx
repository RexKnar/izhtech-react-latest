import { Accordion } from 'flowbite-react';

export default function Process() {
  return (
    <section className='px-3 '>
      <div className="flex-col gap-4 h-4/5 lg:flex lg:flex-row">
        <div className="lg:w-3/4 sm:w-[75%]">
          <div className="flex flex-col h-full py-5 pl-5">
            <p className="text-xs">PROCESS</p>
            <h1 className="py-2 text-4xl font-bold">
              How we do it?
            </h1>
            <p className="pt-4 pb-4 text-xs ">
              Our app works for businesses of all sizes and shapes.<br />
              <b>Starting at just $5 for an agent.</b>
            </p>
            <button className="w-20 h-6 text-xs font-bold text-black bg-white border border-2 border-black rounded">
              Contact Us
            </button>
          </div>
        </div>
      </div>


      <div className="flex flex-col w-full py-4 md:flex-row lg:flex-row lg:flex-wrap lg:justify-center">

        <div className="flex flex-col md:flex-1 lg:w-1/4">

          <Accordion className="border-none outline-none">
            <Accordion.Panel>
              <Accordion.Title className="text-black ">
                <span className="flex items-center">
                  <img src="/images/process/Vector.png" alt="image" className="w-4 h-4 mr-2" />
                  Client centric requisites
                </span>
              </Accordion.Title>
              <Accordion.Content >
                <p className="text-xs text-black ">
                  We benchmark the requirements by analyzing customers’ needs and put forth practically
                  functional outcomes to make the product scalable.
                </p>
                <button className="w-20 h-6 mt-4 text-xs font-bold text-white bg-black rounded border-1 ">
                  Read More
                </button>

              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="text-black ">
                <span className="flex items-center">
                  <img src="/images/process/Vector.png" alt="image" className="w-4 h-4 mr-2" />
                  Design
                </span>
              </Accordion.Title>
              <Accordion.Content>
                <p className="text-black ">
                  Content
                </p>
                <button className="w-20 h-6 mt-4 text-xs font-bold text-white bg-black rounded border-1">
                  Read More
                </button>

              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="text-black ">
                <span className="flex items-center">
                  <img src="/images/process/Vector.png" alt="image" className="w-4 h-4 mr-2" />
                  What discounts are available?
                </span>
              </Accordion.Title>
              <Accordion.Content>
                <p className="text-black ">
                  Content
                </p>
                <button className="w-20 h-6 mt-4 text-xs font-bold text-white bg-black rounded border-1">
                  Read More
                </button>

              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>


        <div className="flex flex-col md:flex-1 lg:w-1/4">

          <Accordion className="border-none outline-none">
            <Accordion.Panel>
              <Accordion.Title className="text-black ">
                <span className="flex items-center">
                  <img src="/images/process/Vector.png" alt="image" className="w-4 h-4 mr-2" />
                  Screen Mockups are our mid-fidelity
                </span>
              </Accordion.Title>
              <Accordion.Content>
                <p className="text-xs text-black">
                  To envisage the requirements we formulate an exemplar design to foresee the static <br /> upshot of the final product.
                </p>
                <button className="w-20 h-6 mt-4 text-xs font-bold text-white bg-black rounded border-1">
                  Read More
                </button>

              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="text-black ">
                <span className="flex items-center">
                  <img src="/images/process/Vector.png" alt="image" className="w-4 h-4 mr-2" />
                  Development
                </span>
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-black dark:text-black">
                  content
                </p>
                <button className="w-20 h-6 mt-4 text-xs font-bold text-white bg-black rounded border-1">
                  Read More
                </button>

              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="text-black ">
                <span className="flex items-center">
                  <img src="/images/process/Vector.png" alt="image" className="w-4 h-4 mr-2" />
                  How can I cancel my subscription?
                </span>
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-black">
                  content
                </p>
                <button className="w-20 h-6 mt-4 text-xs font-bold text-white bg-black rounded border-1">
                  Read More
                </button>

              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>

        </div>
      </div>

    </section>
  );
}
