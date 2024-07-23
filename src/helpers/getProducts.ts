import path from "node:path";
import fs from "node:fs";
import {IProductCard} from "@/types/IProductCard";

export const getProducts = () => {
    const filePath = path.join(process.cwd(), 'data', 'products.json')
    const jsonData = fs.readFileSync(filePath, 'utf-8')

    return (JSON.parse(jsonData) ?? []) as IProductCard[]
}
