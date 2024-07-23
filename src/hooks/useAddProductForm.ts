import {ChangeEvent, FormEvent, useState} from "react";
import {ProductsApi} from "@/services/productsApi";

export const useAddProductForm = (onClose: () => void) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [isLoading, setLoading] = useState(false)

    const resetForm = () => {
        setName('')
        setDescription('')
        setPrice('')
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (isLoading) {
            return
        }

        try {
            setLoading(true)

            await ProductsApi.addProduct({ name, description, price: Number(price) })
        } catch (e) {
            console.error('error: ', e)
        } finally {
            onClose()
            resetForm()
            setLoading(false)
        }
    }

    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const onChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value)
    }

    const onChangePrice = (e: ChangeEvent<HTMLInputElement>) => {
        setPrice(e.target.value)
    }

    return {
        isLoading,
        name,
        onChangeName,
        description,
        onChangeDescription,
        price,
        onChangePrice,
        handleSubmit,
    }
}