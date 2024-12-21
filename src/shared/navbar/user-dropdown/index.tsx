"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUser } from "@/context/user.context";
import { CircleUserRound } from "lucide-react";
import Link from "next/link";
import LogoutButton from "./logout-button";

export default function UserDropdown() {
  const { user } = useUser();

  return (
    <>
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="font-bold uppercase ring-2 ring-primary size-6 text-sm">
              <AvatarFallback className="text-xs">
                {user.email?.[0]}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuItem className="hover:!text-primary hover:!bg-primary/10">
              <Link className="w-full" href="/user/profile">
                Profile
              </Link>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:!text-primary hover:!bg-primary/10">
              <Link className="w-full" href="/user/overview">
                Dashboard
              </Link>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:!text-primary hover:!bg-primary/10">
              <Link className="w-full" href="/user/orders">
                Orders
              </Link>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>

            {/* logout user */}
            <LogoutButton />
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <CircleUserRound className="hover:text-primary" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuItem className="hover:!text-primary hover:!bg-primary/10">
              <Link className="w-full" href="/auth/login">
                Login
              </Link>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:!text-primary hover:!bg-primary/10">
              <Link className="w-full" href="/auth/register">
                Register
              </Link>
              <DropdownMenuShortcut>⇧⌘R</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  );
}
