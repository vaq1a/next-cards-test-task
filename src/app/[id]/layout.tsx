import {ReactNode} from "react";
import {getProducts} from "@/helpers/getProducts";
import {findProductById} from "@/helpers/findProductById";

interface IProductLayout {
    children: ReactNode;
}

interface IGenerateMetadataParams {
    params: {
        id: string
    }
}

export async function generateMetadata({ params }: IGenerateMetadataParams) {
    const product = findProductById(params.id)

    return {
        title: product.name,
        description: product.description,
    }
}

export const revalidate = 20

export default function ProductLayout(
    {
        children,
    }: Readonly<IProductLayout>
) {
    return (
        <div>
            {children}
        </div>
    );
}

export async function generateStaticParams() {
    const products = getProducts()

    return products.map((product) => ({
        id: product.id.toString()
    })) ?? []
}
