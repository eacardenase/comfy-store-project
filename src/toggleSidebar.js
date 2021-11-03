import { getElement } from "./utils.js";

const toggleNavbar = getElement(".toggle-nav");
const sidebarOverlay = getElement(".sidebar-overlay");
const closeButton = getElement(".sidebar-close");

// Events
toggleNavbar.addEventListener("click", () => {
    sidebarOverlay.classList.add("show");
});

closeButton.addEventListener("click", () => {
    sidebarOverlay.classList.remove("show");
});
