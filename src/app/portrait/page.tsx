import Image from "next/image";

export default function Portrait() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-lime-900 justify-between p-24">
            <div className='border-4 border-lime-950 rounded-lg bg-lime-100 max-w-screen-md text-black p-8'>
                <h1 className="text-lg">Porträt</h1>
                <p>
                    Ich begrüsse Sie herzlich bei Casa Smecca.
                    <br />
                </p>
                <div className="content-center">
                    <Image src={"/3.png"} alt="Ich" width={200} height={270} />
                </div>
                <br />
                <p>Unser Motto ist: Die Qualität in der Tradizion.</p>
                <br />
                <div className="flex flex-row gap-4">
                    <div className="flex flex-col gap-2">
                        <a href="/geschichte_klein.jpg" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <Image src={"/geschichte_klein.jpg"} alt="geschichte" width={200} height={270} />
                        </a>
                        <p>Geschichte</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <a href="/riconoscimento.jpg" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <Image src={"/riconoscimento.jpg"} alt="riconoscimento" width={200} height={270} />
                        </a>
                        <p>Urkunde</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <a href="/anerkennungklein.jpg" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <Image src={"/anerkennungklein.jpg"} alt="annerkenung" width={200} height={270} />
                        </a>
                        <p>Anerkennung Ministeriums Arbeit</p>
                    </div>
                </div>
            </div>
        </main>
    );
}