import "./styles.css";

const root = document.documentElement;
const key = "herr-systems-retro-theme";
const toggle = document.querySelector("[data-theme-toggle]");
function paint(theme) {
  root.dataset.theme = theme;
  const dark = theme === "dark";
  toggle?.setAttribute("aria-pressed", String(dark));
  toggle?.setAttribute(
    "aria-label",
    dark
      ? "Dark mode active — switch to light mode"
      : "Light mode active — switch to dark mode",
  );
  if (toggle)
    toggle.innerHTML = `<span aria-hidden="true">${dark ? "☀" : "☾"}</span>`;
}
paint(localStorage.getItem(key) || "dark");
toggle?.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem(key, next);
  paint(next);
});
