import axios from "axios";
import { ISelectedCategoryProducts } from "./interfaces";

const instance = axios.create({
  baseURL: "https://dummyjson.com/products/",
});

export const getCategoryProducts = (selectedCategory: string) => {
  return instance
    .get<ISelectedCategoryProducts>(`category/${selectedCategory}`)
    .then((res) => res.data);
};
