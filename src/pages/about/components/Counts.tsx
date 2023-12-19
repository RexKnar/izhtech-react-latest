export default function Counts() {
    return (
        <section>
            <div className="flex bg-center h-[25rem] bg-no-repeat bg-[url('images/Aboutpage/img/counts/bg.png')]">
                <div className="container flex items-end justify-center md:justify-end">
                    <div className="grid justify-center p-6 text-white bg-red-600  md:pr-32">
                        <div className="flex items-center ">
                            <img src="images/Aboutpage/img/counts/diamond.png" alt="Example Image" className="lg:w-8 w-12  lg:h-6 h-10" />
                            <h1 className="text-3xl font-bold lg:text-4xl">35+</h1>
                        </div>
                        <p className="pt-2">
                            designers <br /> and developers
                        </p>
                    </div>
                    <div className="grid justify-center p-6 text-white bg-black  md:pr-32">
                        <div className="flex items-center ">
                            <img src="images/Aboutpage/img/counts/square.png" alt="Example Image" className="w-10 h-10" />
                            <h1 className="text-3xl font-bold lg:text-4xl">28+</h1>
                        </div>
                        <p className="pt-2">
                            awards for digital <br /> innovation
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
