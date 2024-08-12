import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { Link } from "react-router-dom";

interface IProps {}

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

const FilterByCategory: React.FC<IProps> = () => {
  return (
    <div>
      <div className="relative w-full group">
        <button className=" w-full text-site bg-transparent focus:border-brand focus:outline-none focus:ring-0 peer justify-between border border-primary text-sm md:text-base px-2 text-black flex items-center bg-white space-x-4 lg:px-4 py-1 rounded">
          <HiOutlineAdjustmentsHorizontal />
          <span>Filter by category</span>
        </button>
        <ul className="absolute z-[99] -left-8 lg:left-0 rounded-md overflow-hidden shadow-lg min-w-[200px] w-max peer-focus:visible peer-focus:opacity-100 opacity-0 invisible duration-200 p-1 border border-dimmed text-xs md:text-sm bg-white">
          {categories.map((category) => (
            <Link
              className="w-full block cursor-pointer hover:text-link px-3 py-2 rounded-md hover:bg-secondary"
              to={`/products?category=${category.title}`}
            >
              {category.title}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterByCategory;
