'use client'

import {useDisclosure} from "@chakra-ui/hooks";
import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/react";
import {AddProductForm} from "@/components/AddProductForm/AddProductForm";

export const AddProductModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button onClick={onOpen}>Add new product</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add new product</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <AddProductForm onClose={onClose} />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}