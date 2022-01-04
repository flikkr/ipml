const NavItems = [
  {
    label: "About",
    redirect: "/about",
    items: [
      {
        label: "Who Are We?",
        redirect: "/who-are-we",
      },
      {
        label: "Dr Ivan Polunin",
        redirect: "/who-are-we",
        target: "#who-is-ip",
      },
    ],
  },
  {
    label: "Projects",
    redirect: "/projects",
    items: [
      {
        label: "The Book",
        redirect: "/book",
      },
    ],
  },
  {
    label: "Contact",
    redirect: "/contact",
  },
  {
    label: "Media",
    redirect: "/media",
  },
];

export default NavItems;
