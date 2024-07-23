import {IProductCard} from "@/types/IProductCard";

export interface IAddProductFormData extends Omit<IProductCard, "id"> {}
