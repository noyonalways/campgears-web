import { Helmet } from "react-helmet-async";

interface IProps {
  title: string;
  description?: string;
  keywords?: string[];
}

const PageTitle: React.FC<IProps> = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default PageTitle;
