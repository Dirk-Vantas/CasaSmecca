interface linkItem {
  href: string;
  target?: string;
  text: string;
}

export const MainNav: linkItem[] = [
  { 
    href: "/",
    text: "Home"
  },
  {
    href: "/shop",
    text: "Shop",
  },
];

export const MainFooter: linkItem[] = [
  {
    href: "/kontakt",
    text: "Kontakt",
  },
  {
    href: "/geschichte",
    text: "Geschichte",
  },
  {
    href: "/portrait",
    text: "Portrait",
  },
];
