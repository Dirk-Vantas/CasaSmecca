"use client"
import Image from "next/image";

export default function Kontakt() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-lime-900 justify-between p-24">
            <div className='border-4 border-lime-950 rounded-lg bg-lime-100 max-w-screen-md text-black'>
                <div className="flex flex-row">
                    <Image src={"/FOTOSALVO.jpg"} className="rounded-lg " alt="Flowbite Logo" width={400} height={480} />
                    <div className="p-4">
                        <h1 className="text-lg">Kontakt</h1>
                        <br />
                        <p>Wenn Sie zusätzliche Auskünfte erhalten möchten, nehmen Sie mit mir Kontakt auf.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}