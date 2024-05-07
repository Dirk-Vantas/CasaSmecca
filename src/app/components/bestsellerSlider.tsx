import Image from "next/image";
import { Carousel } from "flowbite-react";

export default function BestsellerSlider() {
    return (
        <div className="rounded-lg border-4 border-lime-950 h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel>
                <Image src={"/home/olio-redoro.png"} className="bg-lime-700" alt="olio redoro" width={116} height={139} />
                <Image src={"/home/redoro-pade.png"} className="bg-lime-700"alt="redoro-pade" width={116} height={139} />
                <Image src={"/home/statua1.png"} className="bg-lime-700" alt="statua" width={116} height={139} />
                <Image src={"/home/olive.png"} className="bg-lime-700" alt="olive" width={116} height={139} />
                <Image src={"/home/geschenkartikel.png"} alt="geschenk" width={116} height={139} />
            </Carousel>
        </div>
    );
}