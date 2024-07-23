import {Box, Button, FormControl, FormLabel, Input, Spinner} from "@chakra-ui/react";
import {useAddProductForm} from "@/hooks/useAddProductForm";
import {Loader} from "@/components/Loader/Loader";

interface IAddProductModalProps {
    onClose: () => void
}

export const AddProductForm = (
    {
        onClose,
    }: IAddProductModalProps
) => {
    const {
        isLoading,
        name,
        onChangeName,
        description,
        onChangeDescription,
        price,
        onChangePrice,
        handleSubmit,
    } = useAddProductForm(onClose)

    return (
        <>
            {isLoading && <Loader />}
            <form onSubmit={handleSubmit}>
                <FormControl isRequired mb={5}>
                    <FormLabel>Name</FormLabel>
                    <Input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={onChangeName}
                    />
                </FormControl>
                <FormControl isRequired mb={5}>
                    <FormLabel>Description</FormLabel>
                    <Input
                        type="text"
                        placeholder="Description"
                        value={description}
                        onChange={onChangeDescription}
                    />
                </FormControl>
                <FormControl isRequired mb={5}>
                    <FormLabel>Price</FormLabel>
                    <Input
                        type="number"
                        placeholder="Price"
                        value={price}
                        onChange={onChangePrice}
                    />
                </FormControl>
                <Button
                    colorScheme="green"
                    type="submit"
                    width="100%"
                    isLoading={isLoading}
                >
                    Add product
                </Button>
            </form>
        </>
    )
}