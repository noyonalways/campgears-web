import { motion } from "framer-motion";
import PageTitle from "../../components/page-title";
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
  // const location = useLocation();
  // const [queryParams, setQueryParams] = useState({
  //   category: "",
  //   searchTerm: "",
  //   sort: "",
  //   minPrice: "",
  //   maxPrice: "",
  //   limit: "12", // Add limit to the queryParams state
  // });

  // const query = new URLSearchParams({
  //   ...(queryParams.category && { category: queryParams.category }),
  //   ...(queryParams.searchTerm && { searchTerm: queryParams.searchTerm }),
  //   ...(queryParams.sort && { sort: queryParams.sort }),
  //   ...(queryParams.minPrice && { minPrice: queryParams.minPrice }),
  //   ...(queryParams.maxPrice && { maxPrice: queryParams.maxPrice }),
  //   limit: queryParams.limit, // Include limit in the query string
  // }).toString();

  // const { data, error, isFetching } = useGetAllProductQuery(query, {
  //   refetchOnMountOrArgChange: true,
  // });

  // useEffect(() => {
  //   const params = new URLSearchParams(location.search);
  //   const category = params.get("category");
  //   const searchTerm = params.get("searchTerm");
  //   const minPrice = params.get("minPrice");
  //   const maxPrice = params.get("maxPrice");
  //   setQueryParams((prev) => ({
  //     ...prev,
  //     category: category || "",
  //     searchTerm: searchTerm || "",
  //     minPrice: minPrice || "",
  //     maxPrice: maxPrice || "",
  //   }));
  // }, [location.search]);

  return (
    <>
      <PageTitle title="Products - Campgears" />
      <motion.section
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="font-montserrat pb-20"
      >
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
            <div className="flex-1">All Products</div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Products;
