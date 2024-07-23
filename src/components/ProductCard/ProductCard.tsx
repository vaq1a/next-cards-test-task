import {Card, CardBody} from "@chakra-ui/card";
import {Heading, Stack, Text, Image} from "@chakra-ui/react";
import {IProductCard} from "@/types/IProductCard";

interface IProductCardProps {
    product: IProductCard
}

export default function ProductCard(
    {
        product: {
            name,
            description,
            price
        },
    }: IProductCardProps
) {
    return (
        <Card maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <CardBody>
                <Stack spacing='3'>
                    <Heading size='md'>{ name }</Heading>
                    <Text>
                        { description }
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        ${price}
                    </Text>
                </Stack>
            </CardBody>
        </Card>
    );
}
