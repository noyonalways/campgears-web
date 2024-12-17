import Link from "next/link";
import { TiHome } from "react-icons/ti";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

interface IProps {
  currentPage: string;
}

export const PageBreadcrumb = ({ currentPage }: IProps) => {
  return (
    <div className="bg-secondary hidden md:block md:py-10 mb-5">
      <div className="container">
        <div className="flex justify-between items-center ">
          <h2 className="text-xl lg:text-2xl font-bold">{currentPage}</h2>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <Link href="/">
                  <TiHome size={20} />
                </Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="font-semibold">
                  {currentPage}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};
