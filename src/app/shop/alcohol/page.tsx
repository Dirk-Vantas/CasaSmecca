"use client"
import { Button } from "@nextui-org/react";
import Card from "../../components/card";
import { authorizeUser } from "@/app/lib/authorizeUser";

export default function Alcohol() {
    return (
        <div className='size-full rounded-lg bg-lime-700 max-w-screen-md text-black p-8 shadow-lg'>
            <div className="grid grid-cols-2 gap-4">
                <Card href="" title="Limoncello" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." price={15} image="/alcohol/IMG_8441.jpg"/>
                {/* {imageItemShop.map((item, index) => (
                <div key={index} className="">
                    <a href={item.href} className="flex items-center">
                        <Image src={item.image} className="size-full" alt="Flowbite Logo" width={240} height={320} />
                    </a>
                </div>
            ))} */}
            </div>
        </div>
    );
}