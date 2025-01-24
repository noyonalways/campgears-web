"use client";

import { Button } from "@/components/ui/button";
import { LayoutGrid, List } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const ViewToggle = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentView = searchParams.get("view") || "grid";

  const setView = (view: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("view", view);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex space-x-2 items-center">
      <span className="text-muted-foreground text-sm">View as</span>
      <div className="flex space-x-2">
        <Button
          size="icon"
          variant={currentView === "grid" ? "default" : "secondary"}
          onClick={() => setView("grid")}
        >
          <LayoutGrid size={20} />
        </Button>
        <Button
          size="icon"
          variant={currentView === "list" ? "default" : "secondary"}
          onClick={() => setView("list")}
        >
          <List size={20} />
        </Button>
      </div>
    </div>
  );
};

export default ViewToggle;
