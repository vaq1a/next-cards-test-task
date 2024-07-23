import {AddProductModal} from "@/components/AddProductModal/AddProductModal";
import {Container, Heading} from "@chakra-ui/react";
import Products from "@/components/Products/Products";
import {getProducts} from "@/helpers/getProducts";

export const revalidate = 20

export default function Home() {
    const products = getProducts()

    return (
      <Container maxW='container.xl'>
          <Heading
              as='h1'
              size='2xl'
              noOfLines={1}
              mb={5}
          >
              Products:
          </Heading>
          <AddProductModal />
          <Products products={products} />
      </Container>
  );
}
