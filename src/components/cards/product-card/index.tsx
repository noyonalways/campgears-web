import ProductModal from "@/components/modals/product-modal";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Heart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  item?: string;
}

const ProductCard = ({}: IProps) => {
  return (
    <div className="bg-secondary rounded group">
      <div className="flex justify-center mt-4 mb-2 relative ">
        <Image src={`/tent.png`} width={150} height={150} alt="product-image" />

        <div className="flex items-center justify-center absolute bg-background opacity-0 -bottom-10 group-hover:-bottom-2 group-hover:opacity-100 text-muted-foreground rounded duration-200">
          <ProductModal />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="hover:text-primary px-10 py-1 ">
                  <Heart size={20} />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add to Wishlist</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <div className="p-4">
        <p className="text-sm text-muted-foreground mb-2">Category</p>
        <Link
          href={`/shop/products/slug`}
          className="font-medium mb-2 inline-block"
        >
          Product Full Title Here
        </Link>
        <div className="flex space-x-1 text-orange-400 mb-2">
          <Star size={14} />
          <Star size={14} />
          <Star size={14} />
          <Star size={14} />
          <Star size={14} />
        </div>
        <p className="text-sm text-muted-foreground mb-1 flex items-center space-x-1">
          <span>Qty:</span>
          <span>16</span>
        </p>
        <div className="flex items-end space-x-1 mb-2">
          <h3 className="text-primary font-medium">$35.00</h3>
          <span className="line-through text-muted-foreground text-sm">
            $45.00
          </span>
        </div>

        <button className="bg-background px-4 py-2 flex items-center justify-center w-full rounded-full hover:bg-primary/10 hover:text-primary font-medium text-sm md:text-base">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
