"use client";

import { Sidebar } from "flowbite-react";


export default function ProductSidenav() {
    return (
        <Sidebar className="bg-lime-100 rounded" aria-label="Default sidebar example">
            <Sidebar.Items className="bg-lime-100">
                <Sidebar.ItemGroup className="bg-lime-100">
                    <Sidebar.Item href="/shop/food">
                        Esswaren
                    </Sidebar.Item>
                    <Sidebar.Item href="/shop/gift">
                        Geschenk
                    </Sidebar.Item>
                    <Sidebar.Item href="/shop/catering">
                        Catering
                    </Sidebar.Item>
                    <Sidebar.Item href="/shop/alcohol">
                        Alkohol
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>

    );
}