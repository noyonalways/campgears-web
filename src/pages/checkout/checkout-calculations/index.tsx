import { useAppSelector } from "../../../redux/hook";

interface IProps {}

const CheckoutCalculations: React.FC<IProps> = () => {
  const {
    subtotal,
    shippingCharge,
    discountAmount,
    totalPrice,
    totalPriceAfterDiscount,
  } = useAppSelector((store) => store.cart);
  return (
    <div className="text-sm space-y-4">
      <div className="font-medium flex justify-between">
        <span>Cart Subtotal</span>
        <span>$ {subtotal}</span>
      </div>
      <div className="font-medium flex justify-between">
        <span>Shipping Charge</span>
        <span>$ {shippingCharge}</span>
      </div>
      <div className="font-medium flex justify-between">
        <span>Discount Amount</span>
        <span>$ {discountAmount}</span>
      </div>
      <div className="font-medium flex justify-between">
        <span>Total</span>
        <span>$ {totalPrice}</span>
      </div>
      <div className="text-base font-semibold flex justify-between">
        <span>Grand Total</span>
        <span>$ {totalPriceAfterDiscount}</span>
      </div>
    </div>
  );
};

export default CheckoutCalculations;
