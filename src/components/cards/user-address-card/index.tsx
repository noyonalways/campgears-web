import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";

interface IProps {
  item?: string;
}

const UserAddressCard = ({}: IProps) => {
  return (
    <div className="bg-background p-4 rounded space-y-4">
      <div className="flex justify-between">
        <h3 className="font-semibold">John Doe</h3>
        <span className="px-2 py-[1px] text-white text-sm rounded bg-primary">
          Home
        </span>
      </div>
      <div className="text-sm">
        <div className="grid grid-cols-2">
          <span>Address:</span>
          <span className="text-muted-foreground">
            8424 James Lane South San Francisco, CA 94080
          </span>
        </div>
        <div className="grid grid-cols-2">
          <span>Postal Code:</span>
          <span className="text-muted-foreground">1730</span>
        </div>
        <div className="grid grid-cols-2">
          <span>Phone:</span>
          <span className="text-muted-foreground">+8801712345678</span>
        </div>
      </div>

      <div className="flex space-x-4 w-full">
        <Button className="w-full" size={"sm"} variant={"secondary"}>
          <Trash2 />
          <span>Remove</span>
        </Button>
        <Button className="w-full" size={"sm"} variant={"secondary"}>
          <Edit />
          <span>Remove</span>
        </Button>
      </div>
    </div>
  );
};

export default UserAddressCard;
