"use client"
import Card from "../../components/card";
import { alcoholItemShop } from "@/app/lib/dummyItems";

export default function Alcohol() {
    return (
        <div className='size-full rounded-lg bg-lime-700 max-w-screen-md text-black p-8 shadow-lg'>
            <div className="grid grid-cols-2 gap-4">
                {alcoholItemShop.map((item, index) => (
                    <div key={index}>
                        <Card href={item.href} title={item.title} description={item.description} price={item.price} image={item.image} />
                    </div>
                ))}
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