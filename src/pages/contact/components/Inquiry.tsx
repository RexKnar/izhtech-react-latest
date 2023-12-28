export default function Inquiry() {
  return (
    <><section className="container">
      <div className="flex flex-col lg:flex-row md:flex-row py-4 p-4 lg:px-8 md:gap-1 xl:gap-6">
        <div className=" lg:w-3/12 md:w-4/12">
          <h2 className="font-bold mb-3">Our Offices</h2>
          <p>Schedule your visit with us</p>
        </div>
        <div className="">
          <h2 className="font-bold mb-3">Singapore</h2>
          <p>
            Flora drive, Singapore
            <br />
            506889
          </p>
          <p className="font-bold mb-5">Call us: +65 89269693</p>
          <p>Monday-Friday</p>
        </div>
      </div>
    </section>
    <section>
        <div className="flex-none py-4 p-4 lg:px-8 md:px-4 lg:flex xl:gap-6 ">
          <div className="lg:w-4/12">
            <h2 className="font-bold">Work inquiries</h2>
            <p>
              Fill in this form or{" "}
              <span className="font-bold">send us an e-mail</span> with your
              inquiry.
            </p>
          </div>
          <div className="grid w-full gap-2 lg:grid-cols-3 md:grid-cols-3 lg:pl-1">
            <div>
              <div className="mb-5">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Label (required)
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone (optional)
                </label>
                <input
                  type="text"
                  id="base-input"
                  placeholder="Your actual number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              </div>
            </div>
            <div>
              <div className="mb-5">
                <label
                  htmlFor="base-input"
                  placeholder="Your Company Name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Company (optional)
                </label>
                <input
                  type="text"
                  id="base-input"
                  placeholder="Your Company Name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Subject (optional)
                </label>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Choose a Subject</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
            </div>
            <div>
              <div className="mb-5">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email (required)
                </label>
                <input
                  type="text"
                  id="base-input"
                  placeholder="Your e-mail"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Choose a Budget (USD)
                </label>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Less than 5K</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
            </div>
            <div className="mb-5 lg:col-span-3 md:col-span-3">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Message (required)
              </label>
              <textarea
                id="message"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Brief project details"
              ></textarea>
              <div className="flex items-center mt-2 mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 text-sm text-gray-900 dark:text-gray-300"
                >
                  I’m okay with getting emails and having that activity tracked to
                  improve my experience.
                </label>
              </div>
            </div>
          </div>
        </div>
      </section></>
  );
}
