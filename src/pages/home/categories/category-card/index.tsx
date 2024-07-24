interface IProps {
  image: string;
  title: string;
}

const CategoryCard: React.FC<IProps> = ({ image, title }) => {
  return (
    <a
      href="#"
      className="text-center space-y-3 lg:relative rounded-lg group lg:border overflow-hidden"
    >
      <figure className="border lg:border-none overflow-hidden rounded-lg lg:rounded-none ">
        <img
          className="hover:scale-105 duration-200"
          src={image}
          alt="mens-category"
        />
      </figure>
      <h2 className="text-base lg:text-xl font-bold lg:absolute lg:left-0 lg:bottom-0 lg:pb-2 lg:pl-3">
        {title}
      </h2>
    </a>
  );
};

export default CategoryCard;
