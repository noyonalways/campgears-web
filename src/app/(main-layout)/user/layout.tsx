import { PageBreadcrumb } from "@/components/breadcrumbs";
import { UserSidebar } from "@/shared";
import UserMobileSidebar from "@/shared/user-mobile-sidebar";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const UserLayout = ({ children }: IProps) => {
  return (
    <div>
      <PageBreadcrumb currentPage="User Dashboard" />

      <div className="container mb-6  lg:my-10">
        <div className="flex flex-col lg:flex-row lg:gap-6">
          <UserSidebar />
          <div className="lg:hidden my-3">
            <UserMobileSidebar />
          </div>

          <div className="flex-1">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
