// global imports
import "../toggleSidebar.js";
import "../cart/toggleCart.js";
import "../cart/setupCart.js";
// specific
import { addToCart } from "../cart/setupCart.js";
import { singleProductUrl, getElement, formatPrice } from "../utils.js";

// selections
const loading = getElement(".page-loading");
const centerDOM = getElement(".single-product-center");
const pageTitleDOM = getElement(".page-hero-title");
const imgDOM = getElement(".single-product-img");
const titleDOM = getElement(".single-product-title");
const companyDOM = getElement(".single-product-company");
const priceDOM = getElement(".single-product-price");
const colorsDOM = getElement(".single-product-colors");
const descDOM = getElement(".single-product-desc");
const cartBtn = getElement(".addToCartBtn");

// cart product
let productID;

// show product when page loads
window.addEventListener("DOMContentLoaded", async () => {
    const singleProductURLID = window.location.search;

    try {
        const response = await fetch(
            singleProductUrl + singleProductURLID
        ).catch((error) => console.log(error));

        if (response.status >= 200 && response.status <= 299) {
            const productData = await response.json();

            // grab data
            const {
                id,
                fields: {
                    company,
                    description,
                    name,
                    price,
                    colors,
                    image: [{ url: image }],
                },
            } = productData;

            // const [{ url: image }] = img;

            productID = id;

            // set values on the DOM
            document.title = `${name.toUpperCase()} | Comfy`;
            pageTitleDOM.textContent = `Home / ${name}`;
            imgDOM.src = image;
            titleDOM.textContent = name;
            companyDOM.textContent = company;
            priceDOM.textContent = formatPrice(price);
            descDOM.textContent = description;

            colors.forEach((color) => {
                const spanElement = document.createElement("span");
                spanElement.classList.add("product-color");
                spanElement.style.backgroundColor = color;
                colorsDOM.appendChild(spanElement);
            });
        } else {
            console.log({
                status: response.status,
                text: response.statusText,
            });
            centerDOM.innerHTML = `
            <div>
                <h3 class="error">Sorry, something went wrong.</h3>
                <a href="./index.html" class="btn">back to home</a>
            </div>
            `;
        }
    } catch (error) {
        console.log(error);
    }

    loading.style.display = "none";
});

cartBtn.addEventListener("click", () => {
    addToCart(productID);
});
