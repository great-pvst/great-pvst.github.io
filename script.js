const buttons = document.querySelectorAll("[data-popup]");
const closeButtons = document.querySelectorAll("[data-close]");

function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
      popup.style.display = "flex";}}

function closePopups() {
    document.querySelectorAll(".popup").forEach(popup => {
      popup.style.display = "none";});}

buttons.forEach(button => {
    button.addEventListener("click", () => {
    const popupId = button.getAttribute("data-popup");
    openPopup(popupId);  });});

closeButtons.forEach(button => {
    button.addEventListener("click", closePopups);});

window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closePopups();
    }
});