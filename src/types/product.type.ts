type TProductStatus = "in-stock" | "out-of-stock" | "discontinued";

type TGalleryImage = {
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
