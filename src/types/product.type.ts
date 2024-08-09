type TProductStatus = "in-stock" | "out-of-stock" | "discontinued";

export type TGalleryImage = {
  url: string;
  alt: string;
};

type TProduct = {
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
