//   ATTENTION!!!!!!!!!!!
//   I SWITCHED TO PERMANENT DOMAIN
//   DATA IS THE SAME JUST A DIFFERENT URL,
//   DOES NOT AFFECT PROJECT FUNCTIONALITY

const allProductsUrl = "https://course-api.com/javascript-store-products";
// temporary single product
// 'https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog'
const singleProductUrl =
    "https://course-api.com/javascript-store-single-product";

const getElement = (selection) => {
    const element = document.querySelector(selection);
    if (element) return element;
    throw new Error(
        `Please check "${selection}" selector, no such element exist`
    );
};

const formatPrice = (productPrice) => {
    let formatedPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format((productPrice / 100).toFixed(2));
    return formatedPrice;
};

const getStorageItem = (name) => {
    const storageItem = localStorage.getItem(name);

    if (storageItem) {
        return JSON.parse(storageItem);
    } else {
        return [];
    }
};

const setStorageItem = (name, item) => {
    localStorage.setItem(name, JSON.stringify(item));
};

export {
    allProductsUrl,
    singleProductUrl,
    getElement,
    formatPrice,
    getStorageItem,
    setStorageItem,
};
