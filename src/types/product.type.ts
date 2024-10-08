type TProductStatus = "in-stock" | "out-of-stock" | "discontinued";

export type TGalleryImage = {
  url: string;
  alt: string;
};

export type TProduct = {
  _id: string;
  name: string;
  price: number;
  description: string;
  brand: string;
  category: string;
  subCategory: string;
  image: string;
  stockQuantity: number;
  color: string;
  isDeleted: boolean;
  isFeatured: boolean;
  tags: string[];
  status: TProductStatus;
  galleryImages: TGalleryImage[];
  createdAt: Date;
  updatedAt: Date;
  slug: string;
};

export interface IFormInputs {
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  color: string;
  category: string;
  subCategory: string;
  brand: string;
  status: string;
  isFeatured: boolean;
  tags: string[];
  image: string;
  galleryImages: TGalleryImage[] | null;
}

export type TGetAllProductResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  data: TProduct[];
};

export type TGetProductResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  data: TProduct;
};

export type TProductErrorResponse = {
  status: number;
  data: {
    success: boolean;
    message: string;
    statusCode: number;
    data?: TProduct[];
  };
};
