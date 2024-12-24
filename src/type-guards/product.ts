import { TCategory } from "@/types/category";
import { TGalleryImage, TProduct } from "@/types/product";

export const isTProduct = (data: unknown): data is TProduct => {
  if (typeof data !== "object" || data === null) return false;

  const product = data as TProduct;

  return (
    typeof product._id === "string" &&
    typeof product.name === "string" &&
    typeof product.price === "number" &&
    typeof product.description === "string" &&
    typeof product.brand === "string" &&
    isTCategory(product.category) &&
    typeof product.subCategory === "string" &&
    typeof product.image === "string" &&
    typeof product.stockQuantity === "number" &&
    typeof product.color === "string" &&
    typeof product.isDeleted === "boolean" &&
    typeof product.isFeatured === "boolean" &&
    typeof product.status === "string" &&
    Array.isArray(product.tags) &&
    product.tags.every((tag) => typeof tag === "string") &&
    Array.isArray(product.galleryImages) &&
    product.galleryImages.every(isTGalleryImage) &&
    typeof product.createdAt === "string" &&
    typeof product.updatedAt === "string" &&
    typeof product.slug === "string" &&
    typeof product.__v === "number"
  );
};

export const isTGalleryImage = (data: unknown): data is TGalleryImage => {
  if (typeof data !== "object" || data === null) return false;

  const galleryImage = data as TGalleryImage;

  return (
    typeof galleryImage.url === "string" &&
    typeof galleryImage.alt === "string" &&
    typeof galleryImage._id === "string"
  );
};

export const isTCategory = (data: unknown): data is TCategory => {
  if (typeof data !== "object" || data === null) return false;

  const category = data as TCategory;

  return (
    typeof category._id === "string" &&
    typeof category.name === "string" &&
    typeof category.createdAt === "string" &&
    typeof category.updatedAt === "string" &&
    typeof category.__v === "number"
  );
};
