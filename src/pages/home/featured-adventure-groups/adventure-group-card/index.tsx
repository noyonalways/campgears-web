import Button from "../../../../components/ui/button";

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
    <div className="border rounded-lg flex flex-col group overflow-hidden">
      <figure className="overflow-hidden">
        <img
          className="group-hover:scale-105 duration-200"
          src={image}
          alt="featured-group-image"
        />
      </figure>
      <div className="p-4 flex flex-col flex-1 items-start justify-between">
        <div className="space-y-2 mb-3">
          <h2 className="text lg font-bold">{title}</h2>
          <p>{description}</p>
        </div>
        <Button>Read More</Button>
      </div>
    </div>
  );
};

export default AdventureGroupCard;
