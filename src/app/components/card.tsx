import Image from "next/image";
import { productItem } from "../lib/dummyItems";
import { useSession } from "next-auth/react";

export default function Card(props: productItem) {
    const { data: session } = useSession();
    return (
        <div className="bg-lime-100 max-w-sm rounded overflow-hidden shadow-lg">
            <Image src={props.image} alt="company logo" className="" width={400} height={200} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.title}</div>
                {/* <p className="text-black text-base">
                    {props.description}
                </p> */}
                
            </div>
            <div className="px-6 pt-4 pb-2">
                <p className="text-black text-base">
                    {props.price} CHF
                </p>
                {session && session.user ? (
                    <>
                        <a href="#" className="">Produktdetails</a>
                        <button data-tooltip-target="tooltip-default" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" disabled >In den Warenkorb</button>
                        
                        <div id="tooltip-default" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Zuerst Anmelden!
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </>
                ) : (
                    <>
                        
                        <button type="button" className="bg-lime-950 p-2 rounded-lg" >In den Warenkorb</button>
                        <a href="#" className="text-lime-950 hover:underline">Produktdetails</a>
                    </>
                )}
            </div>
        </div>
    );
}