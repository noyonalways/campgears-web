import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function MobileDockSearch() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="px-2 py-3 text-xs space-y-1 flex flex-col items-center">
          <Search />
          <span>Search</span>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Search Products</DialogTitle>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Input type="text" />
          </div>
          <Button type="submit" size="icon" className="px-3">
            <Search />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
