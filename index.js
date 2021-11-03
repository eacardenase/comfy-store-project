// global imports
import "./src/toggleSidebar.js";
import "./src/cart/toggleCart.js";
import "./src/cart/setupCart.js";
// specific imports
import fetchProducts from "./src/fetchProducts.js";
import { setupStore, store } from "./src/store.js";
import display from "./src/displayProducts.js";
import { getElement } from "./src/utils.js";

const init = async () => {
    const productsData = await fetchProducts();
    if (productsData) {
        // add products to the store
        setupStore(productsData);
        const featured = store.filter((product) => product.featured === true);
        console.log(featured);
    }
};

window.addEventListener("DOMContentLoaded", init);
