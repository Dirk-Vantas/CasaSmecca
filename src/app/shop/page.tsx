import Image from "next/image";

export default function Shop() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-lime-900 justify-between p-24">
            <div className='border-4 border-lime-950 rounded-lg bg-lime-100 max-w-screen-md text-black p-8'>
                <div className="grid grid-cols-2 gap-4">
                    
                    <div className="">01</div>
                    <div className="">02</div>
                    <div className="">03</div>
                    <div className="">04</div>
                </div>
            </div>
        </main>
    );
}