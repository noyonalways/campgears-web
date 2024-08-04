import { useEffect, useState } from "react";
import {
  HiChevronDown,
  HiOutlineAdjustmentsHorizontal,
  HiOutlineListBullet,
  HiOutlineSquares2X2,
} from "react-icons/hi2";
import { useLocation } from "react-router-dom";
import ProductCard from "../../components/product-card";
import { useGetAllProductQuery } from "../../redux/features/product/productApi";
import CategoryList from "./category-list";

interface ICategory {
  id: number | string;
  title: string;
}

const categories: ICategory[] = [
  { id: 1, title: "Men" },
  { id: 2, title: "Women" },
  { id: 3, title: "Kids" },
  { id: 4, title: "Footwear" },
  { id: 5, title: "Backpack" },
  { id: 6, title: "Equipment" },
  { id: 7, title: "Camping" },
];

const Products: React.FC = () => {
  const location = useLocation();
  const [queryParams, setQueryParams] = useState({
    category: new URLSearchParams(location.search).get("category") || "",
  });
  const [isLoading, setIsLoading] = useState(true);

  const { data, error, isFetching } = useGetAllProductQuery(
    queryParams.category ? `category=${queryParams.category}` : "",
    {
      // This ensures the query is not skipped
      refetchOnMountOrArgChange: true,
    }
  );

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category");
    setQueryParams({ category: category || "" });
  }, [location.search]);

  useEffect(() => {
    if (isFetching) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [isFetching]);

  let errorMessage = "";
  if (error) {
    if ("status" in error && error.status === 404) {
      errorMessage =
        (error?.data as { message: string })?.message ||
        "Failed to load products";
    } else {
      errorMessage = "Failed to load products";
    }
  }

  return (
    <section className="font-montserrat pb-10">
      <div className="container">
        <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:justify-between lg:items-start pt-4 lg:pt-4">
          <div className="bg-secondary basis-full lg:basis-[17%] lg:h-screen rounded">
            <div className="lg:sticky lg:top-[138px] p-4">
              <h2 className="text-xl font-bold mb-4">Categories</h2>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <CategoryList title={category.title} key={category.id} />
                ))}
              </ul>
            </div>
          </div>
          <div className="relative space-y-4 basis-full lg:basis-[81.5%] lg:-mt-16">
            <div className="sticky lg:top-[126px] z-10">
              <div className="flex items-center space-x-6 justify-end py-4 w-full bg-white">
                <span className="font-medium">View as</span>
                <div className="flex items-center space-x-4 text-[#898989]">
                  <button className="text-xl text-primary">
                    <HiOutlineSquares2X2 />
                  </button>
                  <button className="text-xl">
                    <HiOutlineListBullet />
                  </button>
                </div>
              </div>
              <div className=" bg-secondary py-2 px-3 flex items-center lg:justify-between rounded lg:space-x-4">
                <div className="absolute top-0 left-0 lg:static flex items-center flex-1">
                  <h3 className="font-medium">
                    {(!error && data?.data.length) || 0} Products Found
                  </h3>
                </div>
                <div className="space-x-4 flex">
                  <button className="text-sm md:text-base px-2 text-black flex items-center bg-white lg:px-4 py-1 space-x-3 rounded-sm">
                    <span>Sort By</span>
                    <HiChevronDown className="text-[#898989]" />
                  </button>
                  <button className="text-sm md:text-base  px-2 text-black flex items-center bg-white lg:px-4 py-1 space-x-3 rounded-sm">
                    <HiOutlineAdjustmentsHorizontal className="text-[#898989]" />
                    <span>Filter</span>
                  </button>
                  <button
                    onClick={() => {
                      setQueryParams({ category: "" });
                      window.history.pushState({}, "", "/products");
                    }}
                    className="text-sm md:text-base px-2 text-black bg-white lg:px-4 py-1 rounded-sm"
                  >
                    Clear Filter
                  </button>
                </div>
              </div>
            </div>
            {isLoading ? (
              <div className="flex-col gap-4 w-full flex items-center justify-center lg:py-44">
                <div className="size-16 border-8 text-primary text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-primary rounded-full">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    className="animate-ping"
                  ></svg>
                </div>
              </div>
            ) : errorMessage ? (
              <div className="text-red-500">{errorMessage}</div>
            ) : data?.data.length === 0 ? (
              <div className="text-center">No products found</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {data?.data.map((product) => (
                  <ProductCard
                    key={product._id}
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    slug={product.slug}
                    _id={product._id}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
