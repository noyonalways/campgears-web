import { motion } from "framer-motion";
import Loading from "../../components/loading";
import PageTitle from "../../components/page-title";
import { useGetAllProductQuery } from "../../redux/features/product/productApi";
import AddProductModal from "./add-product-modal";
import ProductManagementCard from "./product-management-card";

interface IProps {}

const ProductManagement: React.FC<IProps> = () => {
  const { data, isLoading, error } = useGetAllProductQuery(undefined);

  let errorMessage = "";
  if (error) {
    errorMessage = "Failed to load products";
    if ("status" in error && error.status === 404) {
      errorMessage =
        (error?.data as { message: string })?.message || errorMessage;
    }
  }

  return (
    <>
      <PageTitle title="Product Management - Campgears" />
      <motion.section
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="font-montserrat py-10"
      >
        <div className="container">
          <div className="mb-6">
            <AddProductModal />
          </div>
          <div className="font-semibold lg:flex items-center bg-secondary p-4 rounded hidden mb-4">
            <div className="flex items-center basis-[55%]">
              <span className="basis-[23%]">Image</span>
              <span className="flex-1">Name</span>
            </div>
            <div className="flex items-center flex-1 justify-between">
              <div className="flex items-center basis-[65%] justify-between">
                <span>Price</span>
                <span>Quantity</span>
                <span>Category</span>
              </div>
              <span>Actions</span>
            </div>
          </div>
          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <Loading />
            </div>
          ) : (
            <>
              {errorMessage ? (
                <div className="text-red-500 text-center font-montserrat py-16">
                  {errorMessage}
                </div>
              ) : (
                <div className="space-y-4">
                  {data?.data?.map((product) => (
                    <ProductManagementCard
                      key={product._id}
                      productId={product._id}
                      name={product.name}
                      image={product.image}
                      price={product.price}
                      category={product.category}
                      quantity={product.stockQuantity}
                      slug={product.slug}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </motion.section>
    </>
  );
};

export default ProductManagement;
