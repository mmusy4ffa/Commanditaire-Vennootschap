let gantitema = document.getElementById("theme-toggle");

gantitema.addEventListener("click", () => {
  const themeIcon = document.getElementById("theme-icon");
  themeIcon.classList.toggle("bi-moon-fill");
  themeIcon.classList.toggle("bi-sun-fill");

  let currentTheme = document.body.getAttribute("data-bs-theme");
  let newTheme;

  if (currentTheme === "dark") {
    newTheme = "light";
  } else {
    newTheme = "dark";
  }
  document.body.setAttribute("data-bs-theme", newTheme);
});
