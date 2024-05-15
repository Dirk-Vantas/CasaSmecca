export default function AlcoholDetails({ 
        params,
    }: {
        params: {alcoholId : string}}) {
    return (
        <>
        <h1>{params.alcoholId}</h1>
        </>
    );
}