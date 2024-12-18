import { Box, Star } from "lucide-react";
import Image from "next/image";
import DeliveryStatus from "./delivery-status";

interface IProps {
  item?: string;
}

const UserOrderHistoryCard = ({}: IProps) => {
  return (
    <div className="bg-background p-4 rounded-md space-y-6 group">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 lg:gap-4">
        <div className="p-[10px] rounded-full text-primary bg-primary/10">
          <Box />
        </div>
        <div>
          <div className="flex space-x-4 items-center">
            <h3 className="text-lg font-medium">Delivers</h3>
            <DeliveryStatus status="pending" />
          </div>
          <p className="text-muted-foreground text-sm lg:text-base">
            Gouda parmesan caerphilly mozzarella cottage cheese cauliflower
            cheese taleggio gouda.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center lg:flex-row gap-2 lg:gap-6 bg-secondary rounded-lg p-2">
        <div className="overflow-hidden">
          <Image
            className="group-hover:scale-110 duration-200"
            src={`/tent.png`}
            width={250}
            height={250}
            alt="product-image"
          />
        </div>
        <div className="space-y-4">
          <div>
            <h2 className="font-semibold text-xl">Product full title</h2>
            <p className="text-muted-foreground text-sm lg:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              sunt consectetur obcaecati voluptas ipsum tempore.
            </p>
          </div>

          <div>
            <div className="flex items-center space-x-2">
              <span>Price:</span>
              <span className="font-medium">$20.00</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>Rate:</span>
              <div className="flex space-x-[2px] text-orange-300">
                <Star size={16} />
                <Star size={16} />
                <Star size={16} />
                <Star size={16} />
                <Star size={16} />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span>Sold by:</span>
              <span className="font-medium">Fresho</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>Quantity:</span>
              <span className="font-medium">2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserOrderHistoryCard;
