import { CSSProperties } from "vue";

export interface ISelectedCategoryProducts {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface INavBarItem {
  label: string;
  icon: string;
  separator: boolean;
  hasChildren?: boolean;
  path?: string;
}

export interface IHorizontalInput {
  inputStyles: CSSProperties;
  buttonStyles: CSSProperties;
  buttonText: string;
  placeHolder: string;
}
