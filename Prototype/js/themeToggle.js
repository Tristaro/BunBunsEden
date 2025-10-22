// themeToggle.js

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("toggleTheme");
  const themeLink = document.getElementById("theme-stylesheet");

  // Load saved theme from localStorage
  const savedTheme = localStorage.getItem("theme") || "light";
  themeLink.href = `/css/style-${savedTheme}.css`;
  toggle.checked = savedTheme === "dark";

  // Listen for toggle changes
  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      themeLink.href = "/css/style-dark.css";
      localStorage.setItem("theme", "dark");
    } else {
      themeLink.href = "/css/style-light.css";
      localStorage.setItem("theme", "light");
    }
  });
});
