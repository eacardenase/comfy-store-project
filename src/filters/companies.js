import { getElement } from "../utils.js";
import display from "../displayProducts.js";
import { store } from "../store.js";

const setupCompanies = (stores) => {
    const companies = [
        "all",
        ...new Set(stores.map((product) => product.company)),
    ];
    const companiesContainer = getElement(".companies");
    // setting the companies ordered
    companiesContainer.innerHTML = companies
        .sort()
        .map((company) => {
            return `
        <button class="company-btn">${company}</button>
        `;
        })
        .join("");

    companiesContainer.addEventListener("click", (event) => {
        const element = event.target;

        if (element.classList.contains("company-btn")) {
            let filteredStore = [];
            if (element.textContent === "all") {
                filteredStore = [...store];
            } else {
                filteredStore = stores.filter(
                    (product) => product.company === element.textContent
                );
            }
            display(filteredStore, getElement(".products-container"), true);
        }
    });
};

export default setupCompanies;
