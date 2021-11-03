import { getElement } from "../utils.js";

const cartOverlay = getElement(".cart-overlay");
const closeCartButton = getElement(".cart-close");
const toggleCartButton = getElement(".toggle-cart");

toggleCartButton.addEventListener("click", () => {
    cartOverlay.classList.add("show");
});

closeCartButton.addEventListener("click", () => {
    cartOverlay.classList.remove("show");
});

export const openCart = () => {
    cartOverlay.classList.add("show");
};
