interface IProps {
  image: string;
  title: string;
}

const CategoryCard: React.FC<IProps> = ({ image, title }) => {
  return (
    <a href="#" className="text-center space-y-3 relative rounded-lg">
      <img className="border rounded-lg" src={image} alt="mens-category" />
      <h2 className="text-xl font-bold absolute left-0 bottom-0 pb-2 pl-3">
        {title}
      </h2>
    </a>
  );
};

export default CategoryCard;
