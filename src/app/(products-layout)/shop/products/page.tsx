import ProductCard from "@/components/cards/product-card";
import { getProducts } from "@/services/product";
import { TProduct } from "@/types/product";
const ProductsPage = async () => {
  const res = await getProducts();
  const products = res?.data as TProduct[];

  return (
    <>
      {/* products cards */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} />
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
