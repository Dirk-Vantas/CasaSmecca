interface linkItem {
  href: string;
  target?: string;
  text: string;
}

export const MainNav: linkItem[] = [
  {
    href: "/shop",
    text: "Shop",
  },
  { href: "/", text: "Home" },
  {
    href: "/cart",
    text: "Cart",
  },
  {
    href: "/gift",
    text: "Gift",
  },
  {
    href: "/catering",
    text: "Catering",
  },
];

export const MainFooter: linkItem[] = [
  {
    href: "/news",
    text: "News",
  },
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
