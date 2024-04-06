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
  { 
    href: "/",
    text: "Home"
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
