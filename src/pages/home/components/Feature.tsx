export default function feature() {
    return (
        <section className="grid w-full bg-sky-100">
            <div className="flex flex-col w-full py-8 md:flex-row md:py-24 lg:flex-row lg:flex-wrap lg:justify-center">
                <div className="flex flex-col items-center py-2 md:flex-1 lg:w-1/4">
                    <img src="/images/feature/branding.png" alt="Image" className="w-auto h-8 mb-2" />
                    <h2 className="pt-2 text-sm font-bold">Branding</h2>
                    <p className="pt-2 text-xs">Creating a higher spacing and how<br />people move through a unique.</p>
                </div>
                <div className="flex flex-col items-center py-2 md:flex-1 lg:w-1/4">
                    <img src="/images/feature/webapp.png" alt="Image" className="w-auto h-8 mb-2" />
                    <h2 className="pt-2 text-sm font-bold">Digital Marketing</h2>
                    <p className="pt-2 text-xs">Creating a higher spacing and how<br />people move through a unique.</p>
                </div>
                <div className="flex flex-col items-center py-2 md:flex-1 lg:w-1/4">
                    <img src="/images/feature/mobileapp.png" alt="Image" className="w-auto h-8 mb-2" />
                    <h2 className="pt-2 text-sm font-bold">Mobile App</h2>
                    <p className="pt-2 text-xs">Creating a higher spacing and how<br />people move through a unique.</p>
                </div>
                <div className="flex flex-col items-center py-2 md:flex-1 lg:w-1/4">
                    <img src="/images/feature/digitalmarketing.png" alt="Image" className="w-auto h-8 mb-2" />
                    <h2 className="pt-2 text-sm font-bold">Web App</h2>
                    <p className="pt-2 text-xs">Creating a higher spacing and how<br />people move through a unique.</p>
                </div>
            </div>
        </section>
    );
}