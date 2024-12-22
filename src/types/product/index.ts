import { ICategory } from "../category";

export interface IProduct {
  _id: string;
  name: string;
  price: number;
  description: string;
  brand: string;
  category: ICategory;
  subCategory: string;
  image: string;
  stockQuantity: number;
  color: string;
  isDeleted: boolean;
  isFeatured: boolean;
  status: string;
  tags: string[];
  galleryImages: IGalleryImage[];
  createdAt: string;
  updatedAt: string;
  slug: string;
  __v: number;
}

export interface IGalleryImage {
  url: string;
  alt: string;
  _id: string;
}
