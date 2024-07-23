import {Grid, GridItem, Text} from "@chakra-ui/react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard/ProductCard";
import {IProductCard} from "@/types/IProductCard";

interface IProductsProps {
    products: IProductCard[]
}

export default function Products(
    {
        products
    }: IProductsProps
) {
    if (!products?.length) {
        return <Text mt={10} fontSize='2xl'>Empty...</Text>
    }

    return (
        <Grid
            templateColumns='repeat(3, 1fr)'
            gap={6}
            mt={10}
        >
            {products.map((product) => (
                <GridItem w='100%' key={product.id}>
                    <Link href={`/${product.id}`}>
                        <ProductCard product={product} />
                    </Link>
                </GridItem>
            ))}
        </Grid>
    )
}