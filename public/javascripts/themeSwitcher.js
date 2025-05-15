// this file is for theme switching from dark to light and vice versa

const moonDiv = document.querySelector(".moon");
const sunDiv = document.querySelector(".sun");

const themeBtns = document.querySelectorAll(".theme-btn");

themeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const theme = localStorage.getItem("theme") === "dark" ? "light" : "dark";

    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      moonDiv.classList.add("hidden");
      sunDiv.classList.remove("hidden");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
      sunDiv.classList.add("hidden");
      moonDiv.classList.remove("hidden");
    }
  });
});
