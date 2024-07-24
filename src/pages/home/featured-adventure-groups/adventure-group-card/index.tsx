interface IProps {
  image: string;
  title: string;
  description: string;
}

const AdventureGroupCard: React.FC<IProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="border rounded-lg flex flex-col space-y-3">
      <img src={image} alt="featured-group-image" />
      <div className="px-4 pb-4 space-y-3 flex flex-col h-full items-start justify-between">
        <div className="space-y-2">
          <h2 className="text lg font-bold">{title}</h2>
          <p>{description}</p>
        </div>
        <button className="btn">Read More</button>
      </div>
    </div>
  );
};

export default AdventureGroupCard;
