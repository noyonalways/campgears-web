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

interface IProps {
  product: TProduct;
  viewMode: "grid" | "list";
}

const ProductCard = ({ product, viewMode }: IProps) => {
  const isListView = viewMode === "list";

  return (
    <div className={cn(
      "bg-secondary rounded group",
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

        <div className={
          `
          flex items-center justify-center absolute bg-background opacity-0  group-hover:-bottom-2 group-hover:opacity-100 text-muted-foreground rounded duration-200
          ${isListView ? "" : "-bottom-10 w-full"}
          `
        }>
          <ProductModal />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="hover:text-primary px-10 py-1">
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

      <div className={cn(
        "p-4",
        isListView && "flex-1"
      )}>
        <p className="text-sm text-muted-foreground mb-2">{product.category.name}</p>
        <Link
          href={`/shop/products/${product.slug}`}
          className="font-medium mb-2 inline-block"
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
          "flex items-end space-x-1 mb-2",
          isListView && "justify-between items-center"
        )}>
          <div>
            <h3 className="text-primary font-medium">${product.price}</h3>
            {product.status === "out-of-stock" && (
              <span className="text-red-500 text-sm">Out of Stock</span>
            )}
          </div>

          {isListView && (
            <div className="flex gap-2">
              <button 
                disabled={product.status === "out-of-stock"}
                className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Add to Cart
              </button>
              <button className="bg-background px-4 py-2 rounded-full hover:bg-primary/10 hover:text-primary">
                Quick View
              </button>
            </div>
          )}
        </div>

        {!isListView && (
          <button 
            disabled={product.status === "out-of-stock"}
            className="bg-background px-4 py-2 flex items-center justify-center w-full rounded-full hover:bg-primary/10 hover:text-primary font-medium text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add to Cart
          </button>
        )}

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
