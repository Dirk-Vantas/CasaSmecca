"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import { MainNav } from "../lib/navbarLinks";
import { useSession, signOut } from "next-auth/react";


export default function MainNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { data: session } = useSession();
  return (
    <Navbar className="bg-lime-950" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image src={"/header/image.png"} alt="company logo" width={151} height={64} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {MainNav.map((item, index) => (
          <NavbarItem key={index}>
            <Link className="text-lime-100" href={item.href}>{item.text}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        {session && session.user ? (
          // <div className="flex flex-row gap-2">
          <>
            <NavbarItem>
              <Link className="hidden lg:flex text-lime-100" href="/cart">Cart</Link>
            </NavbarItem>
            <NavbarItem>
              <p className="text-lime-100">Hello {session.user.name}!</p>
            </NavbarItem>
            <NavbarItem>
              <button className="bg-lime-700 hover:bg-lime-100 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => signOut()} type="button" >
                Sign Out
              </button>
            </NavbarItem>
            </>
          // </div>
        ) : (
          // <div className="flex flex-row gap-4">
          <>
            <NavbarItem>
              <Link className="hidden lg:flex text-lime-100" href="/auth/signin">Login</Link>
            </NavbarItem>
          </>
          // </div>
          
        )}
      </NavbarContent>
      <NavbarMenu>
        {MainNav.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" href={item.href} size="lg">
              {item.text}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
