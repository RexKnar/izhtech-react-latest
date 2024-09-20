import { useGetAllClientsListQuery } from "../../../lib/queries/client/useGetClientListQuery";

export default function Ourclients() {
    const { data: clientsList } = useGetAllClientsListQuery();
    return (
        <div className="py-8 mx-auto md:container ">
            <div className="flex flex-col content-center pt-6 pb-6 text-black sm:flex-col md:flex-col lg:flex-row ">
                <div className="">
                    <p className="text-xs">
                        CLIENTS WE WORK FOR<br />
                    </p>
                    <h1 className="text-5xl font-bold">Our clients.</h1>
                </div>
            </div>
            {clientsList?.map((client) => (
            <div className="flex flex-wrap justify-center gap-8 lg:gap-32">
              

                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
                    <ul className="flex space-x-8">
                        <li>
                            <h1 className="font-bold text-md lg:text-md">{client?.companyName}</h1>
                            <p className="text-md lg:text-xs"><a href="https://www.jpmorgan.com" className="text-black"><div dangerouslySetInnerHTML={{ __html: client?.description }} /></a></p>
                        </li>
                        <li>
                            <h1 className="font-bold text-md lg:text-md">{client?.companyName}</h1>
                            <p className="text-md lg:text-xs"><a href="https://www.bhathaway.com" className="text-black"><div dangerouslySetInnerHTML={{ __html: client?.description }} /></a></p>
                        </li>
                        <li>
                            <h1 className="font-bold text-md lg:text-md">{client?.companyName}</h1>
                            <p className="text-md lg:text-xs"><a href="www.shell.com" className="text-black"><div dangerouslySetInnerHTML={{ __html: client?.description }} /></a></p>
                        </li>
                        <li>
                            <h1 className="font-bold text-md lg:text-md">{client?.companyName}</h1>
                            <p className="text-md lg:text-xs"><a href="www.mastercard.com" className="text-black"><div dangerouslySetInnerHTML={{ __html: client?.description }} /></a></p>
                        </li>
                    </ul>
                </div>
               
                </div>
           ))
}
        </div>
    );
}
