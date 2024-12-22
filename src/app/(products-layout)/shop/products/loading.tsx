import { Skeleton } from "@/components/ui/skeleton";

const ProductsLoading = () => {
  const skeletonCount = 4; // Number of skeleton cards to display

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
      {Array.from({ length: skeletonCount }).map((_, index) => (
        <div key={index + 111} className="bg-secondary rounded">
          {/* Image Section Skeleton */}
          <div className="flex justify-center mt-4 mb-2 relative">
            <Skeleton className="w-[150px] h-[150px] rounded" />
            <div className="flex items-center justify-center absolute bg-background opacity-0 -bottom-10 group-hover:-bottom-2 group-hover:opacity-100 text-muted-foreground rounded duration-200">
              <Skeleton className="w-[40px] h-[40px] rounded-full mx-2" />
              <Skeleton className="w-[40px] h-[40px] rounded-full mx-2" />
            </div>
          </div>

          {/* Content Section Skeleton */}
          <div className="p-4 space-y-3">
            <Skeleton className="w-20 h-4" /> {/* Category */}
            <Skeleton className="w-3/4 h-5" /> {/* Product Title */}
            <div className="flex space-x-1">
              <Skeleton className="w-4 h-4 rounded" />
              <Skeleton className="w-4 h-4 rounded" />
              <Skeleton className="w-4 h-4 rounded" />
              <Skeleton className="w-4 h-4 rounded" />
              <Skeleton className="w-4 h-4 rounded" />
            </div>
            <div className="flex items-center space-x-1">
              <Skeleton className="w-10 h-4" /> {/* Quantity Label */}
              <Skeleton className="w-6 h-4" /> {/* Quantity Number */}
            </div>
            <div className="flex items-end space-x-1">
              <Skeleton className="w-16 h-6" /> {/* Price */}
              <Skeleton className="w-10 h-4" /> {/* Strikethrough Price */}
            </div>
            <Skeleton className="w-full h-10 rounded-full" />{" "}
            {/* Add to Cart */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsLoading;
