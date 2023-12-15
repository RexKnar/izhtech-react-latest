export default function Banner() {
    return (
        <section className="flex flex-col gap-10 px-4 py-3 sm:flex-col md:flex-col lg:flex-row xl:flex-row">
            <div className="flex bg-transparent sm:w-1/2 md:w-full lg:w-full">
                <img src="images/Aboutuspage/banner/Image.png" alt="Example Image" className="w-full h-auto" />
            </div>
            <div className="w-full lg:pt-12 sm:w-full md:w-1/2 lg:w-1/2 sm:pt-2 md:pt-2">
                <h1 className="pb-4 text-2xl font-bold">Strategy & <br /> Art Direction.</h1>
                <p className="sm:text-xs lg:text-sm md:text-sm">
                    <b>Established stages</b> which reader, taken <br /> possession of my entire soul, like these <br /> sweet mornings of spring of enjoying <br />with the theory of ethics.
                </p>
                <p className="pt-5 lg:text-sm md:text-sm sm:text-xs">Praesent commodo cursus magna, vel<br /> scelerisque nisl venenatis dapibus<br /> posuere velit aliquet.</p>
            </div>
            <div className="w-full lg:pt-12 sm:w-full md:w-1/2 lg:w-1/2 sm:pt-2 md:pt-2">
                <h1 className="pb-4 text-2xl font-bold">Website <br /> UX/UI Design.</h1>
                <p className="sm:text-xs md:text-sm lg:text-sm xl:text-sm">
                    Each time when our clients want to <br /> porta sem malesuada magna mollis<br /> euismod. <b>Praesent commodo cursus<br /> for the scelerisque.</b>
                </p>
                <p className="pt-5 lg:text-sm sm:text-xs">Scelerisque nisl consectetur of your<br /> posuere erat a ante venenatis.</p>
            </div>
        </section>
    );
}