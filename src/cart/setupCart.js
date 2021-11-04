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
        const productCartAmount = increaseAmount(id);
        const items = [...cartItemsDOM.querySelectorAll(".cart-item-amount")];

        const newAmount = items.find((item) => item.dataset.id === id);

        newAmount.textContent = productCartAmount;
    }

    // add +1 to the item account
    displayCartItemCount();
    // calculate and display the total price of the car
    displayCartTotalPrice();
    // set car in local storage
    setStorageItem("cart", cartData);
    openCart();
};

function displayCartItemCount() {
    const amount = cartData.reduce((total, cartItem) => {
        return (total += cartItem.amount);
    }, 0);
    cartItemCountDOM.textContent = amount;
}

function displayCartTotalPrice() {
    const totalPrice = cartData.reduce((total, cartItem) => {
        return (total += cartItem.price * cartItem.amount);
    }, 0);
    cartTotalDOM.textContent = `Total: ${formatPrice(totalPrice)}`;
}

function setupCartFunctionality() {}

function displayCartItemsDOM() {
    cartData.forEach((cardProduct) => addToCartDOM(cardProduct));
}

function increaseAmount(id) {
    let newAmount;
    const cart = cartData.map((cartItem) => {
        if (cartItem.id === id) {
            cartItem.amount++;
            newAmount = cartItem.amount;
        }
        return cartItem;
    });
    return newAmount;
}

const init = () => {
    // display amount of cart items
    displayCartItemCount();
    // display the total price of cart
    displayCartTotalPrice();
    // add all cart items to the DOM
    displayCartItemsDOM();
    // setup cart functionality
    setupCartFunctionality();
};

init();
