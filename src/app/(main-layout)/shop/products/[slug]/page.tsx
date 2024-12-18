import { PageBreadcrumb } from "@/components/breadcrumbs";

interface IProps {
  params?: string;
}

const ProductDetailsPage = ({}: IProps) => {
  return (
    <section>
      <PageBreadcrumb currentPage="Product Details" />
    </section>
  );
};

export default ProductDetailsPage;
