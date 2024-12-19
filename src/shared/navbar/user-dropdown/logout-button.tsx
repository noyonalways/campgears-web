"use client";

import {
  DropdownMenuItem,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import { logOutUser } from "@/services/auth";

const LogoutButton = () => {
  const handleLogout = async () => {
    await logOutUser();
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
