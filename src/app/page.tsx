import BestsellerSlider from "./components/bestsellerSlider";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-lime-900 justify-between p-24">
      <div className='border-4 border-lime-950 rounded-lg bg-lime-100 max-w-screen-lg text-black p-8'>
        
        <BestsellerSlider />
        <br />
        <br />

        <p>Ich freue mich, Sie auf meiner Homepage begrüssen zu können! Auf den nachfolgenden Seiten erhalten Sie <br />
          einen Einblick in das bereits über 7 Jahre bestehende Casa Smecca. Ich wünsche Ihnen viel Spass auf der Entdeckungsreise durch unsere italienischen Köstlichkeiten und hoffe, dass mein kulinarisches Angebot Sie <br />
          anspricht. Es würde mich freuen, Sie im Casa Smecca demnächst persönlich begrüssen zu dürfen.
        </p>
        <br />
        <h1 className="text-lg bold text-5xl">078 637 84 10</h1>
        <br />
        <p>Öffnungszeiten</p>
        <p>Dienstag - Freitag: 09.30 - 12.00 Uhr & 14.00 - 18.30 Uhr<br />
          Samstag: 10.00 - 16.00 Uhr<br />

          <br />

          Büchelistrasse 9<br />
          CH-4410 Liestal<br />
        </p>
        <br />
        <p>Viel Spass bei Ihrem virtuellen Rundgang durch die Köstlichkeiten des Casa Smecca<br /><br />
        </p>
      </div>
    </main>
  );
}
