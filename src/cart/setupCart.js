// import
import {
    getStorageItem,
    setStorageItem,
    formatPrice,
    getElement,
} from "../utils.js";
import { openCart } from "./toggleCart.js";
import { findProduct } from "../store.js";
import addToCartDOM from "./addToCartDOM.js";
// set items

const cartItemCountDOM = getElement(".cart-item-count");
const cartItemsDOM = getElement(".cart-items");
const cartTotalDOM = getElement(".cart-total");

let cartData = getStorageItem("cart");

export const addToCart = (id) => {
    let item = cartData.find((cartItem) => cartItem.id === id);

    if (!item) {
        const product = findProduct(id);
        // adding product to the cart
        product.amount = 1;
        cartData.push(product);
        // adding product to the DOM
        addToCartDOM(product);
    } else {
        // update values
        console.log(cartData);
    }

    // waiting...
    openCart();
};

const init = () => {
    console.log(cartData);
};

init();
