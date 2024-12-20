"use client";

import {
  DropdownMenuItem,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import { protectedRoutes } from "@/constant";
import { useUser } from "@/context/user.context";
import { logOutUser } from "@/services/auth";
import { usePathname, useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { setIsLoading: setUserLoading } = useUser();

  const handleLogout = () => {
    logOutUser();
    setUserLoading(true);

    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
      return;
    }
  };

  return (
    <DropdownMenuItem
      onClick={handleLogout}
      className="text-destructive hover:!text-destructive hover:!bg-destructive/10"
    >
      Log out
      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
    </DropdownMenuItem>
  );
};

export default LogoutButton;
