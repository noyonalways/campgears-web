import { Link } from "react-router-dom";

interface IProps {
  title: string;
}

const CategoryList: React.FC<IProps> = ({ title }) => {
  return (
    <li>
      <Link className="hover:text-primary" to={`/products?category=${title}`}>
        {title}
      </Link>
    </li>
  );
};

export default CategoryList;
