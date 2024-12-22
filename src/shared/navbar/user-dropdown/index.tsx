"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { CircleUserRound } from "lucide-react";
import Link from "next/link";
import LogoutButton from "./logout-button";

export default function UserDropdown() {
  const user = useAppSelector(selectCurrentUser);

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
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:!text-primary hover:!bg-primary/10">
              <Link className="w-full" href="/user/overview">
                Overview
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:!text-primary hover:!bg-primary/10">
              <Link className="w-full" href="/user/orders">
                Orders
              </Link>
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
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:!text-primary hover:!bg-primary/10">
              <Link className="w-full" href="/auth/register">
                Register
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  );
}
