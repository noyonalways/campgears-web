import tent from "../../../assets/images/products/tent.png";

interface IProps {}

const Card: React.FC<IProps> = () => {
  return (
    <tr className="border">
      <td className="size-40 p-4">
        <figure>
          <img src={tent} alt="" />
        </figure>
      </td>
      <td className="p-4 max-w-xs">
        <h2 className="text lg font-bold text-start">
          Inflatable Camping Tent Air Seconds 4.1 F&B 4 Person 1 Bedroom
        </h2>
      </td>
      <td className="p-4">
        <span className="block text-center">$ 299.99</span>
      </td>
      <td className="p-4">
        <span className="block text-center">45</span>
      </td>
      <td className="p-4">
        <span className="block text-center">Tents</span>
      </td>
      <td className="p-4">
        <div className="flex justify-center space-x-4">
          <button className="px-4 py-1 rounded active:scale-95 duration-100 text-white bg-red-500">
            Delete
          </button>
          <button className="px-4 py-1 rounded active:scale-95 duration-100 text-white bg-primary">
            Update
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Card;
