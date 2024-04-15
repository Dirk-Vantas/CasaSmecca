import React from 'react';
import { MainFooter } from "../lib/navbarLinks";
import Image from "next/image"

export default function Footer() {
    return (
        // <footer
        //     classNameName="bg-lime-100 text-center dark:bg-neutral-700 lg:text-left">
        //     <div classNameName="p-4 text-center text-lime-950 dark:text-neutral-200">
        //         © 2024 Copyright:
        //         <a
        //             classNameName="text-lime-950 dark:text-neutral-400"
        //             href="https://tw-elements.com/"
        //         > Casa Scmecca</a>
        //     </div>
        // </footer>


        <footer className="bg-lime-700 shadow dark:bg-gray-900">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="/home" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <div className='bg-lime-100 rounded-full p-2'>
                            <Image src={"/image2.png"} className="h-16" alt="Flowbite Logo" width={151} height={63} />
                        </div>
                        {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        {MainFooter.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} className="hover:underline me-4 text-lime-950 md:me-6">{item.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <hr className="my-6 border-lime-950 text-lime-950 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-lime-950 sm:text-center dark:text-gray-400">© 2024 by Casa Smecca | aller Rechte vorbehalten | Tel. 078 637 84 10 | E-Mail</span>
            </div>
        </footer>
    );
}