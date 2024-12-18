"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { userSidebarLinks } from "./user-sidebar-links";

const UserSidebar = () => {
  const pathName = usePathname();
  return (
    <div className="hidden lg:block lg:basis-[25%] rounded-md overflow-hidden bg-secondary pb-6 sticky top-48 xl:h-[calc(100vh-320px)]">
      <div className="w-full">
        <div
          className={`bg-[url('/images/user-cover.jpg')] bg-cover relative h-32`}
        >
          <Image
            className="rounded-full absolute -bottom-14 right-1/2 translate-x-1/2 bg-background p-2"
            src={`/images/avatar.jpg`}
            width={100}
            height={100}
            alt="user-avatar"
          />
        </div>
        <div className="text-center mt-16 mb-6">
          <h2 className="font-semibold text-lg">Test User</h2>
          <p className="text-muted-foreground">test-user@example.com</p>
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
