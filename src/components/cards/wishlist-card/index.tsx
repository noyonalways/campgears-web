import { X } from "lucide-react";
import Image from "next/image";

interface IProps {
  item?: string;
  cardClass?: string;
  buttonClass?: string;
}

const WishlistCard = ({ cardClass, buttonClass }: IProps) => {
  return (
    <div
      className={`p-2 md:p-4 rounded-md bg-secondary group relative w-full ${cardClass}`}
    >
      <button
        className={`absolute right-2 top-2 bg-white rounded-full p-2 shadow `}
      >
        <X size={15} />
      </button>
      <div className="flex justify-center mb-2 group-hover:scale-105 duration-100">
        <Image src={`/tent.png`} width={150} height={150} alt="product-image" />
      </div>
      <p className="mb-1 text-sm">Tent</p>
      <h3 className="font-semibold">This is a product dummy title goes here</h3>
      <small>Q: 10</small>
      <div className="flex items-end space-x-1 mb-2">
        <h2 className="text-primary font-semibold">$102</h2>
        <small className="line-through text-muted-foreground">$150</small>
      </div>
      <div>
        <button
          className={`bg-white px-4 py-2 flex items-center justify-center w-full rounded-full ${buttonClass}`}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default WishlistCard;
