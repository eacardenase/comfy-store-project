import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupSearch = (store) => {
    const form = getElement(".input-form");
    const nameInput = getElement(".search-input");

    form.addEventListener("keyup", () => {
        const inputValue = nameInput.value;

        if (inputValue) {
            const filteredStore = store.filter((product) => {
                let { name } = product;
                name = name.toLowerCase();

                // .startsWith it's replaced with .includes
                if (name.includes(inputValue)) {
                    return product;
                }
            });
            display(filteredStore, getElement(".products-container"));
            if (filteredStore.length < 1) {
                const productsContainer = getElement(".products-container");
                productsContainer.innerHTML = `<h3 class="filter-error">sorry, no products matched your search</h3>`;
            }
        } else {
            display(store, getElement(".products-container"), true);
        }
    });
};

export default setupSearch;
