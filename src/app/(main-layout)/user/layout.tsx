import { PageBreadcrumb } from "@/components/breadcrumbs";
import { getMe } from "@/services/auth";
import { UserSidebar } from "@/shared";
import UserMobileSidebar from "@/shared/user-mobile-sidebar";
import { TProfile } from "@/types/profile";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const UserLayout = async ({ children }: IProps) => {
  const res = await getMe();
  const profile = res?.data as TProfile;

  return (
    <div>
      <PageBreadcrumb currentPage="User Dashboard" />

      <div className="container mb-6  lg:my-10">
        <div className="flex flex-col lg:flex-row lg:gap-6 lg:items-start">
          <UserSidebar
            avatar={profile?.avatar}
            email={profile?.email}
            name={profile?.name}
          />
          <div className="lg:hidden my-3">
            <UserMobileSidebar
              avatar={profile?.avatar}
              email={profile?.email}
              name={profile?.name}
            />
          </div>

          <div className="flex-1">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
