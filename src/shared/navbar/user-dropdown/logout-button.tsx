"use client";

import {
  DropdownMenuItem,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import { protectedRoutes } from "@/constant";
import { logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { logOutUser } from "@/services/auth";
import { usePathname, useRouter } from "next/navigation";

// import { selectCurrentUser } from "@/redux/features/auth/authSlice";
// import { useAppSelector } from "@/redux/hooks";

const LogoutButton = () => {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  // const user = useAppSelector(selectCurrentUser);

  const handleLogout = () => {
    logOutUser();
    dispatch(logout());

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
