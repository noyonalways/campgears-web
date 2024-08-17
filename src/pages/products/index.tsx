import { useEffect, useState } from "react";
import { HiOutlineListBullet, HiOutlineSquares2X2 } from "react-icons/hi2";
import { useLocation, useNavigate } from "react-router-dom";
import PageTitle from "../../components/page-title";
import ProductCard from "../../components/product-card";
import ProductCardSkeleton from "../../components/product-card-skeleton";
import { useGetAllProductQuery } from "../../redux/features/product/productApi";
import CategoryList from "./category-list";
import FilterByCategory from "./filter-by-category";
import PriceRange from "./price-range";
import SortByPrice from "./sort-by-price";

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
  const navigate = useNavigate();
  const [queryParams, setQueryParams] = useState({
    category: "",
    searchTerm: "",
    sort: "",
    minPrice: "",
    maxPrice: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  const query = new URLSearchParams({
    ...(queryParams.category && { category: queryParams.category }),
    ...(queryParams.searchTerm && { searchTerm: queryParams.searchTerm }),
    ...(queryParams.sort && { sort: queryParams.sort }),
    ...(queryParams.minPrice && { minPrice: queryParams.minPrice }),
    ...(queryParams.maxPrice && { maxPrice: queryParams.maxPrice }),
  }).toString();

  const { data, error, isFetching } = useGetAllProductQuery(query, {
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category");
    const searchTerm = params.get("searchTerm");
    const minPrice = params.get("minPrice");
    const maxPrice = params.get("maxPrice");
    setQueryParams((prev) => ({
      ...prev,
      category: category || "",
      searchTerm: searchTerm || "",
      minPrice: minPrice || "",
      maxPrice: maxPrice || "",
    }));
  }, [location.search]);

  useEffect(() => {
    setIsLoading(isFetching);
  }, [isFetching]);

  const handlePriceChange = (
    minPrice: number | null,
    maxPrice: number | null
  ) => {
    setQueryParams((prev) => ({
      ...prev,
      minPrice: minPrice?.toString() || "",
      maxPrice: maxPrice?.toString() || "",
    }));
    navigate(
      `/products?${new URLSearchParams({
        ...queryParams,
        minPrice: minPrice?.toString() || "",
        maxPrice: maxPrice?.toString() || "",
      }).toString()}`
    );
  };

  const handleSortChange = (sortValue: string) => {
    setQueryParams((prev) => ({ ...prev, sort: sortValue }));
  };

  const handleClearFilter = () => {
    setQueryParams({
      category: "",
      searchTerm: "",
      sort: "",
      minPrice: "",
      maxPrice: "",
    });
    navigate(`/products`);
  };

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
      <PageTitle title="Products - Campgears" />
      <section className="font-montserrat pb-20">
        <div className="container">
          <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:justify-between lg:items-start pt-4 lg:pt-4">
            <div className="bg-secondary basis-full lg:basis-[17%] rounded">
              <div className="p-4">
                <h2 className="text-xl font-bold mb-4">Categories</h2>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <CategoryList title={category.title} key={category.id} />
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative space-y-4 basis-full lg:basis-[81.5%] lg:-mt-16">
              <div className="z-10">
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
                <div className="py-2 flex items-center lg:justify-between rounded lg:space-x-4">
                  <div className="absolute top-4 left-0 lg:static flex items-center lg:flex-1 flex-auto">
                    <h3 className="font-medium">
                      {(!error && data?.data.length) || 0} Products Found
                    </h3>
                  </div>
                  <div className="lg:space-x-4 flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center flex-1 lg:flex-none">
                    <div className="flex space-x-4 w-full lg:w-auto justify-between items-center">
                      <PriceRange onPriceChange={handlePriceChange} />
                      <SortByPrice onSelect={handleSortChange} />
                    </div>
                    <div className="flex space-x-4 w-full lg:w-auto justify-between">
                      <FilterByCategory />
                      <button
                        onClick={handleClearFilter}
                        className="border border-primary text-sm md:text-base px-2 text-black bg-white lg:px-4 py-1 rounded"
                      >
                        Clear Filter
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {isLoading ? (
                <div className="grid lg:grid-cols-4 gap-6">
                  <ProductCardSkeleton />
                  <ProductCardSkeleton />
                  <ProductCardSkeleton />
                  <ProductCardSkeleton />
                </div>
              ) : errorMessage ? (
                <div className="text-red-500 text-center py-20">
                  {errorMessage}
                </div>
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
                      description={product.description}
                      category={product.category}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
