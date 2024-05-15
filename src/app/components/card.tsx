import Image from "next/image";
import { productItem } from "../lib/dummyItems";
import { useSession } from "next-auth/react";

export default function Card(props: productItem) {
    const { data: session } = useSession();
    return (
        <div className="bg-lime-100 max-w-sm rounded overflow-hidden shadow-lg pb-2">
            <Image src={props.image} alt="company logo" className="" width={400} height={200} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.title}</div>
                {/* <p className="text-black text-base">
                    {props.description}
                </p> */}
                <a href="#" className="text-lime-950 hover:underline">Produktdetails</a>
            </div>
            <div className="px-6 pb-2">

                <p className="text-black text-base">
                    {props.price} CHF
                </p>
                {session && session.user ? (
                    <>
                        <button data-tooltip-target="tooltip-default" type="button" className="bg-lime-950 p-2 rounded-lg">In den Warenkorb</button>

                        <div id="tooltip-default" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Zuerst Anmelden!
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="group flex relative">
                            <button type="button" className="bg-lime-950 p-2 rounded-lg" disabled>In den Warenkorb</button>
                            <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/4-translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">Zuerst Anmelden!</span>
                        </div>

                    </>
                )}
            </div>
        </div>
    );
}