import {IAddProductFormData} from "@/types/IAddProductFormData";

export class ProductsApi {
    static addProduct = async ({name, description, price}: IAddProductFormData) => {
        await fetch('/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, description, price }),
        })
    }
}