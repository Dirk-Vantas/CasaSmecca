"use client"
import { Button } from "@nextui-org/react";
import Card from "../../components/card";
import { authorizeUser } from "@/app/lib/authorizeUser";

export default function Alcohol() {
    const hansleClick = () =>{
        authorizeUser();
    }
    return (
        <div className='border-4 border-lime-950 size-full rounded-lg bg-lime-100 max-w-screen-md text-black p-8'>
            <div className="grid grid-cols-2 gap-4">
<Button onPress={hansleClick}>Button</Button>
                <Card />
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