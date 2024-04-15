import ProductSidenav from "../components/productSidenav";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>         
            <main className="flex min-h-screen flex-col items-center bg-lime-900 justify-between p-24">
                <div className="flex flex-row">
                    <ProductSidenav />
                    {children}
                </div>
            </main>    
        </>
    )
}