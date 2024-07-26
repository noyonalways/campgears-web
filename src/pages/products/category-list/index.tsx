interface IProps {
  url: string;
  title: string;
}

const CategoryList: React.FC<IProps> = ({ url, title }) => {
  return (
    <li>
      <a className="hover:text-primary" href={url}>
        {title}
      </a>
    </li>
  );
};

export default CategoryList;
