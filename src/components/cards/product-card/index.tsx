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
import { TProduct } from "@/types/product";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface IProps {
  product: TProduct;
  viewMode: "grid" | "list";
}

const ProductCard = ({ product, viewMode }: IProps) => {
  const isListView = viewMode === "list";

  const QuickActions = () => (
    <div className="flex gap-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              size="icon" 
              variant="secondary"
              className="rounded-full bg-white  hover:bg-primary hover:text-white"
            >
              <Heart size={18} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to Wishlist</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <ProductModal />
    </div>
  );

  return (
    <div className={cn(
      "bg-secondary rounded group relative",
      isListView && "flex gap-4"
    )}>
      <div className={cn(
        "flex justify-center mt-4 mb-2 relative",
        isListView && "basis-48 flex-shrink-0"
      )}>
        <Image 
          src={"/tent.png"} 
          width={150} 
          height={150} 
          alt={product.name}
          className="object-cover" 
        />

        {/* Quick action buttons */}
        <div className={cn(
          "absolute right-2 top-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0",
          isListView && "top-2"
        )}>
          <QuickActions />
        </div>
      </div>

      <div className={cn(
        "p-4",
        isListView && "flex-1"
      )}>
        <p className="text-sm text-muted-foreground mb-2">{product.category.name}</p>
        <Link
          href={`/shop/products/${product.slug}`}
          className="font-medium mb-2 inline-block hover:text-primary transition-colors"
        >
          {product.name}
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
          <span>{product.stockQuantity}</span>
        </p>
        <div className={cn(
          "flex items-center justify-between",
          isListView && "mt-4"
        )}>
          <div>
            <h3 className="text-primary font-medium">${product.price}</h3>
            {product.status === "out-of-stock" && (
              <span className="text-red-500 text-sm">Out of Stock</span>
            )}
          </div>

          <Button 
            className="rounded-full"
            disabled={product.status === "out-of-stock"}
          >
            Add to Cart
          </Button>
        </div>

        {isListView && product.description && (
          <p className="mt-4 text-muted-foreground line-clamp-2">
            {product.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
