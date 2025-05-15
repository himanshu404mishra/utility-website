// This is for the navigation bar
const navigations = [
  {
    path: "/",
    name: "Home",
    active: true,
  },
  {
    path: "/about",
    name: "About",
    active: false,
  },
  {
    path: "/contact",
    name: "Contact",
    active: false,
  },
  {
    path: "/services",
    name: "Your Tools",
    active: false,
  },
];
const navList = document.querySelector("#navList");

navigations.forEach((nav) => {
  const li = document.createElement("li");
  li.classList.add("nav-item");
  const a = document.createElement("a");
  a.classList.add("nav-link");
  nav.active ? a.classList.add("active") : null;
  a.href = nav.path;
  a.innerText = nav.name;
  li.appendChild(a);
  navList.appendChild(li);
});
