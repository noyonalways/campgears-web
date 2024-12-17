import { Heart, Home, MapPin, ShoppingBag, User } from "lucide-react";
import { ReactNode } from "react";

interface IUserSidebarLink {
  id: string;
  label: string;
  href: string;
  icon?: ReactNode;
}

export const userSidebarLinks: IUserSidebarLink[] = [
  {
    id: "0001",
    label: "Dashboard",
    href: "/user/overview",
    icon: <Home size={20} />,
  },
  {
    id: "0003",
    label: "Orders",
    href: "/user/orders",
    icon: <ShoppingBag size={20} />,
  },
  {
    id: "0002",
    label: "Wishlist",
    href: "/user/wishlist",
    icon: <Heart size={20} />,
  },
  {
    id: "0004",
    label: "Address",
    href: "/user/address",
    icon: <MapPin size={20} />,
  },
  {
    id: "0005",
    label: "Profile",
    href: "/user/profile",
    icon: <User size={20} />,
  },
];
