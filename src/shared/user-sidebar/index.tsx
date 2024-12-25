"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { userSidebarLinks } from "./user-sidebar-links";

interface IProps {
  avatar?: string;
  name?: string;
  email?: string;
}

const UserSidebar = ({ avatar, name, email }: IProps) => {
  const pathName = usePathname();
  return (
    <div className="hidden lg:block lg:basis-[25%] rounded-md overflow-hidden bg-secondary lg:pb-16 sticky top-48">
      <div className="w-full">
        <div
          className={`bg-[url('/images/user-cover.jpg')] bg-cover relative h-32`}
        >
          <>
            {avatar ? (
              <Image
                className="rounded-full absolute -bottom-14 right-1/2 translate-x-1/2 bg-background p-2"
                src={avatar || "/images/user.jpg"}
                width={100}
                height={100}
                alt={name + "avatar"}
              />
            ) : (
              <div className="text-4xl rounded-full absolute -bottom-10 right-1/2 translate-x-1/2 size-20 bg-primary flex items-center justify-center font-bold text-white">
                {name?.[0].toUpperCase()}
              </div>
            )}
          </>
        </div>
        <div className="text-center mt-16 mb-6">
          <h2 className="font-semibold text-lg">{name}</h2>
          <p className="text-muted-foreground">{email}</p>
        </div>

        <div>
          <ul>
            {userSidebarLinks.map((link) => (
              <li key={link.id}>
                <Link
                  className={`flex items-center space-x-2 px-4 hover:bg-primary/10 hover:text-primary py-3 hover:border-primary  border-l-2 ${
                    pathName === link.href
                      ? "border-l-2 bg-primary/10 border-l-primary"
                      : "border-l-transparent"
                  }`}
                  href={link.href}
                >
                  {link.icon}
                  <span className="font-medium">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserSidebar;
