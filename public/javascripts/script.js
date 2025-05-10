// This is for the navigation bar
const navigations = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/contact",
    name: "Contact",
  },
  {
    path: "/services",
    name: "Your Tools",
  },
];
const navList = document.querySelector("#navList");

navigations.forEach((nav) => {
  const li = document.createElement("li");
  li.classList.add("nav-item");
  const a = document.createElement("a");
  a.classList.add("nav-link");
  a.href = nav.path;
  a.innerText = nav.name;
  li.appendChild(a);
  navList.appendChild(li);
});
