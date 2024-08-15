interface IProps {
  name: string;
  productId: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

const OrderItem: React.FC<IProps> = ({
  name,
  productId,
  price,
  quantity,
  totalPrice,
}) => {
  return (
    <tr className="border-b border-gray-200">
      <td className="py-4 px-6 text-sm">{name}</td>
      <td className="py-4 px-6 text-sm">{productId}</td>
      <td className="py-4 px-6 text-sm">${price.toFixed(2)}</td>
      <td className="py-4 px-6 text-sm">{quantity}</td>
      <td className="py-4 px-6 text-sm">${totalPrice.toFixed(2)}</td>
    </tr>
  );
};

export default OrderItem;
