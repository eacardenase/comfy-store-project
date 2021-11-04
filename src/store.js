import { getStorageItem, setStorageItem } from "./utils.js";

let store = getStorageItem("store");

const setupStore = (productsData) => {
    store = productsData.map((product) => {
        const {
            id,
            fields: { featured, name, price, company, colors, image: img },
        } = product;

        // const image = img[0].thumbnails.large.url;

        const [
            {
                thumbnails: {
                    large: { url: image },
                },
            },
        ] = img;

        return {
            id,
            featured,
            name,
            price,
            company,
            colors,
            image,
        };
    });
    setStorageItem("store", store);
};

const findProduct = (id) => {
    const itemProduct = store.find((product) => product.id === id);
    return itemProduct;
};

export { store, setupStore, findProduct };
