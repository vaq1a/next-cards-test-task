import {IProductCard} from "@/types/IProductCard";
import {getProducts} from "@/helpers/getProducts";

export const findProductById = (id: string) => {
    const products = getProducts()

    return products.find(product => product.id.toString() === id) as IProductCard
}