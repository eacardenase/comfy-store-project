import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupPrice = (store) => {
    const priceInput = getElement(".price-filter");
    const priceValue = getElement(".price-value");

    // findind max price
    const maxPrice = Math.ceil(
        Math.max(...store.map((product) => product.price)) / 100
    );
    priceInput.max = maxPrice;
    priceInput.value = maxPrice;
    priceInput.min = 0;
    priceValue.textContent = `Value: $${maxPrice}`;

    priceInput.addEventListener("input", function () {
        const priceFilterValue = parseInt(this.value);
        priceValue.textContent = `Value: $${priceFilterValue}`;

        let filteredStore = store.filter(
            (product) => product.price / 100 <= priceFilterValue
        );

        display(filteredStore, getElement(".products-container"));

        if (filteredStore < 1) {
            const products = getElement(".products-container");
            products.innerHTML = `<h3 class="filter-error">sorry, no products matched your search</h3>`;
        }
    });
};

export default setupPrice;
