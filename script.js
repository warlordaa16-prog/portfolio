document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector(".site-footer p");
  if (footer) {
    footer.textContent = `Designed and built by Arnible Marcus · ${new Date().getFullYear()}.`;
  }
});
