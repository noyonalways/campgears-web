import { Minus, Plus } from "lucide-react";
import Image from "next/image";

interface IProps {
  item?: string;
}

const CartCard = ({}: IProps) => {
  return (
    <div className="flex justify-between border-b border-dashed py-4 w-[780px] lg:w-auto">
      <div className="flex space-x-2">
        <div>
          <Image width={80} height={80} src={`/tent.png`} alt="product-image" />
        </div>
        <div className="space-y-2 flex-1">
          <h3 className="font-semibold">Product Name</h3>
          <div className="space-y-1">
            <p className="text-sm">Category</p>
            <p className="text-sm">Quantity: 121</p>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <h4>Price</h4>
        <div className="space-y-1">
          <div className="flex space-x-1">
            <h3>$35</h3>
            <h3 className="line-through text-muted-foreground">$45</h3>
          </div>
          <p className="text-primary">You Save: $10</p>
        </div>
      </div>
      <div className="space-y-2">
        <h4>Qty</h4>
        <div className="flex items-center space-x-4">
          <button className="rounded-full bg-gray-200 p-2">
            <Minus size={20} />
          </button>
          <p>1</p>
          <button className="rounded-full bg-gray-200 p-2">
            <Plus size={20} />
          </button>
        </div>
      </div>
      <div className="space-y-2">
        <h4>Total</h4>
        <h3 className="text-lg font-medium">$35</h3>
      </div>
      <div className="space-y-2">
        <h4>Action</h4>
        <div className=" flex flex-col items-start">
          <button className="text-primary underline">Save for later</button>
          <button className="text-destructive underline">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
