import {Container, Heading, Text} from "@chakra-ui/react";
import {findProductById} from "@/helpers/findProductById";

interface IProductPageParams {
    params: {
        id: string
    }
}

export default function ProductPage(
    {
        params
    }: IProductPageParams,
) {
    const product = findProductById(params.id)

    return (
        <Container maxW='container.xl'>
            <Heading
                as='h1'
                size='2xl'
                noOfLines={1}
                mb={5}
            >
                Name: {product.name}
            </Heading>
            <Text fontSize='2xl'>Description: {product.description}</Text>
            <Text fontSize='1xl'>Price: {product.price} $</Text>
        </Container>
    );
}

