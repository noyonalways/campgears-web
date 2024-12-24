import ProductCard from "@/components/cards/product-card";
import { getProducts } from "@/services/product";
import { isTProduct } from "@/type-guards/product";
import { TProduct } from "@/types/product";

const ProductsPage = async () => {
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

  return (
    <div>
      {errorMessage ? (
        <p>{errorMessage}</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
          {products.map((product) => (
            <ProductCard key={product._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
