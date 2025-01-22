import { Eye, Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GoStar } from "react-icons/go";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "../ui/dialog";

const ProductModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          size="icon" 
          variant="secondary"
          className="rounded-full bg-white hover:bg-primary hover:text-white"
        >
          <Eye size={18} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] lg:max-w-4xl overflow-y-auto max-h-[90vh]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <DialogHeader className="hidden">  
            <DialogTitle> 
              Peanut Butter Bite Premium Butter Cookies 600 g
            </DialogTitle>
          </DialogHeader>
          <div className="w-full h-[400px] relative rounded-lg overflow-hidden bg-secondary/50">
            <Image
              src={`/tent.png`}
              fill
              className="object-contain p-8"
              alt="product-image"
            />
          </div>

          <div className="flex flex-col h-full">
            <div className="mb-6 pb-6 border-b">
              <h2 className="text-2xl font-bold mb-2">
                Peanut Butter Bite Premium Butter Cookies 600 g
              </h2>
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-xl font-semibold text-primary">$35.00</h3>
                <div className="flex items-center text-sm space-x-2">
                  <div className="flex space-x-1 text-orange-400">
                    {[...Array(5)].map((_, i) => (
                      <GoStar key={i} size={16} />
                    ))}
                  </div>
                  <span className="text-muted-foreground">(24 Reviews)</span>
                </div>
              </div>
              <p className="text-muted-foreground">
                Candy canes sugar plum tart cotton candy chupa chups sugar plum
                chocolate I love. Caramels marshmallow icing dessert candy canes
                I love soufflé I love toffee.
              </p>
            </div>

            <div className="space-y-6 flex-1">
              <div className="space-y-4 text-sm">
                <div className="flex items-center">
                  <span className="w-24 text-muted-foreground">Brand:</span>
                  <span>Black Forest</span>
                </div>
                <div className="flex items-center">
                  <span className="w-24 text-muted-foreground">Category:</span>
                  <span>Camping</span>
                </div>
                <div className="flex items-center">
                  <span className="w-24 text-muted-foreground">Stock:</span>
                  <span className="text-green-500">In Stock</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="rounded-full h-8 w-8"
                  >
                    <Minus size={14} />
                  </Button>
                  <span className="text-lg font-medium w-8 text-center">1</span>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="rounded-full h-8 w-8"
                  >
                    <Plus size={14} />
                  </Button>
                </div>
                <Button className="rounded-full">
                  Add to Cart
                </Button>
              </div>

              <Link 
                href={`/shop/products/slug`}
                className="inline-block text-sm text-primary hover:underline"
              >
                View Full Details →
              </Link>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
