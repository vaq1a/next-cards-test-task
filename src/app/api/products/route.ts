import fs from 'fs'
import path from 'path'
import {getProducts} from "../../../helpers/getProducts";
import {IProductCard} from "../../../types/IProductCard";
import {NextResponse} from "next/server";
import {IAddProductFormData} from "@/types/IAddProductFormData";

export async function POST(req: Request) {
    const body = (await req.json()) as IAddProductFormData;

    const filePath = path.join(process.cwd(), 'data', 'products.json')
    const products = getProducts()

    if (req.method === 'POST') {
        const newProduct: IProductCard = {
            id: products.length + 1,
            ...body,
        }
        products.push(newProduct)
        fs.writeFileSync(filePath, JSON.stringify(products, null, 2))
        return NextResponse.json(newProduct)
    } else {
        return NextResponse.json(products)
    }
}