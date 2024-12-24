import { TCategory } from "../category";

export type TProduct = {
  _id: string;
  name: string;
  price: number;
  description: string;
  brand: string;
  category: TCategory;
  subCategory: string;
  image: string;
  stockQuantity: number;
  color: string;
  isDeleted: boolean;
  isFeatured: boolean;
  status: string;
  tags: string[];
  galleryImages: TGalleryImage[];
  createdAt: string;
  updatedAt: string;
  slug: string;
  __v: number;
};

export type TGalleryImage = {
  url: string;
  alt: string;
  _id: string;
};
