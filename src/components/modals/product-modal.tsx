import { Eye, Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GoStar, GoStarFill } from "react-icons/go";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface IProps {
  item?: string;
}

const ProductModal = ({}: IProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="hover:text-primary px-10 py-1 border-r">
                <Eye size={20} />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Quick View</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] lg:max-w-6xl overflow-y-scroll lg:overflow-y-hidden max-h-svh">
        <DialogHeader hidden>
          <DialogTitle hidden>Product Details</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
          <div className="w-full">
            <Image
              className="w-full"
              src={`/images/cake.jpg`}
              width={350}
              height={350}
              alt="product-image"
            />
          </div>

          <div>
            <div className="mb-4 border-b border-dashed pb-4">
              <h2 className="text-2xl font-bold mb-1">
                Peanut Butter Bite Premium Butter Cookies 600 g
              </h2>
              <h3 className="text-lg mb-2">$35.00</h3>
              <div className="flex items-center text-sm space-x-2">
                <div className="flex space-x-1 text-orange-400">
                  <GoStarFill />
                  <GoStarFill />
                  <GoStarFill />
                  <GoStarFill />
                  <GoStar />
                </div>
                <span className="text-muted-foreground">Reviews</span>
              </div>
            </div>

            <div className="border-b border-dashed pb-4 mb-6">
              <h3 className="font-medium text-lg mb-2">Product Details</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Candy canes sugar plum tart cotton candy chupa chups sugar plum
                chocolate I love. Caramels marshmallow icing dessert candy canes
                I love soufflé I love toffee. Marshmallow pie sweet sweet roll
                sesame snaps tiramisu jelly bear claw. Bonbon muffin I love
                carrot cake sugar plum dessert bonbon.
              </p>
              <div className="text-sm space-y-2">
                <div className="grid grid-cols-8">
                  <span className="col-span-3 lg:col-span-2">Brand Name:</span>
                  <span className="col-span-4 lg:col-span-6">Black Forest</span>
                </div>
                <div className="grid grid-cols-8">
                  <span className="col-span-3 lg:col-span-2">
                    Product Code:
                  </span>
                  <span className="col-span-4 lg:col-span-6">4552DHEd</span>
                </div>
                <div className="grid grid-cols-8">
                  <span className="col-span-3 lg:col-span-2">
                    Product Type:
                  </span>
                  <span className="col-span-4 lg:col-span-6">
                    White Cream Cake
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex space-x-2 items-center">
                <span>Quantity:</span>
                <div className="flex items-center space-x-6">
                  <Button
                    size={`icon`}
                    variant={`secondary`}
                    className="rounded-full"
                  >
                    <Minus size={14} />
                  </Button>
                  <span>1</span>
                  <Button
                    size={`icon`}
                    variant={`secondary`}
                    className="rounded-full"
                  >
                    <Plus size={14} />
                  </Button>
                </div>
              </div>

              <div className="flex space-x-4 items-center">
                <Link href={`/shop/products/slug`}>
                  <Button variant={`secondary`}>View Details</Button>
                </Link>
                <Button variant={`default`}>Add to Cart</Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
