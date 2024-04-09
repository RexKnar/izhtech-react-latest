import Counter from "../../../shared/animation/Counter";

export default function Counts() {
    return (
        
            <div className="container flex bg-center h-[25rem] justify-end bg-no-repeat bg-[url('/images/Aboutpage/img/counts/bg.png')]">
                <div className="flex items-end justify-center md:justify-end">
                    <div className="grid justify-center p-6 text-white bg-red-600 md:pr-32">
                        <div className="flex items-center ">
                            <img src="images/Aboutpage/img/counts/diamond.png" alt="Example Image" className="w-12 h-10 lg:w-8 lg:h-6" />
                            <h1 className="text-3xl font-bold lg:text-4xl">
                            <Counter value={35} direction="up" />+
                            
                            </h1>
                        </div>
                        <p className="pt-2">
                            designers <br /> and developers
                        </p>
                    </div>
                    <div className="grid justify-center p-6 text-white bg-black md:pr-32">
                        <div className="flex items-center ">
                            <img src="images/Aboutpage/img/counts/square.png" alt="Example Image" className="w-10 h-10" />
                            <h1 className="text-3xl font-bold lg:text-4xl">
                            <Counter value={28} direction="up" />+
                            </h1>
                        </div>
                        <p className="pt-2">
                            awards for digital <br /> innovation
                        </p>
                    </div>
                </div>
            </div>
       
    );
}
