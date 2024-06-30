"use client"
import Image from "next/image";

export default function Kontakt() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-lime-900 justify-between p-24">
            <div className='rounded-lg max-w-screen-lg text-black'>
                <div className="flex flex-row gap-16">
                    <div className="rounded-lg border-4 border-lime-950">
                        <Image src={"/kontakt/FOTOSALVO.jpg"} className="rounded-lg min-w-96" alt="SALVO" width={1600} height={1920} />
                    </div>
                    <div className="min-w-96 rounded-lg p-4 bg-lime-100 border-4 border-lime-950">
                        <h1 className="text-lg">Kontakt</h1>
                        <br />
                        <p>Wenn Sie zusätzliche Auskünfte erhalten möchten, nehmen Sie mit mir Kontakt auf.</p>
                        <br />
                        <h4>CH-4410 Liestal<br />
                            Büchelistrasse 9 <br />

                            <br />
                            Telefon/Fax: 061 921 23 20<br />
                            Mobile: 078 637 84 10   <br />

                            <br />
                            E-mail:&nbsp; <a href="mailto:salvo@casasmecca.ch">salvo@casasmecca.ch</a><br />
                            E-mail:&nbsp; <a href="mailto:s.smecca@sunrise.ch">s.smecca@bluewin.ch</a><br />
                            <br />
                            <div className="flex flex-col items-center">
                                <Image src={"/kontakt/Turm.jpg"} className="rounded-lg" alt="stedtli turm" width={191} height={300} />                                
                            </div>
                        </h4>
                    </div>
                </div>
                <br/>
                <div className="rounded-lg border-4 border-lime-950">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.333642753042!2d7.733380276328023!3d47.483413371178834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4791ca69d9c0adfd%3A0x34a3d4f7e1011201!2sB%C3%BCchelistrasse%209%2C%204410%20Liestal!5e0!3m2!1sde!2sch!4v1712439120337!5m2!1sde!2sch" className="w-full rounded-lg" height="300" allowFullScreen></iframe>
                </div>
            </div>
        </main>
    );
}