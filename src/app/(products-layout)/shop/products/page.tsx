import ProductCard from "@/components/cards/product-card";
import { getProducts } from "@/services/product";
import { isTProduct } from "@/type-guards/product";
import { TProduct } from "@/types/product";
import { Suspense } from "react";

interface Props {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const ProductsPage = async ({ searchParams }: Props) => {
  const params = await searchParams;
  const viewMode = (params.view as string) || "grid";
  let products: TProduct[] = [];
  let errorMessage: string | null = null;

  try {
    const res = await getProducts();
    if (Array.isArray(res?.data) && res?.data.every(isTProduct)) {
      products = res?.data;
    } else {
      errorMessage = "Invalid product data";
    }
  } catch (error) {
    errorMessage = "Failed to fetch products";
    console.error(error);
  }

  const gridViewClasses =
    "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 lg:gap-6";
  const listViewClasses = "flex flex-col space-y-4";

  return (
    <div>
      {errorMessage ? (
        <p>{errorMessage}</p>
      ) : (
        <Suspense fallback={<div>Loading products...</div>}>
          <div
            className={viewMode === "grid" ? gridViewClasses : listViewClasses}
          >
            {products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                viewMode={viewMode as "grid" | "list"}
              />
            ))}
          </div>
        </Suspense>
      )}
    </div>
  );
};

export default ProductsPage;
